"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const $ = id => document.getElementById(id);

    const STORY = window.STORY || {};
    const SAVE = window.SaveSystem || null;

    let game = fresh();
    let typing = false;
    let timer = null;

    const params = new URLSearchParams(
        window.location.search
    );


    /* =========================================================
       NOUVELLE PARTIE
    ========================================================= */

    function fresh(){

        return {

            scene:"start",

            chapter:"PROLOGUE",

            clues:[],

            items:[],

            decisions:[],

            endings:[],

            started:Date.now(),

            lastSaved:Date.now()
        };
    }


    /* =========================================================
       ALIAS DES TRANSITIONS
    ========================================================= */

    const aliases = {

        chapter1_start:"chapter1_begin",

        chapter2_begin:"chapter2_start",

        chapter3_begin:"chapter3_start",

        chapter4_begin:"chapter4_start",

        chapter5_begin:"chapter5_start"
    };


    function resolve(id){

        if(STORY[id]){

            return id;
        }

        if(
            aliases[id] &&
            STORY[aliases[id]]
        ){

            return aliases[id];
        }

        return id;
    }


    /* =========================================================
       NOTIFICATION
    ========================================================= */

    function toast(text){

        const element =
            $("toast");

        if(!element){

            return;
        }

        element.textContent =
            text;

        element.classList.add(
            "show"
        );

        clearTimeout(
            element._toast
        );

        element._toast =
            setTimeout(
                () => {

                    element.classList.remove(
                        "show"
                    );

                },
                2200
            );
    }


    /* =========================================================
       SAUVEGARDE
    ========================================================= */

    function save(show=false){

        if(
            !SAVE ||
            typeof SAVE.save !== "function"
        ){

            return false;
        }

        game.lastSaved =
            Date.now();

        const result =
            SAVE.save(game);

        if(
            show &&
            result
        ){

            toast(
                "💾 Partie sauvegardée"
            );
        }

        return result;
    }


    /* =========================================================
       CHARGEMENT
    ========================================================= */

    function load(){

        if(
            !SAVE ||
            typeof SAVE.load !== "function"
        ){

            return false;
        }

        const data =
            SAVE.load();

        if(
            !data ||
            typeof data !== "object"
        ){

            return false;
        }

        game = {

            ...fresh(),

            ...data,

            clues:
                Array.isArray(data.clues)
                ? data.clues
                : [],

            items:
                Array.isArray(data.items)
                ? data.items
                : [],

            decisions:
                Array.isArray(data.decisions)
                ? data.decisions
                : [],

            endings:
                Array.isArray(data.endings)
                ? data.endings
                : []
        };

        game.scene =
            resolve(game.scene);

        return !!STORY[
            game.scene
        ];
    }


    /* =========================================================
       STATISTIQUES
    ========================================================= */

    function stats(){

        const clue =
            $("clueCount");

        const item =
            $("itemCount");

        const progress =
            $("progress");

        if(clue){

            clue.textContent =
                game.clues.length;
        }

        if(item){

            item.textContent =
                game.items.length;
        }

        if(progress){

            const total =
                Object.keys(STORY).length || 1;

            const visited =
                new Set(
                    game.decisions.map(
                        decision =>
                            decision.scene
                    )
                ).size;

            progress.textContent =
                Math.min(
                    99,
                    Math.round(
                        visited /
                        total *
                        100
                    )
                ) + "%";
        }
    }


    /* =========================================================
       MUSIQUE
    ========================================================= */

    function music(){

        const audio =
            $("music");

        const slider =
            $("volume");

        const value =
            $("volumeValue");

        if(!audio){

            return;
        }

        audio.loop = true;

        /*
           Le fichier présent dans ton game.html
           reste utilisé.
        */

        let volume =
            0.45;

        if(
            SAVE &&
            typeof SAVE.volume === "function"
        ){

            const savedVolume =
                Number(
                    SAVE.volume()
                );

            if(
                Number.isFinite(
                    savedVolume
                )
            ){

                volume =
                    savedVolume;
            }
        }

        volume =
            Math.max(
                0,
                Math.min(
                    1,
                    volume
                )
            );

        audio.volume =
            volume;

        if(slider){

            slider.value =
                Math.round(
                    volume * 100
                );
        }

        if(value){

            value.textContent =
                Math.round(
                    volume * 100
                ) + "%";
        }


        /* =====================================================
           LANCEMENT MUSIQUE
        ===================================================== */

        function startMusic(){

            if(
                !audio ||
                !audio.paused
            ){

                return;
            }

            const promise =
                audio.play();

            if(
                promise &&
                typeof promise.catch === "function"
            ){

                promise.catch(
                    () => {}
                );
            }
        }

        startMusic();

        document.addEventListener(
            "pointerdown",
            startMusic,
            {
                once:true,
                passive:true
            }
        );


        /* =====================================================
           VOLUME
        ===================================================== */

        if(slider){

            slider.addEventListener(
                "input",
                () => {

                    const number =
                        Math.max(
                            0,
                            Math.min(
                                100,
                                Number(
                                    slider.value
                                ) || 0
                            )
                        );

                    const newVolume =
                        number / 100;

                    audio.volume =
                        newVolume;

                    if(value){

                        value.textContent =
                            Math.round(
                                newVolume * 100
                            ) + "%";
                    }

                    if(
                        SAVE &&
                        typeof SAVE.setVolume ===
                        "function"
                    ){

                        SAVE.setVolume(
                            newVolume
                        );
                    }

                    startMusic();
                }
            );
        }
    }


    /* =========================================================
       TEXTE AVEC EFFET MACHINE À ÉCRIRE
    ========================================================= */

    function showText(text, done){

        clearInterval(
            timer
        );

        const box =
            $("storyText");

        if(!box){

            if(done){

                done();
            }

            return;
        }

        typing =
            true;

        box.textContent =
            "";

        text =
            String(
                text || ""
            )
            .replace(
                /\r\n/g,
                "\n"
            )
            .replace(
                /\n{3,}/g,
                "\n\n"
            )
            .trim();

        let index =
            0;

        timer =
            setInterval(
                () => {

                    box.textContent +=
                        text.charAt(
                            index
                        );

                    index++;

                    if(
                        index >=
                        text.length
                    ){

                        clearInterval(
                            timer
                        );

                        timer =
                            null;

                        typing =
                            false;

                        if(done){

                            done();
                        }
                    }

                },
                18
            );
    }


    /* =========================================================
       TERMINER LE TEXTE IMMÉDIATEMENT
    ========================================================= */

    function finish(sceneData){

        clearInterval(
            timer
        );

        timer =
            null;

        typing =
            false;

        const box =
            $("storyText");

        if(box){

            box.textContent =
                String(
                    sceneData.text || ""
                )
                .replace(
                    /\r\n/g,
                    "\n"
                )
                .replace(
                    /\n{3,}/g,
                    "\n\n"
                )
                .trim();
        }

        renderChoices(
            sceneData
        );
    }


    /* =========================================================
       AFFICHER UNE SCÈNE
    ========================================================= */

    function scene(id){

        id =
            resolve(id);

        const data =
            STORY[id];

        if(!data){

            console.error(
                "Scène introuvable :",
                id
            );

            toast(
                "⚠️ Scène introuvable : " +
                id
            );

            return;
        }

        game.scene =
            id;

        if(data.chapter){

            game.chapter =
                data.chapter;
        }


        /* =====================================================
           INTERFACE
        ===================================================== */

        const chapter =
            $("chapter");

        const location =
            $("location");

        const time =
            $("time");

        const speaker =
            $("speaker");

        const choices =
            $("choices");


        if(chapter){

            chapter.textContent =
                data.chapter ||
                "MYSTERY JOURNEY";
        }

        if(location){

            location.textContent =
                data.location ||
                "";
        }

        if(time){

            time.textContent =
                data.time ||
                "";
        }

        if(speaker){

            speaker.textContent =
                data.speaker ||
                "";
        }

        if(choices){

            choices.innerHTML =
                "";
        }

        stats();

        save();


        /* =====================================================
           TEXTE
        ===================================================== */

        showText(

            data.text || "",

            () => {

                renderChoices(
                    data
                );

            }
        );
    }


    /* =========================================================
       AFFICHER LES CHOIX
    ========================================================= */

    function renderChoices(data){

        const box =
            $("choices");

        if(!box){

            return;
        }

        box.innerHTML =
            "";

        const choices =
            Array.isArray(
                data.choices
            )
            ? data.choices
            : [];


        choices.forEach(
            (choice,index) => {

                /* =============================================
                   CONDITION
                ============================================= */

                if(
                    typeof choice.condition ===
                    "function" &&
                    !choice.condition(game)
                ){

                    return;
                }


                const button =
                    document.createElement(
                        "button"
                    );

                button.type =
                    "button";

                button.className =
                    "choice";

                button.textContent =
                    choice.text ||
                    "Continuer";


                button.addEventListener(
                    "click",
                    () => {

                        /*
                           Si le texte est encore
                           en cours d'écriture,
                           le clic termine d'abord
                           le texte.
                        */

                        if(typing){

                            finish(
                                data
                            );

                            return;
                        }

                        choose(
                            choice,
                            index
                        );

                    }
                );


                box.appendChild(
                    button
                );

            }
        );
    }


    /* =========================================================
       EFFECTUER UN CHOIX
    ========================================================= */

    function choose(choice,index){

        /*
           On mémorise tous les choix.

           Cela permet aux chapitres suivants
           d'utiliser game.decisions si besoin.
        */

        game.decisions.push({

            scene:
                game.scene,

            choice:
                index,

            time:
                Date.now()
        });


        /* =====================================================
           EFFET
        ===================================================== */

        if(
            typeof choice.effect ===
            "function"
        ){

            try{

                choice.effect(
                    game
                );

            }catch(error){

                console.error(
                    "Erreur effet :",
                    error
                );
            }
        }


        /* =====================================================
           INDICE
        ===================================================== */

        if(
            choice.clue &&
            !game.clues.includes(
                choice.clue
            )
        ){

            game.clues.push(
                choice.clue
            );

            toast(
                "🔎 Nouvel indice"
            );
        }


        /* =====================================================
           OBJET
        ===================================================== */

        if(
            choice.item &&
            !game.items.includes(
                choice.item
            )
        ){

            game.items.push(
                choice.item
            );

            toast(
                "🎒 Objet obtenu"
            );
        }


        stats();

        save();


        /* =====================================================
           FIN
        ===================================================== */

        if(choice.end){

            /*
               On sauvegarde l'ID de la fin.

               C'est ce même ID qui est utilisé
               par SaveSystem pour l'accueil.
            */

            unlockEnding(
                choice.end
            );


            /*
               Si une scène de fin est indiquée,
               on l'affiche directement.
            */

            if(choice.next){

                const endingScene =
                    resolve(
                        choice.next
                    );

                if(
                    STORY[
                        endingScene
                    ]
                ){

                    showEnding(
                        choice.end,
                        STORY[
                            endingScene
                        ]
                    );

                    return;
                }
            }

            /*
               Si aucune scène de fin
               n'est indiquée, on affiche
               simplement l'écran de fin.
            */

            showEnding(
                choice.end,
                null
            );

            return;
        }


        /* =====================================================
           SCÈNE SUIVANTE
        ===================================================== */

        if(choice.next){

            scene(
                choice.next
            );

            return;
        }


        /*
           Aucun next et aucune end :
           on reste simplement sur la scène.
        */

        renderChoices(
            STORY[
                game.scene
            ]
        );
    }


    /* =========================================================
       DÉBLOQUER UNE FIN
    ========================================================= */

    function unlockEnding(id){

        if(!id){

            return;
        }


        if(
            !Array.isArray(
                game.endings
            )
        ){

            game.endings =
                [];
        }


        if(
            !game.endings.includes(
                id
            )
        ){

            game.endings.push(
                id
            );
        }


        if(
            SAVE &&
            typeof SAVE.unlockEnding ===
            "function"
        ){

            SAVE.unlockEnding(
                id
            );
        }


        save();
    }


    /* =========================================================
       AFFICHER UNE FIN
    ========================================================= */

    function showEnding(id,data){

        clearInterval(
            timer
        );

        timer =
            null;

        typing =
            false;


        const gameBox =
            $("game");

        const ending =
            $("ending");

        const endingIcon =
            $("endingIcon"
