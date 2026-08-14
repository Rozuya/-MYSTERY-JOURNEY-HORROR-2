"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   THE LAST CALL
   MOTEUR PRINCIPAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


/* =========================================================
   OUTILS
========================================================= */

const $ = id => document.getElementById(id);

const scenes = window.STORY || {};

let game = null;

let typing = false;
let timer = null;


/* =========================================================
   PARAMÈTRES URL
========================================================= */

const params =
    new URLSearchParams(
        window.location.search
    );

const forceNew =
    params.get("new") === "1";

const forceContinue =
    params.get("continue") === "1";


/* =========================================================
   NOUVELLE PARTIE
========================================================= */

function freshGame(){

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
   NORMALISER UNE SAUVEGARDE
========================================================= */

function normalizeGame(data){

    if(!data){
        return freshGame();
    }

    return {

        scene:
            data.scene ||
            "start",

        chapter:
            data.chapter ||
            "PROLOGUE",

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
            : [],

        started:
            data.started ||
            Date.now(),

        lastSaved:
            data.lastSaved ||
            Date.now()

    };

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
        element._timer
    );

    element._timer =
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
   SAUVEGARDER
========================================================= */

function saveGame(showMessage = true){

    if(!window.SaveSystem){
        return false;
    }

    game.lastSaved =
        Date.now();

    const success =
        window.SaveSystem.save(
            game
        );

    if(
        success &&
        showMessage
    ){

        toast(
            "💾 Partie sauvegardée"
        );

    }

    return success;

}


/* =========================================================
   SAUVEGARDE AUTOMATIQUE
========================================================= */

function autoSave(){

    if(!game){
        return;
    }

    saveGame(false);

}


/* =========================================================
   CHARGER UNE PARTIE
========================================================= */

function loadGame(){

    if(!window.SaveSystem){
        return false;
    }

    const saved =
        window.SaveSystem.load();

    if(!saved){
        return false;
    }

    game =
        normalizeGame(
            saved
        );

    return true;

}


/* =========================================================
   MUSIQUE
========================================================= */

function setupMusic(){

    const audio =
        $("music");

    const volume =
        $("volume");

    const volumeValue =
        $("volumeValue");

    if(!audio){
        return;
    }


    let savedVolume =
        0.45;

    if(window.SaveSystem){

        savedVolume =
            window.SaveSystem.volume();

    }

    audio.volume =
        savedVolume;


    if(volume){

        volume.value =
            Math.round(
                savedVolume * 100
            );

    }


    if(volumeValue){

        volumeValue.textContent =
            Math.round(
                savedVolume * 100
            ) + "%";

    }


    if(volume){

        volume.addEventListener(
            "input",
            () => {

                const value =
                    Number(
                        volume.value
                    ) / 100;

                audio.volume =
                    value;

                if(window.SaveSystem){

                    window.SaveSystem.setVolume(
                        value
                    );

                }

                if(volumeValue){

                    volumeValue.textContent =
                        Math.round(
                            value * 100
                        ) + "%";

                }

            }
        );

    }


    function playMusic(){

        audio.play().catch(
            () => {}
        );

    }


    playMusic();


    document.addEventListener(
        "click",
        playMusic,
        {
            once:true
        }
    );

}


/* =========================================================
   TEXTE AVEC EFFET MACHINE À ÉCRIRE
========================================================= */

function typeText(text, done){

    clearInterval(
        timer
    );

    typing = true;

    const storyText =
        $("storyText");

    if(!storyText){
        return;
    }

    storyText.textContent =
        "";

    let index = 0;


    timer =
        setInterval(
            () => {

                storyText.textContent +=
                    text[index] || "";

                index++;


                if(
                    index >=
                    text.length
                ){

                    clearInterval(
                        timer
                    );

                    typing = false;

                    if(done){
                        done();
                    }

                }

            },
            18
        );

}


/* =========================================================
   AFFICHER IMMÉDIATEMENT LE TEXTE
========================================================= */

function finishTyping(scene){

    clearInterval(
        timer
    );

    typing = false;

    const storyText =
        $("storyText");

    if(storyText){

        storyText.textContent =
            scene.text || "";

    }

}


/* =========================================================
   AFFICHER UNE SCÈNE
========================================================= */

function showScene(id){

    const scene =
        scenes[id];


    if(!scene){

        console.error(
            "Scène introuvable :",
            id
        );

        endGame(
            "unknown",
            "FIN INCONNUE",
            "Cette histoire semble avoir perdu sa trace."
        );

        return;

    }


    game.scene =
        id;


    if(scene.chapter){

        game.chapter =
            scene.chapter;

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
            scene.chapter ||
            "MYSTERY JOURNEY";

    }


    if(location){

        location.textContent =
            scene.location ||
            "UNKNOWN";

    }


    if(time){

        time.textContent =
            scene.time ||
            "";

    }


    if(speaker){

        speaker.textContent =
            scene.speaker ||
            "";

    }


    if(choices){

        choices.innerHTML =
            "";

    }


    updateStats();


    typeText(
        scene.text || "",
        () => {

            renderChoices(
                scene
            );

        }
    );


    autoSave();

}


/* =========================================================
   VÉRIFIER UNE CONDITION
========================================================= */

function checkCondition(
    condition
){

    if(
        typeof condition ===
        "function"
    ){

        try{

            return !!condition(
                game
            );

        }catch(error){

            console.error(
                "Erreur condition :",
                error
            );

            return false;

        }

    }


    return true;

}


/* =========================================================
   AFFICHER LES CHOIX
========================================================= */

function renderChoices(scene){

    const box =
        $("choices");

    if(!box){
        return;
    }

    box.innerHTML =
        "";


    const choices =
        Array.isArray(
            scene.choices
        )
        ? scene.choices
        : [];


    choices.forEach(
        (choice,index) => {


            if(
                choice.condition &&
                !checkCondition(
                    choice.condition
                )
            ){

                return;

            }


            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice";


            button.type =
                "button";


            button.textContent =
                choice.text ||
                "Continuer";


            button.addEventListener(
                "click",
                () => {


                    /* Si le texte est encore
                       en train de s'afficher,
                       le premier clic termine
                       simplement l'animation. */

                    if(typing){

                        finishTyping(
                            scene
                        );

                        renderChoices(
                            scene
                        );

                        return;

                    }


                    choose(
                        scene,
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
   EFFECTS D'UN CHOIX
========================================================= */

function applyEffect(choice){

    if(
        !choice ||
        !choice.effect
    ){

        return;

    }


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

}


/* =========================================================
   CHOISIR
========================================================= */

function choose(
    scene,
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


    applyEffect(
        choice
    );


    /* =====================================================
       INDICE
    ===================================================== */

    if(choice.clue){

        if(
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

    }


    /* =====================================================
       OBJET
    ===================================================== */

    if(choice.item){

        if(
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

    }


    updateStats();


    /* =====================================================
       FIN
    ===================================================== */

    if(choice.end){

        endGame(
            choice.end,
            getEndingTitle(
                choice.end
            ),
            getEndingText(
                choice.end
            ),
            getEndingIcon(
                choice.end
            )
        );

        return;

    }


    /* =====================================================
       SCÈNE SUIVANTE
    ===================================================== */

    if(choice.next){

        showScene(
            choice.next
        );

        return;

    }


    /* =====================================================
       PAS DE SUITE
    ===================================================== */

    autoSave();

}


/* =========================================================
   DONNÉES DES 15 FINS
========================================================= */

const endingData = {

    last_call:{
        title:"LE DERNIER APPEL",
        icon:"📞",
        text:"Tu réponds au dernier téléphone et découvres enfin l'origine du phénomène."
    },

    answer:{
        title:"DÉCROCHE",
        icon:"☎️",
        text:"Tu fais confiance à la voix au bout du fil. Mais elle ne t'a pas tout dit."
    },

    silence:{
        title:"SILENCE",
        icon:"🔇",
        text:"Tu détruis les téléphones et fais taire les appels. Mais ton propre téléphone sonne encore."
    },

    hotel:{
        title:"L'HÔTEL",
        icon:"🏨",
        text:"Tu restes dans le Last Call Hotel. Peu à peu, les portes disparaissent autour de toi."
    },

    new_cycle:{
        title:"LE NOUVEAU CYCLE",
        icon:"🔄",
        text:"Tu crois avoir détruit le phénomène avant de découvrir qu'il recommence déjà."
    },

    other:{
        title:"L'AUTRE",
        icon:"👁️",
        text:"Une autre version de toi prend ta place dans le monde réel."
    },

    mirror:{
        title:"LE REFLET",
        icon:"🪞",
        text:"Tu détruis le miroir, mais ton reflet continue de bouger."
    },

    offline:{
        title:"HORS RÉSEAU",
        icon:"🚗",
        text:"Tu quittes la ville. Tout semble terminé jusqu'à ce qu'un appel provenant de Blackwood apparaisse."
    },

    cassette:{
        title:"LA CASSETTE",
        icon:"📼",
        text:"Tu découvres la vérité sur Blackwood et comprends que son histoire est beaucoup plus ancienne."
    },

    after_blackwood:{
        title:"APRÈS BLACKWOOD",
        icon:"🌑",
        text:"Tu comprends que Blackwood n'était qu'un des nombreux endroits liés au phénomène."
    },

    last_survivor:{
        title:"LE DERNIER SURVIVANT",
        icon:"🕯️",
        text:"Tu retrouves une personne disparue depuis des années, mais elle semble te connaître."
    },

    room17:{
        title:"LA CHAMBRE 17",
        icon:"🚪",
        text:"Tu entres dans la chambre 17 et découvres une photographie qui n'aurait jamais dû exister."
    },

    tomorrow:{
        title:"DEMAIN",
        icon:"⏳",
        text:"Tu découvres que certaines vidéos ont été enregistrées par toi-même."
    },

    nobody:{
        title:"PERSONNE NE RÉPOND",
        icon:"🌘",
        text:"Tu détruis ton téléphone et rentres chez toi. Puis quelqu'un frappe à ta porte."
    },

    truth:{
        title:"LA VÉRITÉ",
        icon:"🩸",
        text:"Tu comprends enfin ce que le phénomène cherche réellement : quelqu'un pour prendre ta place."
    }

};


/* =========================================================
   RÉCUPÉRER UNE FIN
========================================================= */

function getEndingData(id){

    return endingData[id] || {

        title:"FIN",
        icon:"❓",
        text:"L'histoire se termine ici."

    };

}


function getEndingTitle(id){

    return getEndingData(id).title;

}


function getEndingIcon(id){

    return getEndingData(id).icon;

}


function getEndingText(id){

    return getEndingData(id).text;

}


/* =========================================================
   TERMINER LE JEU
========================================================= */

function endGame(
    id,
    title,
    text,
    icon
){

    /* Enregistrer la fin dans la partie */

    if(
        id &&
        id !== "unknown"
    ){

        if(
            !game.endings.includes(
                id
            )
        ){

            game.endings.push(
                id
            );

        }


        /* Enregistrer définitivement
           la fin dans la collection */

        if(
            window.SaveSystem &&
            window.SaveSystem.unlockEnding
        ){

            window.SaveSystem.unlockEnding(
                id
            );

        }

    }


    autoSave();


    /* Cacher le jeu */

    const gameElement =
        $("game");

    const ending =
        $("ending");


    if(gameElement){

        gameElement.classList.add(
            "hidden"
        );

    }


    if(ending){

        ending.classList.remove(
            "hidden"
        );

    }


    const data =
        id &&
        endingData[id]
        ? endingData[id]
        : null;


    const finalTitle =
        title ||
        (data
            ? data.title
            : "FIN");


    const finalText =
        text ||
        (data
            ? data.text
            : "L'histoire se termine ici.");


    const finalIcon =
        icon ||
        (data
            ? data.icon
            : "❓");


    if($("endingIcon")){

        $("endingIcon").textContent =
            finalIcon;

    }


    if($("endingTitle")){

        $("endingTitle").textContent =
            finalTitle;

    }


    if($("endingText")){

        $("endingText").textContent =
            finalText;

    }

}


/* =========================================================
   STATISTIQUES
========================================================= */

function updateStats(){

    if(!game){
        return;
    }


    if($("clueCount")){

        $("clueCount").textContent =
            game.clues.length;

    }


    if($("itemCount")){

        $("itemCount").textContent =
            game.items.length;

    }


    /* Progression basée sur les scènes
       réellement traversées */

    const totalScenes =
        Math.max(
            Object.keys(
                scenes
            ).length,
            1
        );


    const usedScenes =
        new Set(
            game.decisions.map(
                decision =>
                    decision.scene
            )
        ).size;


    let percent =
        Math.round(
            (
                usedScenes /
                totalScenes
            ) * 100
        );


    percent =
        Math.max(
            0,
            Math.min(
                99,
                percent
            )
        );


    if($("progress")){

        $("progress").textContent =
            percent + "%";

    }

}


/* =========================================================
   RECOMMENCER APRÈS UNE FIN
========================================================= */

function restart(){

    /* Nouvelle partie :
       suppression de la sauvegarde,
       MAIS conservation des fins. */

    if(
        window.SaveSystem
    ){

        window.SaveSystem.clear();

    }


    game =
        freshGame();


    $("ending")?.classList.add(
       
