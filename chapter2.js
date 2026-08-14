"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   CHAPTER II — LE SIGNAL
========================================================= */

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter2_start: {

    chapter: "CHAPITRE II",
    location: "LAST CALL HOTEL",
    time: "01:18",
    speaker: "NARRATEUR",

    text:
`Le téléphone continue de sonner.

Tu regardes autour de toi.

L'hôtel semble avoir changé.

Le couloir est plus long.

Les murs sont couverts de vieux câbles.

Au bout du couloir, une lumière rouge clignote.

Un panneau indique :

SALLE DES COMMUNICATIONS.

Puis le téléphone affiche :

APPEL N°02.

Tu décroches.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "signal_call",
            clue: "Le signal"
        },

        {
            text: "❌ Refuser l'appel",
            next: "refuse_signal"
        },

        {
            text: "🔍 Examiner le téléphone",
            next: "phone_signal",
            clue: "Téléphone du signal"
        }

    ]

},


/* =========================================================
   LE SIGNAL
========================================================= */

signal_call: {

    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:19",
    speaker: "VOIX INCONNUE",

    text:
`— Tu es arrivé jusqu'au deuxième appel.

La voix est calme.

— Qui êtes-vous ?

« Quelqu'un qui essaie de te prévenir. »

— De quoi ?

Un silence.

Puis :

« Le signal arrive. »

Le téléphone grésille.

« Quand les lumières deviendront rouges, ne regarde surtout pas les fenêtres. »

L'appel coupe.`,

    choices: [

        {
            text: "🔴 Aller vers la lumière rouge",
            next: "red_light"
        },

        {
            text: "🪟 Chercher une fenêtre",
            next: "window_warning"
        },

        {
            text: "📞 Rappeler le numéro",
            next: "call_back"
        }

    ]

},


/* =========================================================
   REFUSER L'APPEL
========================================================= */

refuse_signal: {

    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:19",
    speaker: "NARRATEUR",

    text:
`Tu refuses l'appel.

Le téléphone cesse de sonner.

Puis toutes les lumières s'éteignent.

Une lumière rouge s'allume au bout du couloir.

Tu entends une voix :

« Tu aurais dû répondre. »

Une porte s'ouvre derrière toi.`,

    choices: [

        {
            text: "🚪 Se retourner",
            next: "red_door"
        },

        {
            text: "🏃 Courir vers la lumière",
            next: "red_light"
        }

    ]

},


/* =========================================================
   TÉLÉPHONE
========================================================= */

phone_signal: {

    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:20",
    speaker: "NARRATEUR",

    text:
`Tu examines le téléphone.

Aucune carte SIM.

Aucun réseau.

Pourtant, l'appel fonctionne.

Sous le téléphone, tu remarques une inscription :

SIGNAL : 47.17

Tu comprends que ces nombres correspondent à la route et à l'hôtel.

Mais un troisième nombre apparaît :

23.`,

    choices: [

        {
            text: "🔎 Chercher la chambre 23",
            next: "signal_room23",
            clue: "47.17.23"
        },

        {
            text: "🔴 Suivre la lumière rouge",
            next: "red_light"
        }

    ]

},


/* =========================================================
   LUMIÈRE ROUGE
========================================================= */

red_light: {

    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:22",
    speaker: "NARRATEUR",

    text:
`Tu avances vers la lumière.

La porte de la salle des communications est ouverte.

À l'intérieur :

des dizaines de téléphones.

Des écrans.

Des câbles.

Et une immense carte de la région.

Un point rouge clignote.

Il se trouve exactement à l'endroit où tu te tiens.

Puis un écran s'allume.

Une phrase apparaît :

« SIGNAL LOCALISÉ. »`,

    choices: [

        {
            text: "🖥️ Examiner les écrans",
            next: "communication_screens",
            clue: "Salle des communications"
        },

        {
            text: "🗺️ Examiner la carte",
            next: "hotel_map",
            clue: "Carte du secteur"
        },

        {
            text: "🔌 Couper l'électricité",
            next: "cut_power"
        }

    ]

},


/* =========================================================
   FENÊTRE
========================================================= */

window_warning: {

    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:21",
    speaker: "NARRATEUR",

    text:
`Tu trouves une fenêtre.

Dehors, le parking est vide.

Puis une voiture apparaît.

Elle roule lentement.

Tu reconnais ta voiture.

Elle s'arrête devant l'hôtel.

Quelqu'un descend.

La personne te ressemble.

Elle lève les yeux vers ta fenêtre.`,

    choices: [

        {
            text: "🪟 Continuer à regarder",
            next: "window_figure"
        },

        {
            text: "🚶 S'éloigner de la fenêtre",
            next: "red_light"
        }

    ]

},


