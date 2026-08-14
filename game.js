"use strict";

document.addEventListener("DOMContentLoaded", () => {

    const $ = id => document.getElementById(id);
    const STORY = window.STORY || {};
    const SAVE = window.SaveSystem || null;

    let game = {
        scene: "start",
        chapter: "PROLOGUE",
        clues: [],
        items: [],
        decisions: [],
        endings: [],
        started: Date.now(),
        lastSaved: Date.now()
    };

    let typing = false;
    let timer = null;

    const aliases = {
        chapter1_start: "chapter1_begin",
        chapter2_begin: "chapter2_start",
        chapter3_begin: "chapter3_start",
        chapter4_begin: "chapter4_start",
        chapter5_begin: "chapter5_start"
    };


    /* =====================================================
       OUTILS
    ===================================================== */

    function resolve(id) {
        return STORY[id]
            ? id
            : (aliases[id] && STORY[aliases[id]]
                ? aliases[id]
                : id);
    }


    function toast(text) {
        const e = $("toast");
        if (!e) return;

        e.textContent = text;
        e.classList.add("show");

        clearTimeout(e._toast);

        e._toast = setTimeout(
            () => e.classList.remove("show"),
            2200
        );
    }


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
        if (!SAVE || typeof SAVE.save !== "function")
            return false;

        game.lastSaved = Date.now();

        const ok = SAVE.save(game);

        if (show && ok)
            toast("💾 Partie sauvegardée");

        return ok;
    }


    function load() {
        if (!SAVE || typeof SAVE.load !== "function")
            return false;

        const data = SAVE.load();

        if (!data || typeof data !== "object")
            return false;

        game = {
            ...game,
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

        if (clue)
            clue.textContent = game.clues.length;

        if (item)
            item.textContent = game.items.length;

        if (progress) {
            const total = Object.keys(STORY).length || 1;

            const visited = new Set(
                game.decisions.map(x => x.scene)
            ).size;

            progress.textContent =
                Math.min(
                    99,
                    Math.round(visited / total * 100)
                ) + "%";
        }
    }


    /* =====================================================
       MUSIQUE
    ===================================================== */

    function music() {
        const audio = $("music");
        const slider = $("volume");
        const value = $("volumeValue");

        if (!audio) return;

        let volume = 0.45;

        if (
            SAVE &&
            typeof SAVE.volume === "function"
        ) {
            const v = Number(SAVE.volume());

            if (Number.isFinite(v))
                volume = v;
        }

        volume = Math.max(0, Math.min(1, volume));
        audio.volume = volume;

        if (slider)
            slider.value = Math.round(volume * 100);

        if (value)
            value.textContent =
                Math.round(volume * 100) + "%";


        function startMusic() {
            if (!audio || !audio.paused)
                return;

            audio.play().catch(() => {});
        }

        startMusic();

        document.addEventListener(
            "pointerdown",
            startMusic,
            {
                once: true,
                passive: true
            }
        );


        if (slider) {
            slider.addEventListener(
                "input",
                () => {
                    const v = Math.max(
                        0,
                        Math.min(
                            1,
                            Number(slider.value) / 100
                        )
                    );

                    audio.volume = v;

                    if (value)
                        value.textContent =
                            Math.round(v * 100) + "%";

                    if (
                        SAVE &&
                        typeof SAVE.setVolume === "function"
                    ) {
                        SAVE.setVolume(v);
                    }

                    startMusic();
                }
            );
        }
    }


    /* =====================================================
       TEXTE
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

        let index = 0;

        timer = setInterval(() => {
            box.textContent += text.charAt(index++);

            if (index >= text.length) {
                clearInterval(timer);
                timer = null;
                typing = false;

                if (done)
                    done();
            }
        }, 18);
    }


    function finish(data) {
        clearInterval(timer);

        timer = null;
        typing = false;

        const box = $("storyText");

        if (box)
            box.textContent = clean(data.text);

        renderChoices(data);
    }


    /* =====================================================
       AFFICHER UNE SCÈNE
    ===================================================== */

    function scene(id) {
        id = resolve(id);

        const data = STORY[id];

        if (!data) {
            console.error("Scène introuvable :", id);
            toast("⚠️ Scène introuvable");
            return;
        }

        game.scene = id;

        if (data.chapter)
            game.chapter = data.chapter;


        const chapter = $("chapter");
        const location = $("location");
        const time = $("time");
        const speaker = $("speaker");
        const choices = $("choices");

        if (chapter)
            chapter.textContent =
                data.chapter || "MYSTERY JOURNEY";

        if (location)
            location.textContent = data.location || "";

        if (time)
            time.textContent = data.time || "";

        if (speaker)
            speaker.textContent = data.speaker || "";

        if (choices)
            choices.innerHTML = "";

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

        const choices = Array.isArray(data.choices)
            ? data.choices
            : [];

        choices.forEach((choice, index) => {

            if (
                typeof choice.condition === "function" &&
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
            toast("🔎 Nouvel indice");
        }


        /* OBJET */

        if (
            choice.item &&
            !game.items.includes(choice.item)
        ) {
            game.items.push(choice.item);
            toast("🎒 Objet obtenu");
        }


        stats();
        save();


        /* FIN */

        if (choice.end) {
            unlockEnding(choice.end);

            if (choice.next && STORY[resolve(choice.next)]) {
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
       FINS
    ===================================================== */

    function unlockEnding(id) {
        if (!id) return;

        if (!Array.isArray(game.endings))
            game.endings = [];

        if (!game.endings.includes(id))
            game.endings.push(id);

        if (
            SAVE &&
            typeof SAVE.unlockEnding === "function"
        ) {
            SAVE.unlockEnding(id);
        }

        save();
    }


    function showEnding(id) {
        clearInterval(timer);

        timer = null;
        typing = false;

        const gameBox = $("game");
        const ending = $("ending");

        if (gameBox)
            gameBox.classList.add("hidden");

        if (!ending) {
            toast("🏆 Fin débloquée");
            return;
        }

        ending.classList.remove("hidden");

        const icon = $("endingIcon");
        const title = $("endingTitle");
        const text = $("endingText");

        if (icon)
            icon.textContent = "🩸";

        if (title)
            title.textContent = "FIN DÉBLOQUÉE";

        if (text)
            text.textContent =
                "Tu as débloqué la fin : " + id;

        const button = $("endingButton");

        if (button) {
            button.onclick = () => {
                window.location.href = "index.html";
            };
        }
    }


    /* =====================================================
       DÉMARRAGE
    ===================================================== */

    const params =
        new URLSearchParams(window.location.search);

    if (
        params.has("continue") &&
        load()
    ) {
        scene(game.scene);
    } else {
        scene(resolve("start"));
    }

    music();

});
