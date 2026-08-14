"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const $ = id => document.getElementById(id);
    const STORY = window.STORY || {};
    const SAVE = window.SaveSystem || null;

    let game = fresh();
    let typing = false;
    let timer = null;

    const params = new URLSearchParams(location.search);

    /* =====================================================
       NOUVELLE PARTIE
    ===================================================== */

    function fresh() {
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

    /* =====================================================
       ALIAS
    ===================================================== */

    const aliases = {
        chapter1_start: "chapter1_begin",
        chapter2_begin: "chapter2_start",
        chapter3_begin: "chapter3_start",
        chapter4_begin: "chapter4_start",
        chapter5_begin: "chapter5_start"
    };

    function resolve(id) {
        if (STORY[id]) return id;
        return aliases[id] && STORY[aliases[id]]
            ? aliases[id]
            : id;
    }

    /* =====================================================
       NOTIFICATION
    ===================================================== */

    function toast(text) {
        const e = $("toast");
        if (!e) return;

        e.textContent = text;
        e.classList.add("show");

        clearTimeout(e._timer);

        e._timer = setTimeout(() => {
            e.classList.remove("show");
        }, 2200);
    }

    /* =====================================================
       NETTOYAGE TEXTE
    ===================================================== */

    function clean(text) {
        return String(text || "")
            .replace(/\r\n/g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim();
    }

    /* =====================================================
       SAUVEGARDE
    ===================================================== */

    function save(show = false) {

        if (!SAVE || typeof SAVE.save !== "function") {
            return false;
        }

        game.lastSaved = Date.now();

        const ok = SAVE.save(game);

        if (show && ok) {
            toast("💾 Partie sauvegardée");
        }

        return ok;
    }

    /* =====================================================
       CHARGEMENT
    ===================================================== */

    function load() {

        if (!SAVE || typeof SAVE.load !== "function") {
            return false;
        }

        const data = SAVE.load();

        if (!data || typeof data !== "object") {
            return false;
        }

        game = {
            ...fresh(),
            ...data,
            clues: Array.isArray(data.clues) ? data.clues : [],
            items: Array.isArray(data.items) ? data.items : [],
            decisions: Array.isArray(data.decisions)
                ? data.decisions
                : [],
            endings: Array.isArray(data.endings)
                ? data.endings
                : []
        };

        game.scene = resolve(game.scene);

        return !!STORY[game.scene];
    }

    /* =====================================================
       STATISTIQUES
    ===================================================== */

    function stats() {

        const clue = $("clueCount");
        const item = $("itemCount");
        const progress = $("progress");

        if (clue) {
            clue.textContent = game.clues.length;
        }

        if (item) {
            item.textContent = game.items.length;
        }

        if (progress) {

            const total =
                Object.keys(STORY).length || 1;

            const visited =
                new Set(
                    game.decisions.map(x => x.scene)
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

    /* =====================================================
       MUSIQUE
    ===================================================== */

    function setupMusic() {

        const audio = $("music");
        const slider = $("volume");
        const value = $("volumeValue");

        if (!audio) return;

        /*
         * Le fichier présent dans ton GitHub est :
         * The Last Call.mp3
         *
         * On force également la source ici pour éviter
         * une erreur de nom dans game.html.
         */

        const source =
            audio.querySelector("source");

        if (source) {
            source.src = "The Last Call.mp3";
            audio.load();
        } else {
            audio.src = "The Last Call.mp3";
        }

        audio.loop = true;

        let volume = 0.45;

        if (
            SAVE &&
            typeof SAVE.volume === "function"
        ) {
            const saved = Number(SAVE.volume());

            if (Number.isFinite(saved)) {
                volume = saved;
            }
        }

        volume = Math.max(
            0,
            Math.min(1, volume)
        );

        audio.volume = volume;

        if (slider) {
            slider.value =
                Math.round(volume * 100);
        }

        if (value) {
            value.textContent =
                Math.round(volume * 100) + "%";
        }

        function playMusic() {

            audio.play().catch(() => {
                /*
                 * Le navigateur peut bloquer
                 * l'autoplay avant le premier clic.
                 */
            });
        }

        /*
         * Tentative immédiate.
         */
        playMusic();

        /*
         * Premier toucher/clic :
         * parfait pour Android/mobile.
         */
        document.addEventListener(
            "pointerdown",
            playMusic,
            { once: true }
        );

        document.addEventListener(
            "keydown",
            playMusic,
            { once: true }
        );

        if (slider) {

            slider.addEventListener(
                "input",
                () => {

                    let v =
                        Number(slider.value) / 100;

                    v = Math.max(
                        0,
                        Math.min(1, v)
                    );

                    audio.volume = v;

                    if (value) {
                        value.textContent =
                            Math.round(v * 100) + "%";
                    }

                    if (
                        SAVE &&
                        typeof SAVE.setVolume ===
                        "function"
                    ) {
                        SAVE.setVolume(v);
                    }

                    playMusic();
                }
            );
        }
    }

    /* =====================================================
       TEXTE MACHINE À ÉCRIRE
    ===================================================== */

    function showText(text, done) {

        clearInterval(timer);

        const box = $("storyText");

        if (!box) {
            if (done) done();
            return;
        }

        text = clean(text);

        box.textContent = "";
        typing = true;

        let i = 0;

        timer = setInterval(() => {

            box.textContent += text.charAt(i++);

            if (i >= text.length) {

                clearInterval(timer);
                timer = null;
                typing = false;

                if (done) done();
            }

        }, 18);
    }

    function finish(data) {

        clearInterval(timer);

        timer = null;
        typing = false;

        const box = $("storyText");

        if (box) {
            box.textContent =
                clean(data.text);
        }

        renderChoices(data);
    }

    /* =====================================================
       AFFICHER UNE SCÈNE
    ===================================================== */

    function scene(id) {

        id = resolve(id);

        const data = STORY[id];

        if (!data) {

            console.error(
                "Scène introuvable :",
                id
            );

            toast("⚠️ Scène introuvable");

            return;
        }

        game.scene = id;

        if (data.chapter) {
            game.chapter = data.chapter;
        }

        const chapter = $("chapter");
        const location = $("location");
        const time = $("time");
        const speaker = $("speaker");
        const choices = $("choices");

        if (chapter) {
            chapter.textContent =
                data.chapter || "MYSTERY JOURNEY";
        }

        if (location) {
            location.textContent =
                data.location || "";
        }

        if (time) {
            time.textContent =
                data.time || "";
        }

        if (speaker) {
            speaker.textContent =
                data.speaker || "";
        }

        if (choices) {
            choices.innerHTML = "";
        }

        stats();
        save();

        showText(
            data.text || "",
            () => renderChoices(data)
        );
    }

    /* =====================================================
       CHOIX
    ===================================================== */

    function renderChoices(data) {

        const box = $("choices");

        if (!box) return;

        box.innerHTML = "";

        const choices =
            Array.isArray(data.choices)
                ? data.choices
                : [];

        choices.forEach((choice, index) => {

            if (
                typeof choice.condition ===
                "function" &&
                !choice.condition(game)
            ) {
                return;
            }

            const button =
                document.createElement("button");

            button.type = "button";
            button.className = "choice";
            button.textContent =
                choice.text || "Continuer";

            button.onclick = () => {

                if (typing) {
                    finish(data);
                    return;
                }

                choose(choice, index);
            };

            box.appendChild(button);
        });
    }

    /* =====================================================
       EFFECTUER UN CHOIX
    ===================================================== */

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

        /* INDICE */

        if (
            choice.clue &&
            !game.clues.includes(choice.clue)
        ) {

            game.clues.push(choice.clue);

            /* notification supprimée */
        }

        /* OBJET */

        if (
            choice.item &&
            !game.items.includes(choice.item)
        ) {

            game.items.push(choice.item);

            /* notification supprimée */
        }

        stats();
        save();

        /* FIN */

        if (choice.end) {

            unlockEnding(choice.end);

            if (
                choice.next &&
                STORY[resolve(choice.next)]
            ) {
                scene(choice.next);
            } else {
                showEnding(choice.end);
            }

            return;
        }

        /* SCÈNE SUIVANTE */

        if (choice.next) {
            scene(choice.next);
        }
    }

    /* =====================================================
       DÉBLOQUER UNE FIN
    ===================================================== */

    function unlockEnding(id) {

        if (!id) return;

        if (!Array.isArray(game.endings)) {
            game.endings = [];
        }

        if (!game.endings.includes(id)) {
            game.endings.push(id);
        }

        if (
            SAVE &&
            typeof SAVE.unlockEnding ===
            "function"
        ) {
            SAVE.unlockEnding(id);
        }

        save();
    }

    /* =====================================================
       ÉCRAN DE FIN
    ===================================================== */

    function showEnding(id) {

        clearInterval(timer);

        timer = null;
        typing = false;

        const gameBox = $("game");
        const ending = $("ending");

        if (gameBox) {
            gameBox.classList.add("hidden");
        }

        if (!ending) {
            toast("🏆 Fin débloquée");
            return;
        }

        ending.classList.remove("hidden");

        const icon = $("endingIcon");
        const title = $("endingTitle");
        const text = $("endingText");

        if (icon) {
            icon.textContent = "🩸";
        }

        if (title) {
            title.textContent =
                "FIN DÉBLOQUÉE";
        }

        if (text) {
            text.textContent =
                "Tu as débloqué la fin : " + id;
        }
    }

    /* =====================================================
       BOUTON SAUVEGARDER
    ===================================================== */

    const saveBtn = $("saveBtn");

    if (saveBtn) {

        saveBtn.type = "button";

        saveBtn.onclick = () => {
            save(true);
        };
    }

    /* =====================================================
       BOUTON MENU
    ===================================================== */

    const menuBtn = $("menuBtn");

    if (menuBtn) {

        menuBtn.type = "button";

        menuBtn.onclick = () => {

            save();

            window.location.href =
                "index.html";
        };
    }

    /* =====================================================
       BOUTONS DE FIN
    ===================================================== */

    const restartBtn = $("restartBtn");
    const againBtn = $("againBtn");
    const endingMenuBtn = $("endingMenuBtn");

    if (restartBtn) {

        restartBtn.onclick = () => {

            if (SAVE && SAVE.clear) {
                SAVE.clear();
            }

            window.location.href =
                "game.html?new=1";
        };
    }

    if (againBtn) {

        againBtn.onclick = () => {

            if (SAVE && SAVE.clear) {
                SAVE.clear();
            }

            window.location.href =
                "game.html?new=1";
        };
    }

    if (endingMenuBtn) {

        endingMenuBtn.onclick = () => {

            window.location.href =
                "index.html";
        };
    }

    /* =====================================================
       DÉMARRAGE
    ===================================================== */

    if (
        params.has("continue") &&
        load()
    ) {
        scene(game.scene);
    } else {
        scene(resolve("start"));
    }

    setupMusic();

});
