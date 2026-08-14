"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   CHAPTER I — L'HÔTEL
========================================================= */

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

/* =========================================================
   ARRIVÉE AU CHAPITRE 1
========================================================= */

chapter1_begin: {

    chapter: "CHAPITRE I",
    location: "LAST CALL HOTEL",
    time: "00:19",
    speaker: "NARRATEUR",

    text:
`L'ascenseur s'ouvre lentement.

Une odeur de poussière et d'humidité envahit le couloir.

Tu entres.

Les portes se referment derrière toi.

17.

Le seul bouton disponible.

Tu appuies.

L'ascenseur commence à monter.

1...

2...

3...

Puis l'affichage s'éteint.

Le silence devient total.

Une voix sort du haut-parleur.

« Tu as répondu au premier appel. »

Tu te figes.

Tu n'as pourtant jamais parlé à personne.

« Maintenant, tu dois écouter le deuxième. »`,

    choices: [

        {
            text: "📞 Sortir ton téléphone",
            next: "elevator_phone",
            clue: "Deuxième appel"
        },

        {
            text: "🔢 Chercher un autre bouton",
            next: "elevator_buttons"
        },

        {
            text: "🔊 Parler à la voix",
            next: "elevator_voice"
        }

    ]

},


/* =========================================================
   TÉLÉPHONE DANS L'ASCENSEUR
========================================================= */

elevator_phone: {

    chapter: "CHAPITRE I",
    location: "ASCENSEUR",
    time: "00:20",
    speaker: "NARRATEUR",

    text:
`Ton téléphone s'allume.

Aucun réseau.

Pourtant, un appel arrive.

Numéro inconnu.

Tu hésites.

Puis l'écran affiche :

CHAMBRE 17.

L'appel est toujours en cours.

Tu n'as même pas décroché.

Une voix murmure depuis ton téléphone :

« Ne raccroche pas. »`,

    choices: [

        {
            text: "📞 Répondre",
            next: "second_call",
            clue: "Le deuxième appel"
        },

        {
            text: "❌ Raccrocher",
            next: "hang_second_call"
        },

        {
            text: "📱 Mettre le téléphone en haut-parleur",
            next: "speaker_call"
        }

    ]

},


/* =========================================================
   DEUXIÈME APPEL
========================================================= */

second_call: {

    chapter: "CHAPITRE I",
    location: "ASCENSEUR",
    time: "00:21",
    speaker: "VOIX INCONNUE",

    text:
`Tu réponds.

Pendant plusieurs secondes...

rien.

Puis :

« Tu as trouvé la clé ? »

Tu regardes ta main.

Si tu as pris la clé, elle est toujours là.

— Qui êtes-vous ?

La voix répond :

« Je suis au bout du couloir. »

— Dans la chambre 17 ?

Silence.

« Non.

Dans la chambre 18. »

Puis l'appel coupe.`,

    choices: [

        {
            text: "🚪 Aller vers la chambre 18",
            next: "room18"
        },

        {
            text: "🔑 Aller vers la chambre 17",
            next: "room17"
        },

        {
            text: "🏃 Descendre de l'ascenseur",
            next: "elevator_escape"
        }

    ]

},


/* =========================================================
   RACCROCHER
========================================================= */

hang_second_call: {

    chapter: "CHAPITRE I",
    location: "ASCENSEUR",
    time: "00:21",
    speaker: "NARRATEUR",

    text:
`Tu raccroches.

L'écran devient noir.

Puis l'ascenseur s'arrête brutalement.

Les lumières s'éteignent.

Dans le noir, tu entends une respiration.

Juste derrière toi.

Une voix murmure :

« Mauvais choix. »`,

    choices: [

        {
            text: "🔦 Allumer la lampe",
            next: "elevator_dark"
        },

        {
            text: "🚪 Essayer d'ouvrir les portes",
            next: "elevator_escape"
        }

    ]

},


/* =========================================================
   HAUT-PARLEUR
========================================================= */

speaker_call: {

    chapter: "CHAPITRE I",
    location: "ASCENSEUR",
    time: "00:22",
    speaker: "VOIX INCONNUE",

    text:
`Tu mets l'appel en haut-parleur.

Une respiration se fait entendre.

Puis une deuxième.

Tu comprends alors quelque chose.

Il n'y a pas une personne au bout du fil.

Il y en a plusieurs.

Des voix chuchotent :

« Dix-sept... »

« Dix-huit... »

« Dix-neuf... »

Puis toutes ensemble :

« Vingt. »

L'ascenseur s'arrête.`,

    choices: [

        {
            text: "🚪 Sortir",
            next: "floor20"
        },

        {
            text: "📞 Demander qui ils sont",
            next: "voices_answer"
        }

    ]

},


