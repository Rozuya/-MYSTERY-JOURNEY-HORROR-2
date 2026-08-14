"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   CHAPTER IV — LE QUATRIÈME APPEL
========================================================= */

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter4_start: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:18",
    speaker: "NARRATEUR",

    text:
`La porte métallique se referme derrière toi.

La salle est immense.

Six téléphones sont posés sur une longue table.

Cinq sont éteints.

Le sixième sonne.

Tu avances lentement.

Sur le mur, une inscription :

« UN APPEL POUR SE SOUVENIR.
UN APPEL POUR OUBLIER.
UN APPEL POUR DEVENIR. »

Le téléphone continue de sonner.`,

    choices: [

        {
            text: "📞 Décrocher",
            next: "fourth_call"
        },

        {
            text: "🔍 Examiner les six téléphones",
            next: "six_phones",
            clue: "Les six téléphones"
        },

        {
            text: "🚪 Chercher une autre sortie",
            next: "call_room_exit"
        }

    ]

},


/* =========================================================
   LES SIX TÉLÉPHONES
========================================================= */

six_phones: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:19",
    speaker: "NARRATEUR",

    text:
`Tu examines les téléphones.

Ils portent chacun un numéro.

01.

02.

03.

04.

05.

06.

Le premier est couvert de poussière.

Le deuxième est encore humide.

Le troisième est fissuré.

Le quatrième semble neuf.

Le cinquième est recouvert de traces de doigts.

Le sixième est chaud.

Comme s'il venait d'être utilisé.`,

    choices: [

        {
            text: "📞 Examiner le téléphone 04",
            next: "phone_four"
        },

        {
            text: "📞 Examiner le téléphone 05",
            next: "phone_five"
        },

        {
            text: "📞 Examiner le téléphone 06",
            next: "phone_six"
        }

    ]

},


/* =========================================================
   QUATRIÈME APPEL
========================================================= */

fourth_call: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:20",
    speaker: "VOIX INCONNUE",

    text:
`Tu décroches.

Aucune voix.

Seulement ta respiration.

Puis une question :

« Qui es-tu ? »

Tu réponds.

La voix répète :

« Non.

Qui es-tu vraiment ? »

Les lumières s'éteignent.

Une image apparaît sur le mur.

C'est ton souvenir de la route 47.`,

    choices: [

        {
            text: "🧠 Regarder le souvenir",
            next: "road_memory",
            clue: "Souvenir de la route 47"
        },

        {
            text: "📞 Demander qui parle",
            next: "unknown_voice"
        },

        {
            text: "📵 Raccrocher",
            next: "hangup_fourth"
        }

    ]

},


/* =========================================================
   TÉLÉPHONE 04
========================================================= */

phone_four: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:21",
    speaker: "NARRATEUR",

    text:
`Le téléphone 04 possède un petit écran.

Il affiche :

IDENTITÉ : INCONNUE

MÉMOIRE : 73%

CORPS : INACTIF

Puis une phrase apparaît :

« LA QUATRIÈME VERSION EST PRÊTE. »`,

    choices: [

        {
            text: "📞 Décrocher le téléphone 04",
            next: "phone_four_call"
        },

        {
            text: "🚫 Laisser le téléphone",
            next: "fourth_call"
        }

    ]

},


/* =========================================================
   TÉLÉPHONE 05
========================================================= */

phone_five: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:22",
    speaker: "NARRATEUR",

    text:
`Le téléphone 05 est couvert de traces de doigts.

Tu poses ta main dessus.

Une empreinte apparaît à l'écran.

Elle correspond exactement à la tienne.

Puis une seconde empreinte apparaît.

Identique.

Une voix murmure :

« Deux versions.

Une seule doit continuer. »`,

    choices: [

        {
            text: "📞 Décrocher",
            next: "phone_five_call"
        },

        {
            text: "🖐️ Retirer ta main",
            next: "fourth_call"
        }

    ]

},


/* =========================================================
   TÉLÉPHONE 06
========================================================= */

phone_six: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:23",
    speaker: "NARRATEUR",

    text:
`Le téléphone 06 est brûlant.

Tu n'as même pas le temps de le toucher.

Il sonne.

L'écran affiche :

« APPEL FINAL — EN ATTENTE »

Puis il affiche ton prénom.

Tu entends une voix derrière toi :

« Pas encore. »`,

    choices: [

        {
            text: "📞 Décrocher",
            next: "final_phone"
        },

        {
            text: "🔙 Revenir aux autres téléphones",
            next: "six_phones"
        }

    ]

},


/* =========================================================
   SOUVENIR DE LA ROUTE
========================================================= */