/* =========================================================
   FIGURE DEVANT L'HÔTEL
========================================================= */

window_figure: {

    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:22",
    speaker: "NARRATEUR",

    text:
`La personne dehors lève la main.

Elle tient un téléphone.

Ton téléphone sonne.

Tu regardes l'écran.

APPEL ENTRANT :

TON PROPRE NUMÉRO.

Dehors, ton double décroche son téléphone.

Tu entends sa voix dans le couloir :

« Ne réponds pas. »`,

    choices: [

        {
            text: "📞 Répondre",
            next: "double_call"
        },

        {
            text: "📵 Éteindre le téléphone",
            next: "phone_off"
        }

    ]

},


/* =========================================================
   RAPPELER
========================================================= */

call_back: {

    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:23",
    speaker: "NARRATEUR",

    text:
`Tu rappelles.

Une tonalité.

Puis quelqu'un décroche.

Tu entends ta propre respiration.

Mais ce n'est pas toi qui respires.

Une voix murmure :

« Chambre 31. »

Puis la ligne coupe.`,

    choices: [

        {
            text: "🚪 Chercher la chambre 31",
            next: "room31",
            clue: "Chambre 31"
        },

        {
            text: "🔴 Aller à la salle des communications",
            next: "red_light"
        }

    ]

},


/* =========================================================
   SALLE DES ÉCRANS
========================================================= */

communication_screens: {

    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:25",
    speaker: "NARRATEUR",

    text:
`Les écrans montrent différentes pièces de l'hôtel.

Chambre 17.

Chambre 18.

Chambre 23.

Escalier.

Sous-sol.

Puis un écran affiche une pièce inconnue.

Une personne y est assise.

Elle porte exactement les mêmes vêtements que toi.

En dessous :

PATIENT 02.`,

    choices: [

        {
            text: "🖥️ Examiner l'écran",
            next: "patient02",
            clue: "Patient 02"
        },

        {
            text: "🔌 Débrancher l'écran",
            next: "screen_off"
        }

    ]

},


/* =========================================================
   PATIENT 02
========================================================= */

patient02: {

    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:27",
    speaker: "NARRATEUR",

    text:
`Tu zoomes sur l'écran.

La personne lève la tête.

Elle te regarde.

Puis elle parle.

Tu n'entends rien.

Mais ses lèvres forment clairement les mots :

« JE SUIS TOI. »

L'écran devient noir.

Un message apparaît :

PATIENT 02 — RÉVEIL DANS 03:00.`,

    choices: [

        {
            text: "⏱️ Chercher où se trouve le patient",
            next: "patient_location",
            clue: "Patient 02"
        },

        {
            text: "🚪 Quitter la salle",
            next: "chapter2_corridor"
        }

    ]

},


/* =========================================================
   CARTE
========================================================= */

hotel_map: {

    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:27",
    speaker: "NARRATEUR",

    text:
`Tu observes la carte.

L'hôtel possède cinq niveaux.

Mais un sixième niveau est dessiné au crayon.

Aucune indication.

Juste un symbole :

☎

À côté :

« NE PAS RÉPONDRE. »`,

    choices: [

        {
            text: "🔍 Chercher le sixième niveau",
            next: "sixth_floor",
            clue: "Sixième niveau"
        },

        {
            text: "🚪 Quitter la salle",
            next: "chapter2_corridor"
        }

    ]

},


/* =========================================================
   COUPER LE COURANT
========================================================= */

cut_power: {

    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:29",
    speaker: "NARRATEUR",

    text:
`Tu trouves le disjoncteur.

Tu coupes.

Tout devient noir.

Pendant quelques secondes...

plus aucun bruit.

Puis tous les téléphones se mettent à sonner.

Même ceux qui n'ont plus de câbles.

Tu réalises que le courant n'alimente pas les téléphones.

Quelque chose d'autre le fait.`,

    choices: [

        {
            text: "🔦 Allumer la lampe",
            next: "phones_dark"
        },

        {
            text: "🏃 Fuir",
            next: "chapter2_corridor"
        }

    ]

},


/* =========================================================
   CHAMBRE 23 DU SIGNAL
========================================================= */

