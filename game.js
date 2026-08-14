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
        if(STORY[id]) return id;

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

        const e = $("toast");

        if(!e) return;

        e.textContent = text;
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
            toast("💾 Partie sauvegardée");
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

        game.scene = resolve(game.scene);

        return !!STORY[game.scene];
    }


    /* =========================================================
       STATISTIQUES
    ========================================================= */

    function stats(){

        const clue = $("clueCount");
        const item = $("itemCount");
        const progress = $("progress");

        if(clue){
            clue.textContent = game.clues.length;
        }

        if(item){
            item.textContent = game.items.length;
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
                        visited / total * 100
                    )
                ) + "%";
        }
    }


    /* =========================================================
       MUSIQUE
    ========================================================= */

    function music(){

        const audio = $("music");
        const slider = $("volume");
        const value = $("volumeValue");

        if(!audio) return;

        audio.loop = true;

        let volume = 0.45;

        if(
            SAVE &&
            typeof SAVE.volume === "function"
        ){
            volume = Number(SAVE.volume());

            if(!Number.isFinite(volume)){
                volume = 0.45;
            }
        }

        audio.volume =
            Math.max(
                0,
                Math.min(1,volume)
            );

        if(slider){
            slider.value =
                Math.round(
                    audio.volume * 100
                );
        }

        if(value){
            value.textContent =
                Math.round(
                    audio.volume * 100
                ) + "%";
        }


        function startMusic(){

            if(audio.paused){

                const promise =
                    audio.play();

                if(
                    promise &&
                    typeof promise.catch === "function"
                ){
                    promise.catch(() => {});
                }
            }
        }


        /*
           Tentative immédiate.
           Si le navigateur bloque l'autoplay,
           la première interaction lancera la musique.
        */

        startMusic();

        document.addEventListener(
            "pointerdown",
            startMusic,
            {
                once:true,
                passive:true
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
                                Number(slider.value) || 0
                            )
                        ) / 100;

                    audio.volume = n;

                    if(value){
                        value.textContent =
                            Math.round(n * 100) + "%";
                    }

                    if(
                        SAVE &&
                        typeof SAVE.setVolume === "function"
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

    function showText(text,done){

        clearInterval(timer);

        const box = $("storyText");

        if(!box){

            if(done){
                done();
            }

            return;
        }

        typing = true;

        box.textContent = "";

        /*
           Nettoyage des lignes vides excessives.
           Cela évite les énormes espaces entre les phrases.
        */

        text = String(text || "")
            .replace(/\r\n/g,"\n")
            .replace(/\n{3,}/g,"\n\n")
            .trim();

        let i = 0;

        timer = setInterval(() => {

            box.textContent +=
                text.charAt(i++);

            if(i >= text.length){

                clearInterval(timer);

                timer = null;
                typing = false;

                if(done){
                    done();
                }
            }

        },18);
    }


    function finish(scene){

        clearInterval(timer);

        timer = null;
        typing = false;

        const box = $("storyText");

        if(box){
            box.textContent =
                String(scene.text || "")
                    .replace(/\r\n/g,"\n")
                    .replace(/\n{3,}/g,"\n\n")
                    .trim();
        }

        renderChoices(scene);
    }


    /* =========================================================
       AFFICHER UNE SCÈNE
    ========================================================= */

    function scene(id){

        id = resolve(id);

        const data = STORY[id];

        if(!data){

            console.error(
                "Scène introuvable :",
                id
            );

            toast(
                "⚠️ Erreur de scène : " + id
            );

            return;
        }

        game.scene = id;

        if(data.chapter){
            game.chapter = data.chapter;
        }

        const chapter = $("chapter");
        const location = $("location");
        const time = $("time");
        const speaker = $("speaker");
        const choices = $("choices");

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
            () => renderChoices(data)
        );
    }


    /* =========================================================
       CHOIX
    ========================================================= */

    function renderChoices(data){

        const box = $("choices");

        if(!box) return;

        box.innerHTML = "";

        const choices =
            Array.isArray(data.choices)
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

                button.type = "button";

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

                box.appendChild(button);
            }
        );
    }


    /* =========================================================
       EFFECTUER UN CHOIX
    ========================================================= */

    function choose(choice,index){

        game.decisions.push({
            scene:game.scene,
            choice:index,
            time:Date.now()
        });


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


        /* =========================
           INDICE
           Le compteur augmente,
           mais aucun message
           "Nouvel indice" n'est affiché.
        ========================= */

        if(
            choice.clue &&
            !game.clues.includes(choice.clue)
        ){

            game.clues.push(
                choice.clue
            );
        }


        /* =========================
           OBJET
        ========================= */

        if(
            choice.item &&
            !game.items.includes(choice.item)
        ){

            game.items.push(
                choice.item
            );

            toast("🎒 Objet obtenu");
        }


        stats();
        save();


        if(choice.end){

            end(choice.end);

            return;
        }


        if(choice.next){

            scene(choice.next);

            return;
        }
    }


    /* =========================================================
       FIN
    ========================================================= */

    function end(id){

        if(!id) return;


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


        const gameBox = $("game");
        const ending = $("ending");

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
                    "Blackwood brûle et les voix disparaissent.",

                guardian:
                    "Tu es devenu le nouveau gardien.",

                escape:
                    "Tu quittes les lieux, mais quelque chose marche toujours derrière toi.",

                watched:
                    "Quelqu'un te regarde, même lorsque tu ne vois personne.",

                mirror_end:
                    "Ton reflet est maintenant libre.",

                memory_end:
                    "Tu as tout oublié. Une nouvelle histoire commence.",

                house_end:
                    "Tu quittes la maison sans jamais regarder derrière toi.",

                chapter1_escape:
                    "Tu as quitté Blackwood trop tôt.",

                basement_end:
                    "Tu es enfermé. Des dizaines de voix utilisent maintenant ta voix.",

                secret_escape:
                    "Tu refuses d'ouvrir la dernière porte.",

                upper_end:
                    "La silhouette est déjà derrière toi.",

                survivor_end:
                    "Tu marches jusqu'à l'aube, mais ton ombre n'est pas seule."
            };


            text.textContent =
                descriptions[id] ||
                "L'histoire se termine ici.";
        }
    }


    /* =========================================================
       NOUVELLE PARTIE
    ========================================================= */

    function newGame(){

        if(
            SAVE &&
            typeof SAVE.clear ===
            "function"
        ){
            SAVE.clear();
        }

        game = fresh();


        const ending =
            $("ending");

        const gameBox =
            $("game");


        if(ending){
            ending.classList.add(
                "hidden"
            );
        }

        if(gameBox){
            gameBox.classList.remove(
                "hidden"
            );
        }


        scene("start");
    }


    /* =========================================================
       REJOUER
    ========================================================= */

    function replay(){

        game = fresh();


        const ending =
            $("ending");

        const gameBox =
            $("game");


        if(ending){
            ending.classList.add(
                "hidden"
            );
        }

        if(gameBox){
            gameBox.classList.remove(
                "hidden"
            );
        }


        scene("start");
    }


    /* =========================================================
       BOUTONS
    ========================================================= */

    const saveBtn =
        $("saveBtn");

    const restartBtn =
        $("restartBtn");

    const againBtn =
        $("againBtn");

    const menuBtn =
        $("menuBtn");


    if(saveBtn){

        saveBtn.addEventListener(
            "click",
            () => save(true)
        );
    }


    if(restartBtn){

        restartBtn.addEventListener(
            "click",
            newGame
        );
    }


    if(againBtn){

        againBtn.addEventListener(
            "click",
            replay
        );
    }


    if(menuBtn){

        menuBtn.addEventListener(
            "click",
            () => {

                save();

                location.href =
                    "index.html";
            }
        );
    }


    /* =========================================================
       DÉMARRAGE
    ========================================================= */

    music();


    if(params.get("new") === "1"){

        newGame();

    }else if(
        params.get("continue") === "1"
    ){

        if(load()){
            scene(game.scene);
        }else{
            newGame();
        }

    }else if(load()){

        toast("📂 Partie chargée");

        scene(game.scene);

    }else{

        scene("start");
    }

});