road_memory: {

    chapter: "CHAPITRE IV",
    location: "SOUVENIR",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`La pluie tombe.

Tu conduis sur la route 47.

Tu entends la radio.

Une voix annonce :

« Il est 23 heures 17. »

Puis quelque chose apparaît sur la route.

Tu donnes un coup de volant.

La voiture dérape.

Un choc.

Puis plus rien.

Mais juste avant l'impact...

Tu aperçois quelqu'un debout au milieu de la route.

Cette personne te regarde.

C'est toi.`,

    choices: [

        {
            text: "👤 Regarder la personne",
            next: "road_figure"
        },

        {
            text: "🧠 Chercher à se souvenir de l'accident",
            next: "accident_memory"
        }

    ]

},


/* =========================================================
   FIGURE DE LA ROUTE
========================================================= */

road_figure: {

    chapter: "CHAPITRE IV",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`La silhouette avance.

Elle se rapproche de ta voiture.

Elle pose une main sur le pare-brise.

Puis elle murmure :

« Tu n'aurais jamais dû répondre au premier appel. »

Le souvenir se brise.

Tu te retrouves dans la salle.

Le téléphone est toujours contre ton oreille.`,

    choices: [

        {
            text: "📞 Demander pourquoi",
            next: "why_first_call"
        },

        {
            text: "📵 Raccrocher",
            next: "hangup_fourth"
        }

    ]

},


/* =========================================================
   SOUVENIR DE L'ACCIDENT
========================================================= */

accident_memory: {

    chapter: "CHAPITRE IV",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`Tu forces ta mémoire.

Le souvenir revient.

La voiture.

La pluie.

La collision.

Mais cette fois tu vois quelque chose.

Avant l'accident, tu avais déjà reçu un appel.

Le numéro affiché :

000-000-001.

Tu avais répondu.

Une voix avait dit :

« Ne prends pas la route 47. »

Puis tu avais continué malgré tout.`,

    choices: [

        {
            text: "📞 Se souvenir de la voix",
            next: "first_voice",
            clue: "Premier avertissement"
        },

        {
            text: "🧠 Chercher pourquoi tu as continué",
            next: "why_continue"
        }

    ]

},


/* =========================================================
   VOIX INCONNUE
========================================================= */

unknown_voice: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:24",
    speaker: "VOIX INCONNUE",

    text:
`— Qui êtes-vous ?

La voix répond :

« Je suis celui qui est resté. »

— Dans l'hôtel ?

« Non.

Dans toi. »

Un silence.

« Depuis le premier appel, une partie de toi est restée ici. »

Tu regardes ton reflet dans l'écran.

Il ne bouge pas.`,

    choices: [

        {
            text: "🪞 Toucher l'écran",
            next: "screen_reflection"
        },

        {
            text: "📵 Raccrocher",
            next: "hangup_fourth"
        }

    ]

},


/* =========================================================
   REFLET
========================================================= */

screen_reflection: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:25",
    speaker: "NARRATEUR",

    text:
`Tu touches l'écran.

Ton reflet pose sa main contre la tienne.

Mais il ne suit pas ton mouvement.

Il sourit.

Puis il écrit sur la vitre :

« CINQUIÈME APPEL. »

Derrière toi, une porte s'ouvre.`,

    choices: [

        {
            text: "🚪 Entrer",
            next: "fifth_room"
        },

        {
            text: "📞 Décrocher le téléphone 05",
            next: "phone_five_call"
        }

    ]

},


/* =========================================================
   APPEL 04
========================================================= */

phone_four_call: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:26",
    speaker: "VOIX INCONNUE",

    text:
`« Version quatre.

Mémoire partielle.

Identité instable.

Souhaites-tu récupérer tous tes souvenirs ? »

Une liste apparaît :

ENFANCE.

FAMILLE.

ROUTE 47.

ACCIDENT.

BLACKWOOD.

Tu peux choisir un seul souvenir.`,

    choices: [

        {
            text: "👶 Enfance",
            next: "memory_childhood",
            clue: "Souvenir d'enfance"
        },

        {
            text: "🚗 Route 47",
            next: "road_memory"
        },

        {
            text: "🏚️ Blackwood",
            next: "memory_blackwood"
        }

    ]

},


/* =========================================================
   APPEL 05
========================================================= */

phone_five_call: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:27",
    speaker: "VOIX INCONNUE",

    text:
`La voix demande :

« Es-tu certain d'être la personne qui a commencé cette histoire ? »

Tu ne réponds pas.

« Alors regarde derrière toi. »

Tu te retournes.

Une personne est debout.

C'est toi.

Elle sourit.

« Enfin. »`,

    choices: [

        {
            text: "👤 Lui parler",
            next: "meet_copy"
        },

        {
            text: "🏃 Courir",
            next: "fifth_room"
        }

    ]

},