signal_room23: {

    chapter: "CHAPITRE II",
    location: "CHAMBRE 23",
    time: "01:31",
    speaker: "NARRATEUR",

    text:
`Tu retournes à la chambre 23.

L'homme n'est plus là.

Sur le mur :

47.17.23.

En dessous :

31.

Puis 06.

Puis 02.

Une suite de nombres.

Tu comprends qu'il s'agit de chambres.`,

    choices: [

        {
            text: "🚪 Aller à la chambre 31",
            next: "room31"
        },

        {
            text: "🔍 Chercher la chambre 06",
            next: "room06",
            clue: "Suite de chambres"
        }

    ]

},


/* =========================================================
   CHAMBRE 31
========================================================= */

room31: {

    chapter: "CHAPITRE II",
    location: "CHAMBRE 31",
    time: "01:33",
    speaker: "NARRATEUR",

    text:
`La chambre 31 n'a pas de lit.

Seulement un vieux magnétophone.

Une cassette est déjà insérée.

Tu appuies sur PLAY.

Une voix commence :

« Si tu es arrivé jusqu'ici, tu as déjà rencontré ton double. »

Un souffle.

« Ne le laisse jamais entrer dans ta chambre. »

Puis :

« Parce qu'il ne cherche pas à te tuer.

Il cherche à prendre ta place. »`,

    choices: [

        {
            text: "📼 Continuer l'enregistrement",
            next: "tape_continue",
            clue: "Le double"
        },

        {
            text: "🚪 Quitter la chambre",
            next: "chapter2_corridor"
        }

    ]

},


/* =========================================================
   CHAMBRE 06
========================================================= */

room06: {

    chapter: "CHAPITRE II",
    location: "CHAMBRE 06",
    time: "01:35",
    speaker: "NARRATEUR",

    text:
`La chambre 06 est vide.

Sur le mur, quelqu'un a écrit :

« 6 APPELS. »

Sous l'inscription :

1 — OUBLI

2 — PEUR

3 — COLÈRE

4 — DOULEUR

5 — IDENTITÉ

6 — ?

Tu entends une sonnerie derrière le mur.`,

    choices: [

        {
            text: "📞 Chercher le téléphone",
            next: "sixth_call",
            clue: "Six appels"
        },

        {
            text: "🚪 Quitter",
            next: "chapter2_corridor"
        }

    ]

},


/* =========================================================
   COULOIR
========================================================= */

chapter2_corridor: {

    chapter: "CHAPITRE II",
    location: "LAST CALL HOTEL",
    time: "01:37",
    speaker: "NARRATEUR",

    text:
`Tu retournes dans le couloir.

L'horloge indique toujours 01:37.

Tu avances.

Les portes semblent changer de numéro lorsque tu détournes les yeux.

Puis une voix retentit dans les haut-parleurs :

« Le deuxième appel est terminé. »

Toutes les lumières deviennent rouges.

Une porte s'ouvre au fond du couloir.

Un escalier descend dans l'obscurité.`,

    choices: [

        {
            text: "⬇️ Descendre",
            next: "chapter2_end"
        },

        {
            text: "🚪 Retourner à la chambre 17",
            next: "chapter2_return"
        }

    ]

},


/* =========================================================
   SIXIÈME NIVEAU
========================================================= */

sixth_floor: {

    chapter: "CHAPITRE II",
    location: "SIXIÈME NIVEAU",
    time: "01:40",
    speaker: "NARRATEUR",

    text:
`L'ascenseur monte.

18...

19...

20...

Puis l'écran affiche :

06.

Les portes s'ouvrent.

Un couloir identique.

Mais aucune porte.

Seulement des téléphones fixés au mur.

Au bout :

une porte marquée :

APPEL N°03.`,

    choices: [

        {
            text: "🚪 Entrer",
            next: "chapter2_end"
        },

        {
            text: "📞 Décrocher un téléphone",
            next: "sixth_call"
        }

    ]

},


/* =========================================================
   SIXIÈME APPEL
========================================================= */

sixth_call: {

    chapter: "CHAPITRE II",
    location: "CHAMBRE 06",
    time: "01:42",
    speaker: "VOIX INCONNUE",

    text:
`Tu décroches.

Une voix d'enfant.

« Tu veux savoir ce qui arrive au sixième appel ? »

Tu ne réponds pas.

« Tu oublies qui tu es. »

Silence.

« Et quelqu'un d'autre prend ta place. »

Puis l'enfant rit.

« Mais ne t'inquiète pas.

Il reste encore quatre appels. »`,

    choices: [

        {
            text: "📞 Demander son nom",
            next: "child_name",
            clue: "Voix d'enfant"
        },

        {
            text: "📵 Raccrocher",
            next: "chapter2_end"
        }

    ]

},


