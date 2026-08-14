"use strict";

document.addEventListener("DOMContentLoaded", () => {

const $ = id => document.getElementById(id);
const STORY = window.STORY || {};
const Save = window.SaveSystem || null;

let game = freshGame();
let typing = false;
let timer = null;

/* =========================================================
ÉTAT INITIAL
========================================================= */

function freshGame() {
return {
scene: "start",
chapter: "PROLOGUE",
clues: [],
items: [],
decisions: [],
endings: [],
started: Date.now(),
lastSaved: Date.now()
};
}

/* =========================================================
NOTIFICATION
========================================================= */

function toast(message) {
const el = $("toast");
if (!el) return;

el.textContent = message;
el.classList.add("show");

clearTimeout(el._timer);

el._timer = setTimeout(() => {
    el.classList.remove("show");
}, 2200);

}

/* =========================================================
SAUVEGARDE
========================================================= */

function save(show = false) {

if (!Save || typeof Save.save !== "function")
    return false;

game.lastSaved = Date.now();

const result = Save.save(game);

if (show && result)
    toast("💾 Partie sauvegardée");

return result;

}

function load() {

if (!Save || typeof Save.load !== "function")
    return false;

const data = Save.load();

if (!data)
    return false;

game = {
    ...freshGame(),
    ...data,

    clues: Array.isArray(data.clues)
        ? data.clues
        : [],

    items: Array.isArray(data.items)
        ? data.items
        : [],

    decisions: Array.isArray(data.decisions)
        ? data.decisions
        : [],

    endings: Array.isArray(data.endings)
        ? data.endings
        : []
};

return true;

}

/* =========================================================
STATISTIQUES
========================================================= */

function updateStats() {

const clues = $("clueCount");
const items = $("itemCount");
const progress = $("progress");

if (clues)
    clues.textContent = game.clues.length;

if (items)
    items.textContent = game.items.length;

if (progress) {

    const total = Math.max(
        Object.keys(STORY).length,
        1
    );

    const visited = new Set(
        game.decisions.map(d => d.scene)
    ).size;

    const percent = Math.min(
        99,
        Math.round((visited / total) * 100)
    );

    progress.textContent = percent + "%";
}

}

/* =========================================================
MUSIQUE
========================================================= */

function setupMusic() {

const audio = $("music");
const volume = $("volume");
const value = $("volumeValue");

if (!audio)
    return;

let level = 0.45;

if (Save && typeof Save.volume === "function") {

    const saved = Number(Save.volume());

    if (Number.isFinite(saved))
        level = Math.max(0, Math.min(1, saved));
}

audio.volume = level;

if (volume)
    volume.value = Math.round(level * 100);

if (value)
    value.textContent = Math.round(level * 100) + "%";


function startMusic() {

    audio.play().catch(() => {});
}


startMusic();


document.addEventListener(
    "click",
    startMusic,
    { once: true }
);


if (volume) {

    volume.addEventListener("input", () => {

        let n = Number(volume.value);

        if (!Number.isFinite(n))
            n = 0;

        n = Math.max(
            0,
            Math.min(100, n)
        ) / 100;

        audio.volume = n;

        if (value)
            value.textContent =
                Math.round(n * 100) + "%";

        if (
            Save &&
            typeof Save.setVolume === "function"
        ) {
            Save.setVolume(n);
        }
    });
}

}

/* =========================================================
TEXTE
========================================================= */

function typeText(text, callback) {

clearInterval(timer);

const box = $("storyText");

if (!box) {
    typing = false;

    if (callback)
        callback();

    return;
}

typing = true;

box.textContent = "";

let index = 0;

timer = setInterval(() => {

    box.textContent += text.charAt(index);

    index++;

    if (index >= text.length) {

        clearInterval(timer);

        typing = false;

        if (callback)
            callback();
    }

}, 18);

}

/* =========================================================
TERMINER L'ÉCRITURE
========================================================= */

function skipTyping(scene) {

clearInterval(timer);

typing = false;

const box = $("storyText");

if (box)
    box.textContent = scene.text || "";

renderChoices(scene);

}

/* =========================================================
AFFICHER UNE SCÈNE
========================================================= */

function showScene(id) {

const scene = STORY[id];

if (!scene) {

    console.error(
        "Scène introuvable :",
        id
    );

    return;
}

game.scene = id;

if (scene.chapter)
    game.chapter = scene.chapter;


const chapter = $("chapter");
const location = $("location");
const time = $("time");
const speaker = $("speaker");
const choices = $("choices");


if (chapter)
    chapter.textContent =
        scene.chapter || "";


if (location)
    location.textContent =
        scene.location || "";


if (time)
    time.textContent =
        scene.time || "";


if (speaker)
    speaker.textContent =
        scene.speaker || "";


if (choices)
    choices.innerHTML = "";


updateStats();

save(false);


typeText(
    scene.text || "",
    () => renderChoices(scene)
);

}

/* =========================================================
CONDITIONS
========================================================= */

function conditionOK(condition) {

if (typeof condition !== "function")
    return true;

try {

    return !!condition(game);

} catch (error) {

    console.error(
        "Erreur condition :",
        error
    );

    return false;
}

}

/* =========================================================
CHOIX
========================================================= */

function renderChoices(scene) {

const box = $("choices");

if (!box)
    return;

box.innerHTML = "";


const choices = Array.isArray(scene.choices)
    ? scene.choices
    : [];


choices.forEach((choice, index) => {

    if (
        choice.condition &&
        !conditionOK(choice.condition)
    )
        return;


    const button =
        document.createElement("button");

    button.type = "button";
    button.className = "choice";

    button.textContent =
        choice.text || "Continuer";


    button.addEventListener("click", () => {

        /*
         * Pendant l'écriture :
         * premier clic = afficher tout le texte.
         */
        if (typing) {

            skipTyping(scene);

            return;
        }

        choose(choice, index);
    });


    box.appendChild(button);
});

}

/* =========================================================
EFFECTUER UN CHOIX
========================================================= */

function choose(choice, index) {

game.decisions.push({

    scene: game.scene,

    choice: index,

    time: Date.now()
});


if (typeof choice.effect === "function") {

    try {

        choice.effect(game);

    } catch (error) {

        console.error(
            "Erreur effet :",
            error
        );
    }
}


if (
    choice.clue &&
    !game.clues.includes(choice.clue)
) {

    game.clues.push(choice.clue);

    toast("🔎 Nouvel indice");
}


if (
    choice.item &&
    !game.items.includes(choice.item)
) {

    game.items.push(choice.item);

    toast("🎒 Objet obtenu");
}


updateStats();

save(false);


if (choice.end) {

    endGame(choice.end);

    return;
}


if (choice.next) {

    showScene(choice.next);

    return;
}

}

/* =========================================================
FINS
========================================================= */

const endings = {

good: [
    "🌅",
    "LE DERNIER APPEL",
    "Tu découvres enfin l'origine du phénomène."
],

answer: [
    "📞",
    "DÉCROCHE",
    "Tu as fait confiance à la mauvaise voix."
],

silence: [
    "🔇",
    "SILENCE",
    "Plus personne ne peut t'appeler."
],

hotel: [
    "🏨",
    "L'HÔTEL",
    "Tu es devenu le nouveau gardien du Last Call."
],

loop: [
    "🔄",
    "LE NOUVEAU CYCLE",
    "Tu pensais avoir tout détruit. La route recommence."
],

watched: [
    "👁️",
    "ILS TE REGARDENT",
    "Quelqu'un est toujours derrière toi."
],

mirror_end: [
    "🪞",
    "LE REFLET",
    "Ton reflet a pris ta place."
],

memory_end: [
    "🧠",
    "L'OUBLI",
    "Tu as oublié toute cette histoire."
],

house_end: [
    "🚪",
    "LA PORTE",
    "Tu quittes les lieux sans regarder derrière toi."
],

chapter1_escape: [
    "🏃",
    "TROP TÔT",
    "Tu es parti avant de découvrir la vérité."
],

basement_end: [
    "⬇️",
    "LE SOUS-SOL",
    "Les voix utilisent maintenant ta propre voix."
],

secret_escape: [
    "🔑",
    "LE SECRET",
    "Tu refuses d'ouvrir la dernière porte."
],

upper_end: [
    "👤",
    "LA SILHOUETTE",
    "La silhouette était déjà derrière toi."
],

survivor_end: [
    "🕯️",
    "LE DERNIER SURVIVANT",
    "Tu marches jusqu'à l'aube. Ton ombre n'est pas seule."
],

truth_end: [
    "🩸",
    "LA VÉRITÉ",
    "Le phénomène ne cherchait pas à te tuer. Il voulait ta place."
]

};

/* =========================================================
ÉCRAN DE FIN
========================================================= */

function endGame(id) {

if (!id)
    id = "good";


if (
    !game.endings.includes(id)
) {

    game.endings.push(id);
}


if (
    Save &&
    typeof Save.unlockEnding === "function"
) {

    Save.unlockEnding(id);
}


save(false);


const gameScreen = $("game");
const ending = $("ending");


if (gameScreen)
    gameScreen.classList.add("hidden");


if (ending) {

    ending.classList.remove("hidden");

    ending.setAttribute(
        "aria-hidden",
        "false"
    );
}


const data =
    endings[id] ||
    [
        "🩸",
        "FIN",
        "L'histoire se termine ici."
    ];


const icon = $("endingIcon");
const title = $("endingTitle");
const text = $("endingText");


if (icon)
    icon.textContent = data[0];


if (title)
    title.textContent = data[1];


if (text)
    text.textContent = data[2];

}

/* =========================================================
MASQUER LA FIN
========================================================= */

function hideEnding() {

const ending = $("ending");

if (!ending)
    return;

ending.classList.add("hidden");

ending.setAttribute(
    "aria-hidden",
    "true"
);

}

/* =========================================================
NOUVELLE PARTIE
========================================================= */

function newGame() {

if (
    Save &&
    typeof Save.clear === "function"
) {
    Save.clear();
}


clearInterval(timer);

typing = false;

game = freshGame();

hideEnding();


const gameScreen = $("game");

if (gameScreen)
    gameScreen.classList.remove("hidden");


showScene("start");

}

/* =========================================================
REJOUER
========================================================= */

function replay() {

clearInterval(timer);

typing = false;

game = freshGame();

hideEnding();


const gameScreen = $("game");

if (gameScreen)
    gameScreen.classList.remove("hidden");


showScene("start");

}

/* =========================================================
BOUTONS
========================================================= */

const saveBtn = $("saveBtn");
const againBtn = $("againBtn");
const restartBtn = $("restartBtn");
const menuBtn = $("menuBtn");
const endingMenuBtn = $("endingMenuBtn");

if (saveBtn) {

saveBtn.addEventListener(
    "click",
    () => save(true)
);

}

if (againBtn) {

againBtn.addEventListener(
    "click",
    replay
);

}

if (restartBtn) {

restartBtn.addEventListener(
    "click",
    newGame
);

}

function goMenu() {

save(false);

window.location.href =
    "index.html";

}

if (menuBtn)
menuBtn.addEventListener(
"click",
goMenu
);

if (endingMenuBtn)
endingMenuBtn.addEventListener(
"click",
goMenu
);

/* =========================================================
MUSIQUE
========================================================= */

setupMusic();

/* =========================================================
DÉMARRAGE
========================================================= */

const params =
new URLSearchParams(
window.location.search
);

const forceNew =
params.get("new") === "1";

const forceContinue =
params.get("continue") === "1";

hideEnding();

if (forceNew) {

newGame();

} else if (forceContinue) {

if (load()) {

    showScene(game.scene);

} else {

    newGame();
}

} else if (load()) {

toast("📂 Partie chargée");

showScene(game.scene);

} else {

showScene("start");

}

});