/* =========================================================
   DOUBLE
========================================================= */

meet_copy: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:28",
    speaker: "DOUBLE",

    text:
`— Tu m'as enfin retrouvé.

— Qui es-tu ?

— Ta première copie.

Il s'approche.

— J'ai vécu chaque appel avant toi.

— Alors comment sortir ?

Il sourit.

— Il faut qu'un de nous deux soit oublié.`,

    choices: [

        {
            text: "🧠 Demander lequel doit être oublié",
            next: "forget_choice"
        },

        {
            text: "🏃 Refuser de l'écouter",
            next: "fifth_room"
        }

    ]

},


/* =========================================================
   OUBLI
========================================================= */

forget_choice: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:30",
    speaker: "DOUBLE",

    text:
`— Moi ou toi.

Le double pose le téléphone sur la table.

— Le cinquième appel efface une identité.

Le sixième décide laquelle.

Il se rapproche.

— Mais si tu veux gagner...

Il murmure :

« Tu dois accepter de ne plus savoir qui tu es. »`,

    choices: [

        {
            text: "🧠 Accepter",
            next: "accept_forget"
        },

        {
            text: "❌ Refuser",
            next: "refuse_forget"
        }

    ]

},


/* =========================================================
   QUATRIÈME APPEL TERMINÉ
========================================================= */

hangup_fourth: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:31",
    speaker: "NARRATEUR",

    text:
`Tu raccroches.

Le téléphone 04 s'éteint.

Puis le téléphone 05 sonne.

La porte derrière toi se verrouille.

Une voix dans les haut-parleurs :

« Quatrième appel terminé. »

Puis :

« Cinquième appel. »`,

    choices: [

        {
            text: "📞 Répondre au téléphone 05",
            next: "phone_five_call"
        },

        {
            text: "🚪 Chercher une sortie",
            next: "fifth_room"
        }

    ]

},


/* =========================================================
   SALLE DU CINQUIÈME
========================================================= */

fifth_room: {

    chapter: "CHAPITRE IV",
    location: "SALLE DE L'IDENTITÉ",
    time: "02:33",
    speaker: "NARRATEUR",

    text:
`La porte mène à une petite salle.

Un seul téléphone.

Un miroir.

Et une chaise.

Sur le mur :

« CINQUIÈME APPEL — IDENTITÉ. »

Le téléphone sonne.

Dans le miroir, ton reflet ne te regarde plus.

Il regarde le téléphone.`,

    choices: [

        {
            text: "📞 Décrocher",
            next: "fifth_call"
        },

        {
            text: "🪞 Examiner le miroir",
            next: "mirror_room"
        }

    ]

},


/* =========================================================
   CINQUIÈME APPEL
========================================================= */

fifth_call: {

    chapter: "CHAPITRE IV",
    location: "SALLE DE L'IDENTITÉ",
    time: "02:35",
    speaker: "VOIX INCONNUE",

    text:
`« Dernière question avant le sixième appel.

Quel est ton vrai souvenir ? »

Trois images apparaissent :

Ta maison.

La route 47.

L'hôtel.

Tu dois choisir.`,

    choices: [

        {
            text: "🏠 Ma maison",
            next: "memory_home"
        },

        {
            text: "🚗 La route 47",
            next: "memory_road_choice"
        },

        {
            text: "🏚️ L'hôtel",
            next: "memory_hotel_choice"
        }

    ]

},


/* =========================================================
   MÉMOIRE D'ENFANCE
========================================================= */

memory_childhood: {

    chapter: "CHAPITRE IV",
    location: "SOUVENIR",
    time: "INCONNU",
    speaker: "NARRATEUR",

    text:
`Un souvenir apparaît.

Une maison.

Une chambre.

Tu es enfant.

Quelqu'un te téléphone.

Tu décroches.

Une voix dit :

« Un jour, tu reviendras. »

Le souvenir disparaît.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "fifth_room"
        }
    ]

},


memory_blackwood: {

    chapter: "CHAPITRE IV",
    location: "SOUVENIR",
    time: "INCONNU",
    speaker: "NARRATEUR",

    text:
`Tu vois Blackwood.

Mais l'hôtel est neuf.

Des gens entrent.

Tu les reconnais.

Ce sont les personnes que tu as rencontrées.

Elles ne sont pas des victimes.

Elles travaillaient ici.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "fifth_room"
        }
    ]

},