/* =========================================================
   FIN DU CHAPITRE 2
========================================================= */

chapter2_end: {

    chapter: "CHAPITRE II",
    location: "ESCALIER",
    time: "01:47",
    speaker: "NARRATEUR",

    text:
`Tu descends les marches.

Une porte se trouve en bas.

Elle porte une inscription :

SOUS-SOL — NIVEAU 1.

Derrière la porte, un téléphone sonne.

Tu approches.

La sonnerie s'arrête.

Puis une voix murmure :

« Troisième appel. »

La porte s'ouvre toute seule.

L'obscurité t'attend.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "chapter3_start"
        }

    ]

},


/* =========================================================
   PETITES TRANSITIONS
========================================================= */

red_door: {
    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:20",
    speaker: "NARRATEUR",
    text:
`La porte derrière toi est entrouverte.

À l'intérieur, un téléphone sonne.

Sur le mur :

« NE RÉPONDS PAS. »`,
    choices: [
        {
            text: "📞 Répondre",
            next: "signal_call"
        },
        {
            text: "🚪 Partir",
            next: "red_light"
        }
    ]
},

phone_off: {
    chapter: "CHAPITRE II",
    location: "COULOIR",
    time: "01:23",
    speaker: "NARRATEUR",
    text:
`Tu éteins ton téléphone.

La lumière rouge disparaît.

Mais dans ta poche...

l'appareil se rallume tout seul.

Un nouveau message :

« JE SAIS OÙ TU ES. »`,
    choices: [
        {
            text: "🔴 Suivre la lumière",
            next: "red_light"
        }
    ]
},

screen_off: {
    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:28",
    speaker: "NARRATEUR",
    text:
`Tu débranches l'écran.

Tous les autres écrans s'éteignent.

Puis un dernier s'allume derrière toi.

Il affiche une seule phrase :

« TROP TARD. »`,
    choices: [
        {
            text: "🚪 Sortir",
            next: "chapter2_corridor"
        }
    ]
},

phones_dark: {
    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:30",
    speaker: "NARRATEUR",
    text:
`La lampe éclaire la pièce.

Tous les téléphones sont silencieux.

Sauf un.

Il n'a aucun câble.

Tu t'approches.

L'écran affiche :

APPEL N°03.`,
    choices: [
        {
            text: "📞 Décrocher",
            next: "chapter2_end"
        }
    ]
},

patient_location: {
    chapter: "CHAPITRE II",
    location: "SALLE DES COMMUNICATIONS",
    time: "01:28",
    speaker: "NARRATEUR",
    text:
`Une carte apparaît.

Le patient 02 se trouve sous l'hôtel.

À côté de son emplacement :

« NIVEAU -2. »`,
    choices: [
        {
            text: "⬇️ Chercher l'accès au sous-sol",
            next: "chapter2_end",
            clue: "Niveau -2"
        }
    ]
},

tape_continue: {
    chapter: "CHAPITRE II",
    location: "CHAMBRE 31",
    time: "01:34",
    speaker: "ENREGISTREMENT",
    text:
`La voix continue :

« Si tu entends cet enregistrement, ne cherche pas à sortir de l'hôtel.

Il n'y a pas de sortie.

Il n'y en a jamais eu. »

La cassette s'arrête.

Un téléphone sonne derrière toi.`,
    choices: [
        {
            text: "📞 Répondre",
            next: "chapter2_end"
        }
    ]
},

child_name: {
    chapter: "CHAPITRE II",
    location: "CHAMBRE 06",
    time: "01:43",
    speaker: "VOIX D'ENFANT",
    text:
`« Je n'ai plus de nom.

L'hôtel me l'a pris.

Comme il prendra le tien. »`,
    choices: [
        {
            text: "📞 Demander comment sortir",
            next: "chapter2_end"
        }
    ]
},

chapter2_return: {
    chapter: "CHAPITRE II",
    location: "ÉTAGE 17",
    time: "01:45",
    speaker: "NARRATEUR",
    text:
`Tu retournes vers la chambre 17.

La porte est grande ouverte.

À l'intérieur...

quelqu'un dort sur ton lit.

Tu reconnais immédiatement son visage.

C'est le tien.`,
    choices: [
        {
            text: "👤 Entrer",
            next: "chapter2_end"
        },
        {
            text: "🏃 Fuir",
            next: "chapter2_end"
        }
    ]
}

});
