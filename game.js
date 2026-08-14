"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const $ = id => document.getElementById(id);

    const STORY = window.STORY || {};
    const SAVE = window.SaveSystem || null;

    let game = fresh();
    let typing = false;
    let timer = null;

    const params = new URLSearchParams(location.search);


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
       TRANSITIONS
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

        let e = $("toast");

        /*
           Si la notification existe déjà dans le HTML,
           on l'utilise.

           Sinon on la crée automatiquement.
        */

        if(!e){

            e = document.createElement("div");

            e.id = "toast";

            e.setAttribute(
                "aria-live",
                "polite"
            );

            document.body.appendChild(e);
        }


        /*
           Force la notification à être une
           fenêtre flottante et non un texte
           ajouté en bas du contenu.
        */

        e.style.position = "fixed";
        e.style.left = "50%";
        e.style.bottom = "24px";
        e.style.top = "auto";
        e.style.transform =
            "translateX(-50%)";

        e.style.zIndex = "99999";
        e.style.pointerEvents = "none";

        e.textContent = text;

        e.classList.remove("show");

        /*
           Force le navigateur à recalculer
           l'animation avant de remettre show.
        */

        void e.offsetWidth;

        e.classList.add("show");

        clearTimeout(e._toast);

        e._toast = setTimeout(() => {

            e.classList.remove("show");

        },2200);
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

        game.lastSaved = Date.now();

        const ok = SAVE.save(game);

        if(show && ok){

            toast(
                "💾 Partie sauvegardée"
            );
        }

        return ok;
    }


    function load(){

        if(
            !SAVE ||
            typeof SAVE.load !== "function"
        ){
            return false;
        }

        const data = SAVE.load();

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

        return !!STORY[game.scene];
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
                        x => x.scene
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
       The Last Call.mp3
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
           On force la musique du jeu à être
           exactement la même que celle de l'accueil.
        */

        const musicFile =
            "The Last Call.mp3";


        /*
           Si le HTML possède déjà une source différente,
           on la remplace.
        */

        if(
            !audio.src ||
            !audio.src.includes(
                "The Last Call.mp3"
            )
        ){

            audio.src =
                musicFile;

            audio.load();
        }


        let volume = 0.45;


        if(
            SAVE &&
            typeof SAVE.volume === "function"
        ){

            volume =
                Number(
                    SAVE.volume()
                );

            if(
                !Number.isFinite(volume)
            ){
                volume = 0.45;
            }
        }


        audio.volume =
            Math.max(
                0,
                Math.min(
                    1,
                    volume
                )
            );


        if(slider){

            slider.value =
                Math.round(
                    audio.volume *
                    100
                );
        }


        if(value){

            value.textContent =
                Math.round(
                    audio.volume *
                    100
                ) + "%";
        }


        function startMusic(){

            if(!audio.paused){
                return;
            }


            const promise =
                audio.play();


            if(
                promise &&
                typeof promise.catch ===
                "function"
            ){

                promise.catch(
                    () => {}
                );
            }
        }


        /*
           Première tentative.
        */

        startMusic();


        /*
           Les navigateurs mobiles peuvent
           bloquer l'autoplay sur une nouvelle page.

           La première interaction du joueur
           relancera donc la musique.
        */

        document.addEventListener(
            "pointerdown",
            startMusic,
            {
                once:true,
                passive:true
            }
        );


        document.addEventListener(
            "touchstart",
            startMusic,
            {
                once:true,
                passive:true
            }
        );


        document.addEventListener(
            "keydown",
            startMusic,
            {
                once:true
            }
        );


        if(slider){

            slider.addEventListener(
                "input",
                () => {

                    const n =
                        Math.max(
                            0,
                            Math.min(
                                100,
                                Number(
                                    slider.value
                                ) || 0
                            )
                        ) / 100;


                    audio.volume =
                        n;


                    if(value){

                        value.textContent =
                            Math.round(
                                n * 100
                            ) + "%";
                    }


                    if(
                        SAVE &&
                        typeof SAVE.setVolume ===
                        "function"
                    ){

                        SAVE.setVolume(n);
                    }


                    startMusic();
                }
            );
        }
    }


    /* =========================================================
       TEXTE
    ========================================================= */

    function showText(
        text,
        done
    ){

        clearInterval(timer);

        const box =
            $("storyText");


        if(!box){

            if(done){
                done();
            }

            return;
        }


        typing = true;

        box.textContent = "";


        text =
            String(text || "")
                .replace(
                    /\r\n/g,
                    "\n"
                )
                .replace(
                    /\n{3,}/g,
                    "\n\n"
                )
                .trim();


        let i = 0;


        timer =
            setInterval(
                () => {

                    box.textContent +=
                        text.charAt(i++);


                    if(
                        i >=
                        text.length
                    ){

                        clearInterval(
                            timer
                        );

                        timer = null;

                        typing = false;


                        if(done){
                            done();
                        }
                    }

                },
                18
            );
    }


    function finish(scene){

        clearInterval(timer);

        timer = null;

        typing = false;


        const box =
            $("storyText");


        if(box){

            box.textContent =
                String(
                    scene.text || ""
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


        renderChoices(scene);
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
                "⚠️ Erreur de scène : " +
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
                data.location || "";
        }


        if(time){

            time.textContent =
                data.time || "";
        }


        if(speaker){

            speaker.textContent =
                data.speaker || "";
        }


        if(choices){

            choices.innerHTML = "";
        }


        stats();

        save();


        showText(
            data.text || "",
            () =>
                renderChoices(data)
        );
    }


    /* =========================================================
       CHOIX
    ========================================================= */

    function renderChoices(data){

        const box =
            $("choices");


        if(!box){
            return;
        }


        box.innerHTML = "";


        const choices =
            Array.isArray(
                data.choices
            )
            ? data.choices
            : [];


        choices.forEach(
            (choice,index) => {

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

                        if(typing){

                            finish(data);

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

    function choose(
        choice,
        index
    ){

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

                choice.effect(game);

            }catch(error){

                console.error(
                    "Erreur effet :",
                    error
                );
            }
        }


        /* =====================================================
           INDICE
           Le compteur augmente.
           Aucun texte n'est ajouté à storyText.
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
        }


        /* =====================================================
           OBJET
           IMPORTANT :

           L'objet est seulement ajouté à
           l'inventaire puis affiché dans
           la notification toast.

           Il n'est PAS ajouté à storyText.
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


            /*
               Notification flottante.
            */

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

            end(
                choice.end
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
    }


    /* =========================================================
       FIN
    ========================================================= */

    function end(id){

        if(!id){
            return;
        }


        if(
            !game.endings.includes(id)
        ){

            game.endings.push(id);
        }


        if(
            SAVE &&
            typeof SAVE.unlockEnding ===
            "function"
        ){

            SAVE.unlockEnding(id);
        }


        save();


        const gameBox =
            $("game");

        const ending =
            $("ending");


        if(gameBox){

            gameBox.classList.add(
                "hidden"
            );
        }


        if(ending){

            ending.classList.remove(
                "hidden"
            );
        }


        const titles = {

            good:[
                "🌅",
                "LA VÉRITÉ"
            ],

            loop:[
                "🔄",
                "LE CYCLE"
            ],

            destroy:[
                "🔥",
                "LE FEU"
            ],

            guardian:[
                "🔒",
                "LE GARDIEN"
            ],

            escape:[
                "🚗",
                "L'ÉCHAPPÉE"
            ],

            watched:[
                "👁️",
                "ILS TE REGARDENT"
            ],

            mirror_end:[
                "🪞",
                "LE REFLET"
            ],

            memory_end:[
                "🧠",
                "L'OUBLI"
            ],

            house_end:[
                "🚪",
                "LA PORTE"
            ],

            chapter1_escape:[
                "🏃",
                "TROP TÔT"
            ],

            basement_end:[
                "⬇️",
                "LE SOUS-SOL"
            ],

            secret_escape:[
                "🔑",
                "LE SECRET"
            ],

            upper_end:[
                "👤",
                "LA SILHOUETTE"
            ],

            survivor_end:[
                "🕯️",
                "LE SURVIVANT"
            ]
        };


        const data =
            titles[id] ||
            [
                "❓",
                "FIN"
            ];


        const icon =
            $("endingIcon");

        const title =
            $("endingTitle");

        const text =
            $("endingText");


        if(icon){

            icon.textContent =
                data[0];
        }


        if(title){

            title.textContent =
                data[1];
        }


        if(text){

            const descriptions = {

                good:
                    "Le cycle est terminé. Pour la première fois, aucun téléphone ne sonne.",

                loop:
                    "La route 47 recommence. Le cycle n'est pas terminé.",

                destroy:
                    "Blackwood brûle