memory_home: {

    chapter: "CHAPITRE IV",
    location: "SOUVENIR",
    time: "INCONNU",
    speaker: "NARRATEUR",

    text:
`Tu choisis ta maison.

Mais le souvenir est vide.

Aucune porte.

Aucun visage.

Seulement un téléphone qui sonne.

Tu comprends que ce souvenir n'est pas le tien.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "sixth_preparation"
        }
    ]

},


memory_road_choice: {

    chapter: "CHAPITRE IV",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`Tu choisis la route.

La pluie revient.

Tu vois ton accident.

Mais cette fois, quelqu'un est assis à côté de toi.

Tu ne l'avais jamais remarqué.

La personne te regarde.

« C'est moi qui t'ai appelé. »`,

    choices: [

        {
            text: "📞 Demander pourquoi",
            next: "why_first_call"
        }
    ]

},


memory_hotel_choice: {

    chapter: "CHAPITRE IV",
    location: "LAST CALL HOTEL",
    time: "INCONNU",
    speaker: "NARRATEUR",

    text:
`Tu choisis l'hôtel.

Les murs disparaissent.

Derrière eux, une immense salle.

Des centaines de téléphones.

Des milliers de dossiers.

Et au centre :

une porte portant ton nom.`,

    choices: [

        {
            text: "🚪 Ouvrir la porte",
            next: "sixth_preparation"
        }
    ]

},


/* =========================================================
   POURQUOI LE PREMIER APPEL
========================================================= */

why_first_call: {

    chapter: "CHAPITRE IV",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "VOIX",

    text:
`— Parce que tu étais déjà mort.

La voix continue :

— Le premier appel n'était pas destiné à te prévenir.

— Alors à quoi servait-il ?

« À te ramener. »

Le souvenir disparaît.

Tu entends une sonnerie.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "sixth_preparation"
        }
    ]

},


first_voice: {

    chapter: "CHAPITRE IV",
    location: "SOUVENIR",
    time: "23:16",
    speaker: "VOIX",

    text:
`Tu reconnais la voix.

C'était la tienne.

Avant l'accident, tu t'étais appelé toi-même.

Tu avais tenté de te prévenir.

Mais quelque chose avait changé ta voix.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "sixth_preparation"
        }
    ]

},


why_continue: {

    chapter: "CHAPITRE IV",
    location: "SOUVENIR",
    time: "23:16",
    speaker: "NARRATEUR",

    text:
`Tu comprends pourquoi tu avais continué.

Tu n'avais pas simplement ignoré l'avertissement.

Tu ne pouvais pas l'entendre.

Quelqu'un avait remplacé ton souvenir de l'appel.

Le premier appel avait déjà commencé à modifier ton identité.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "sixth_preparation"
        }
    ]

},


/* =========================================================
   MIROIR
========================================================= */

mirror_room: {

    chapter: "CHAPITRE IV",
    location: "SALLE DE L'IDENTITÉ",
    time: "02:36",
    speaker: "NARRATEUR",

    text:
`Tu t'approches du miroir.

Ton reflet sourit.

Tu ne souris pas.

Il pose son doigt contre la vitre.

Puis il écrit :

« JE ME SOUVIENS À TA PLACE. »

Le miroir se fissure.`,

    choices: [

        {
            text: "🪞 Toucher le miroir",
            next: "mirror_touch"
        },

        {
            text: "📞 Décrocher le téléphone",
            next: "fifth_call"
        }

    ]

},


mirror_touch: {

    chapter: "CHAPITRE IV",
    location: "SALLE DE L'IDENTITÉ",
    time: "02:37",
    speaker: "NARRATEUR",

    text:
`Tu touches la fissure.

Ton reflet disparaît.

Puis quelqu'un frappe derrière le miroir.

Trois coups.

Puis une voix :

« Ouvre-moi. »`,

    choices: [

        {
            text: "🔨 Briser le miroir",
            next: "break_mirror"
        },

        {
            text: "🚪 Partir",
            next: "sixth_preparation"
        }

    ]

},


break_mirror: {

    chapter: "CHAPITRE IV",
    location: "SALLE DE L'IDENTITÉ",
    time: "02:38",
    speaker: "NARRATEUR",

    text:
`Le miroir éclate.

Derrière, il n'y a pas de mur.

Seulement un autre couloir.

Au bout du couloir se trouve une porte :

APPEL N°06.

Le téléphone sonne derrière toi.`,

    choices: [

        {
            text: "▶ Avancer",
            next: "sixth_preparation"
        }
    ]

},


/* =========================================================
   OUBLIER / REFUSER
========================================================= */

accept_forget: {

    chapter: "CHAPITRE IV",
    location: "SALLE DES APPELS",
    time: "02:32",
    speaker: "NARRATEUR",

    text:
`Tu fermes les yeux.

Tu acceptes.

Un souvenir disparaît.

Puis un autre.

Puis un autre.

Tu oublies 