/* =========================================================
   BOUTONS
========================================================= */

elevator_buttons: {

    chapter: "CHAPITRE I",
    location: "ASCENSEUR",
    time: "00:22",
    speaker: "NARRATEUR",

    text:
`Tu cherches un autre bouton.

Il n'y en a qu'un.

17.

Mais sous le bouton, tu remarques une petite trappe.

Elle est verrouillée.

Sur la serrure, un symbole identique à celui de ta clé.

Tu approches la clé.`,

    choices: [

        {
            text: "🔑 Utiliser la clé",
            next: "secret_elevator",
            clue: "Symbole de la clé"
        },

        {
            text: "🚫 Ne pas l'ouvrir",
            next: "floor17"
        }

    ]

},


/* =========================================================
   PARLER À LA VOIX
========================================================= */

elevator_voice: {

    chapter: "CHAPITRE I",
    location: "ASCENSEUR",
    time: "00:23",
    speaker: "NARRATEUR",

    text:
`— Qui êtes-vous ?

La voix répond immédiatement.

« Une question plus importante serait :

qui es-tu ? »

Tu ne réponds pas.

« Tu ne te souviens déjà plus. »

L'ascenseur ralentit.

« La chambre 17 va te rappeler. »

Les portes s'ouvrent.`,

    choices: [

        {
            text: "🚪 Sortir",
            next: "floor17"
        }

    ]

},


/* =========================================================
   CHAMBRE 17
========================================================= */

floor17: {

    chapter: "CHAPITRE I",
    location: "ÉTAGE 17",
    time: "00:25",
    speaker: "NARRATEUR",

    text:
`Les portes s'ouvrent.

Un long couloir.

Toutes les portes sont ouvertes.

Sauf une.

17.

La clé que tu as trouvée correspond parfaitement à la serrure.

Mais avant que tu puisses l'utiliser...

le téléphone sonne.

Encore.

Tu regardes l'écran.

CHAMBRE 17.`,

    choices: [

        {
            text: "🔑 Ouvrir la chambre 17",
            next: "room17",
            clue: "Chambre 17"
        },

        {
            text: "📞 Répondre au téléphone",
            next: "room17_call"
        },

        {
            text: "🚪 Examiner les autres chambres",
            next: "other_rooms"
        }

    ]

},


/* =========================================================
   CHAMBRE 18
========================================================= */

room18: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 18",
    time: "00:26",
    speaker: "NARRATEUR",

    text:
`La porte de la chambre 18 est entrouverte.

Tu pousses doucement.

La pièce est vide.

Un vieux téléviseur fonctionne.

L'écran affiche une caméra de surveillance.

Tu reconnais le parking.

Puis tu vois ta voiture.

La caméra change.

Elle montre le hall.

Puis l'ascenseur.

Puis...

toi.

Debout devant la télévision.

Mais sur l'image...

quelqu'un se tient derrière toi.`,

    choices: [

        {
            text: "👀 Se retourner",
            next: "room18_turn"
        },

        {
            text: "📺 Examiner la caméra",
            next: "camera_room",
            clue: "Caméras de surveillance"
        },

        {
            text: "🚪 Sortir de la chambre",
            next: "room18_leave"
        }

    ]

},


/* =========================================================
   REGARDER DERRIÈRE
========================================================= */

room18_turn: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 18",
    time: "00:27",
    speaker: "NARRATEUR",

    text:
`Tu te retournes.

Personne.

Tu regardes à nouveau l'écran.

La silhouette est toujours là.

Elle est maintenant beaucoup plus proche.

Puis la télévision s'éteint.

Une phrase apparaît sur l'écran noir :

« NE REGARDE PLUS DERRIÈRE TOI. »`,

    choices: [

        {
            text: "🚪 Quitter la chambre",
            next: "room18_leave"
        },

        {
            text: "📺 Rallumer la télévision",
            next: "camera_room"
        }

    ]

},


/* =========================================================
   CAMÉRAS
========================================================= */

camera_room: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 18",
    time: "00:28",
    speaker: "NARRATEUR",

    text:
`Tu manipules les boutons.

Caméra 01 : parking.

Caméra 02 : hall.

Caméra 03 : ascenseur.

Caméra 04 : chambre 17.

Tu sélectionnes la caméra 04.

La porte de la chambre 17 est ouverte.

Une silhouette est debout au milieu de la pièce.

Elle regarde directement la caméra.

Puis elle lève lentement la main.

Elle montre le chiffre :

3.`,

    choices: [

        {
            text: "📺 Continuer à regarder",
            next: "camera_three"
        },

        {
            text: "🚪 Aller à la chambre 17",
            next: "room17"
        }

    ]

},


/* =========================================================
   CHAMBRE 17
========================================================= */

room17: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:30",
    speaker: "NARRATEUR",

    text:
`Tu ouvres la porte.

La chambre est étrangement propre.

Un lit.

Une table.

Une vieille horloge.

Et un téléphone fixe.

L'horloge indique :

00:17.

Le téléphone se met à sonner.

Une fois.

Deux fois.

Trois fois.

Tu te souviens de l'avertissement.

Ne réponds pas au troisième appel.

Mais le téléphone continue.

Puis une voix sort du combiné :

« Tu es enfin revenu. »`,

    choices: [

        {
            text: "📞 Décrocher",
            next: "room17_answer"
        },

        {
            text: "🔇 Laisser sonner",
            next: "room17_ignore"
        },

        {
            text: "🔌 Débrancher le téléphone",
            next: "disconnect_phone",
            item: "Combiné du téléphone"
        }

    ]

},


/* =========================================================
   APPEL CHAMBRE 17
========================================================= */

room17_call: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:30",
    speaker: "VOIX INCONNUE",

    text:
`Tu réponds.

— Qui êtes-vous ?

La voix :

« Tu veux vraiment le savoir ? »

— Oui.

« Alors regarde sous le lit. »

La communication coupe.

Tu regardes le lit.

Une petite boîte est cachée dessous.`,

    choices: [

        {
            text: "📦 Prendre la boîte",
            next: "box_under_bed",
            item: "Boîte métallique"
        },

        {
            text: "🚫 Ne pas regarder",
            next: "room17_ignore"
        }

    ]

},


/* =========================================================
   SOUS LE LIT
========================================================= */

box_under_bed: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:32",
    speaker: "NARRATEUR",

    text:
`Tu tires la boîte.

Elle est verrouillée.

Sur le couvercle :

17 / 47 / 00:17

Tu trouves une petite serrure.

La clé de l'hôtel pourrait fonctionner.

Mais avant que tu puisses essayer...

trois coups frappent à la porte.

TOC.

TOC.

TOC.`,

    choices: [

        {
            text: "🚪 Ouvrir la porte",
            next: "door_three_knocks"
        },

        {
            text: "🔒 Verrouiller la porte",
            next: "lock_room"
        },

        {
            text: "📦 Essayer d'ouvrir la boîte",
            next: "open_box"
        }

    ]

},


/* =========================================================
   OUVRIR LA BOÎTE
========================================================= */

open_box: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:33",
    speaker: "NARRATEUR",

    text:
`La clé entre dans la serrure.

CLIC.

La boîte s'ouvre.

À l'intérieur :

une photo.

Une cassette.

Et une feuille.

Tu prends la photo.

Ton sang se glace.

C'est toi.

Debout devant le Last Call Hotel.

Mais la photo semble avoir été prise des années auparavant.

Au dos :

« PREMIER ARRIVÉ. DERNIER SORTI. »`,

    choices: [

        {
            text: "📸 Examiner la photo",
            next: "old_photo",
            clue: "Photo du passé"
        },

        {
            text: "📼 Prendre la cassette",
            next: "hotel_cassette",
            item: "Cassette de la chambre 17"
        },

        {
            text: "📄 Lire la feuille",
            next: "mysterious_note",
            clue: "Premier arrivé"
        }

    ]

},


/* =========================================================
   PHOTO DU PASSÉ
========================================================= */

old_photo: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:35",
    speaker: "NARRATEUR",

    text:
`Tu observes la photo.

Derrière toi, devant l'hôtel...

il y a plusieurs personnes.

Toutes ont le visage rayé.

Sauf une.

Une personne au centre.

Elle te ressemble exactement.

Au dos de la photo :

« JOUR 1. »`,

    choices: [

        {
            text: "📄 Chercher la feuille",
            next: "mysterious_note"
        },

        {
            text: "📼 Prendre la cassette",
            next: "hotel_cassette",
            item: "Cassette de la chambre 17"
        }

    ]

},


/* =========================================================
   FEUILLE
========================================================= */

mysterious_note: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:36",
    speaker: "NARRATEUR",

    text:
`La feuille contient une seule phrase :

« À chaque appel, quelqu'un oublie. »

En dessous, une liste de noms.

Le dernier nom est le tien.

À côté :

APPEL N°01 — MÉMOIRE INTACTE.

Tu comprends alors pourquoi tu as l'impression de connaître cet endroit.`,

    choices: [

        {
            text: "📼 Écouter la cassette",
            next: "hotel_cassette",
            clue: "Appel numéro 1"
        },

        {
            text: "🚪 Quitter la chambre",
            next: "chapter1_hall"
        }

    ]

},


/* =========================================================
   CASSETTE
========================================================= */

hotel_cassette: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:38",
    speaker: "ENREGISTREMENT",

    text:
`Tu insères la cassette dans un vieux lecteur.

Un souffle.

Puis une voix.

La tienne.

« Si tu écoutes cette cassette, c'est que tu as oublié. »

Silence.

« Ne fais confiance à personne. »

Un bruit de pas.

« Même pas à la personne qui t'a envoyé ici. »

Puis la voix ajoute :

« Le prochain appel viendra de la chambre 23. »`,

    choices: [

        {
            text: "🔎 Noter le numéro 23",
            next: "remember_23",
            clue: "Chambre 23"
        },

        {
            text: "🚪 Quitter la chambre",
            next: "chapter1_hall"
        }

    ]

},


/* =========================================================
   APPEL CHAMBRE 23
========================================================= */

remember_23: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:40",
    speaker: "NARRATEUR",

    text:
`Tu notes le numéro.

23.

Soudain...

le téléphone fixe sonne.

L'écran affiche :

CHAMBRE 23.

Tu n'as pourtant aucun téléphone dans cette pièce connecté à une ligne extérieure.

La sonnerie continue.

Tu décroches.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "room23_call"
        },

        {
            text: "🔇 Laisser sonner",
            next: "room23_ignore"
        }

    ]

},


/* =========================================================
   RÉPONSE CHAMBRE 23
========================================================= */

room23_call: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:41",
    speaker: "VOIX INCONNUE",

    text:
`— Allô ?

Une respiration.

Puis :

« Tu as trouvé la photo. »

Tu ne réponds pas.

« Tu dois maintenant trouver celui qui est encore vivant. »

— Qui ?

« Chambre 23. »

Puis :

« Mais ne lui donne surtout pas ton nom. »`,

    choices: [

        {
            text: "🚪 Aller à la chambre 23",
            next: "room23"
        },

        {
            text: "🔍 Explorer le couloir",
            next: "chapter1_hall"
        }

    ]

},


/* =========================================================
   IGNORER CHAMBRE 23
========================================================= */

room23_ignore: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:42",
    speaker: "NARRATEUR",

    text:
`Tu laisses sonner.

La sonnerie s'arrête.

Puis le téléphone affiche :

APPEL MANQUÉ.

Une seconde plus tard :

APPEL MANQUÉ.

Puis encore.

APPEL MANQUÉ.

17 appels.

Tu regardes l'heure.

00:47.

Une porte s'ouvre dans le couloir.`,

    choices: [

        {
            text: "🚪 Sortir",
            next: "chapter1_hall"
        },

        {
            text: "🔒 Rester dans la chambre",
            next: "stay_room17"
        }

    ]

},


/* =========================================================
   PORTE — TROIS COUPS
========================================================= */

door_three_knocks: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:34",
    speaker: "NARRATEUR",

    text:
`Tu approches de la porte.

Tu regardes par le judas.

Personne.

Tu ouvres.

Le couloir est vide.

Mais une enveloppe se trouve sur le sol.

Ton nom est écrit dessus.

À l'intérieur :

« NE VA PAS À LA CHAMBRE 23. »`,

    choices: [

        {
            text: "📄 Garder l'enveloppe",
            next: "keep_letter",
            clue: "Lettre mystérieuse"
        },

        {
            text: "🚪 Aller à la chambre 23",
            next: "room23"
        }

    ]

},


/* =========================================================
   VERROUILLER
========================================================= */

lock_room: {

    chapter: "CHAPITRE I",
    location: "CHAMBRE 17",
    time: "00:34",
    speaker: "NARRATEUR",

    text:
`Tu verrouilles la porte.

Trois secondes de silence.

Puis quelqu'un frappe.

TOC.

TOC.

TOC.

Une voix murmure :

« Tu sais déjà qui je suis. »

La poignée commence à tourner.`,

    choices: [

        {
            text: "🔑 Ouvrir",
            next: "door_three_knocks"
        },

        {
            text: "🛏️ Se cacher",
            next: "hide_room"
        }

    ]

},


/* =========================================================
   COULOIR
========================================================= */

chapter1_hall: {

    chapter: "CHAPITRE I",
    location: "ÉTAGE 17",
    time: "00:48",
    speaker: "NARRATEUR",

    text:
`Tu sors dans le couloir.

Les lumières clignotent.

Les portes portent toutes des numéros.

17.

18.

19.

20.

21.

22.

23.

Puis tu remarques quelque chose.

La porte 24 n'existe pas.

Pourtant...

une lumière passe sous une porte sans numéro.`,

    choices: [

        {
            text: "🚪 Aller à la chambre 23",
            next: "room23"
        },

        {
            text: "👤 Examiner la porte sans numéro",
            next: "unnumbered_door",
            clue: "Porte sans numéro"
        },

        {
            text: "⬇️ Prendre l'escalier",
            next: "stairs"
        }

    ]

},


/* ====================================
