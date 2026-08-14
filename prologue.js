"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   PROLOGUE — THE LAST CALL
========================================================= */

window.STORY = window.STORY || {};

Object.assign(window.STORY, {


/* =========================================================
   DÉBUT
========================================================= */

start: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:41",

    speaker: "NARRATEUR",

    text:
`La pluie tombe depuis près d'une heure.

La route est presque entièrement déserte.

Tu conduis depuis plusieurs kilomètres sans avoir croisé une seule voiture.

Ton téléphone est posé sur le siège passager.

Aucun réseau.

Aucune notification.

Puis, soudain...

il sonne.

Un appel inconnu.

Tu regardes l'écran.

NUMÉRO MASQUÉ.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "answer_call",
            clue: "Appel inconnu"
        },

        {
            text: "🔇 Ignorer l'appel",
            next: "ignore_call"
        },

        {
            text: "🚗 Continuer sans toucher au téléphone",
            next: "keep_driving"
        }

    ]

},


/* =========================================================
   RÉPONDRE
========================================================= */

answer_call: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:42",

    speaker: "VOIX INCONNUE",

    text:
`Tu décroches.

Pendant quelques secondes...

rien.

Seulement un souffle.

Puis une voix murmure :

« Ne t'arrête surtout pas. »

Tu fronces les sourcils.

— Qui êtes-vous ?

Silence.

Puis la voix reprend.

« Tu ne dois pas aller à l'hôtel. »

Ton cœur se serre.

Tu n'as jamais parlé d'hôtel.

La ligne grésille.

Avant de couper, la voix ajoute :

« Quand tu entendras trois coups... ne regarde pas derrière toi. »`,

    choices: [

        {
            text: "📞 Demander qui parle",
            next: "ask_identity",
            clue: "Avertissement"
        },

        {
            text: "📍 Demander où se trouve l'hôtel",
            next: "ask_hotel",
            clue: "Le Last Call"
        },

        {
            text: "❌ Raccrocher",
            next: "hang_up"
        }

    ]

},


/* =========================================================
   IGNORER
========================================================= */

ignore_call: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:43",

    speaker: "NARRATEUR",

    text:
`Tu laisses sonner.

Une fois.

Deux fois.

Puis l'appel s'arrête.

Tu souffles.

Le silence revient.

Quelques secondes passent.

Ton téléphone sonne de nouveau.

Même numéro.

Tu refuses encore.

Cette fois, aucune sonnerie.

À la place...

un message apparaît.

« TU AURAIS DÛ RÉPONDRE. »`,

    choices: [

        {
            text: "📱 Lire les détails du message",
            next: "message_details",
            clue: "Message inconnu"
        },

        {
            text: "🗑️ Supprimer le message",
            next: "delete_message"
        },

        {
            text: "🚗 Accélérer",
            next: "accelerate"
        }

    ]

},


/* =========================================================
   CONTINUER
========================================================= */

keep_driving: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:44",

    speaker: "NARRATEUR",

    text:
`Tu ne touches pas au téléphone.

Tu gardes les yeux sur la route.

La pluie devient plus forte.

Puis tu aperçois quelque chose sur le bas-côté.

Un panneau.

Tu ralentis.

LAST CALL HOTEL
3 KM

Tu n'avais jamais entendu parler de cet endroit.

Tu continues.

Quelques secondes plus tard...

le téléphone arrête de sonner.

Mais une nouvelle notification apparaît.

Une photo.

La photo montre ta voiture.

Prise depuis l'arrière.`,

    choices: [

        {
            text: "📱 Ouvrir la photo",
            next: "open_photo",
            clue: "Photo de la voiture"
        },

        {
            text: "🚗 Continuer",
            next: "hotel_road"
        },

        {
            text: "🔄 Faire demi-tour",
            next: "turn_back"
        }

    ]

},


/* =========================================================
   IDENTITÉ
========================================================= */

ask_identity: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:43",

    speaker: "VOIX INCONNUE",

    text:
`— Qui êtes-vous ?

La voix respire lentement.

« Quelqu'un qui a déjà fait ton trajet. »

— Comment connaissez-vous mon trajet ?

Un rire très faible.

« Parce que je suis encore dans ta voiture. »

Tu regardes immédiatement le rétroviseur.

Personne.

La voix murmure :

« Je t'avais dit de ne pas regarder. »`,

    choices: [

        {
            text: "👀 Regarder le siège arrière",
            next: "back_seat",
            clue: "La présence"
        },

        {
            text: "📞 Demander ce qu'elle veut",
            next: "what_wants"
        },

        {
            text: "❌ Raccrocher immédiatement",
            next: "hang_up"
        }

    ]

},


/* =========================================================
   DEMANDER L'HÔTEL
========================================================= */

ask_hotel: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:44",

    speaker: "VOIX INCONNUE",

    text:
`— Quel hôtel ?

La réponse arrive immédiatement.

« Le Last Call. »

Tu regardes la route.

« Tu le verras dans trois kilomètres. »

— Et pourquoi je ne dois pas y aller ?

La voix reste silencieuse.

Puis :

« Parce que quelqu'un t'y attend. »

— Qui ?

La communication coupe.`,

    choices: [

        {
            text: "🏨 Chercher l'hôtel",
            next: "hotel_road",
            clue: "Last Call Hotel"
        },

        {
            text: "🚗 Faire demi-tour",
            next: "turn_back"
        },

        {
            text: "📞 Rappeler le numéro",
            next: "call_back"
        }

    ]

},


/* =========================================================
   RACCROCHER
========================================================= */

hang_up: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:45",

    speaker: "NARRATEUR",

    text:
`Tu raccroches.

Le silence revient.

Tu poses le téléphone.

Puis...

TOC.

Tu sursautes.

TOC.

Deuxième coup.

Tu fixes le pare-brise.

TOC.

Troisième coup.

Quelque chose vient de frapper la vitre arrière.`,

    choices: [

        {
            text: "👀 Regarder derrière",
            next: "look_back"
        },

        {
            text: "🚗 Accélérer",
            next: "accelerate"
        },

        {
            text: "🔒 Verrouiller les portes",
            next: "lock_doors",
            item: "Clé de voiture"
        }

    ]

},


/* =========================================================
   DÉTAILS MESSAGE
========================================================= */

message_details: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:44",

    speaker: "NARRATEUR",

    text:
`Tu ouvres les informations du message.

Aucun numéro.

Aucune adresse.

Aucune trace.

Seulement une heure :

00:17

Puis une deuxième ligne apparaît.

« NE SOIS PAS DANS LA CHAMBRE 17. »`,

    choices: [

        {
            text: "📱 Faire une capture",
            next: "screenshot",
            clue: "Chambre 17"
        },

        {
            text: "🚗 Quitter la route 47",
            next: "leave_route"
        },

        {
            text: "🏨 Chercher le Last Call Hotel",
            next: "hotel_road"
        }

    ]

},


/* =========================================================
   SUPPRIMER MESSAGE
========================================================= */

delete_message: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:45",

    speaker: "NARRATEUR",

    text:
`Tu supprimes le message.

L'écran devient noir.

Puis le téléphone s'allume tout seul.

Une nouvelle phrase apparaît :

« SUPPRIMER N'EFFACE PAS. »

Tu lâches presque le téléphone.

Une nouvelle notification.

Une adresse.

LAST CALL HOTEL
ROUTE 47

Tu reconnais immédiatement l'endroit.

Il se trouve à moins de trois kilomètres.`,

    choices: [

        {
            text: "🏨 Aller à l'hôtel",
            next: "hotel_road"
        },

        {
            text: "🚗 Faire demi-tour",
            next: "turn_back"
        }

    ]

},


/* =========================================================
   ACCÉLÉRER
========================================================= */

accelerate: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:46",

    speaker: "NARRATEUR",

    text:
`Tu appuies sur l'accélérateur.

La voiture gagne rapidement de la vitesse.

La pluie frappe violemment le pare-brise.

Puis...

les lumières de la route s'éteignent.

Une par une.

Devant toi, plus rien.

Seulement l'obscurité.

Ton téléphone sonne encore.

Cette fois...

l'appel affiche ton propre numéro.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "call_yourself"
        },

        {
            text: "🚫 Refuser",
            next: "refuse_yourself"
        }

    ]

},


/* =========================================================
   PHOTO
========================================================= */

open_photo: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:45",

    speaker: "NARRATEUR",

    text:
`Tu ouvres la photo.

Ta voiture est parfaitement visible.

Mais quelque chose est étrange.

La photo a été prise à quelques mètres seulement.

Et derrière ta voiture...

il y a une silhouette.

Tu zoomes.

L'image devient floue.

La silhouette semble lever la main.

Ton téléphone affiche soudain :

PHOTO PRISE À 23:47.

Tu regardes l'heure actuelle.

23:45.`,

    choices: [

        {
            text: "📱 Garder la photo",
            next: "keep_photo",
            clue: "Photo impossible"
        },

        {
            text: "🗑️ Supprimer la photo",
            next: "delete_photo"
        }

    ]

},


/* =========================================================
   ROUTE DE L'HÔTEL
========================================================= */

hotel_road: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:49",

    speaker: "NARRATEUR",

    text:
`Trois kilomètres plus tard...

tu aperçois une enseigne lumineuse.

LAST CALL HOTEL

Le bâtiment semble complètement abandonné.

Aucune voiture.

Aucune lumière aux fenêtres.

Pourtant...

le panneau d'entrée fonctionne.

Tu ralentis.

Ton téléphone affiche :

00:17

Tu regardes l'horloge de la voiture.

23:49.

Puis une voix sort des haut-parleurs de la voiture.

« Bienvenue. »`,

    choices: [

        {
            text: "🏨 Entrer sur le parking",
            next: "hotel_parking",
            clue: "Last Call Hotel"
        },

        {
            text: "🚗 Continuer sans s'arrêter",
            next: "pass_hotel"
        },

        {
            text: "🔄 Faire demi-tour",
            next: "turn_back"
        }

    ]

},


/* =========================================================
   DEMI-TOUR
========================================================= */

turn_back: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:51",

    speaker: "NARRATEUR",

    text:
`Tu fais demi-tour.

Tu roules dans l'autre direction.

Cinq minutes.

Dix minutes.

Vingt minutes.

La route semble interminable.

Puis tu aperçois à nouveau l'enseigne.

LAST CALL HOTEL

Tu freines.

Tu viens de repasser exactement au même endroit.

Impossible.

Ton téléphone sonne.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "answer_again"
        },

        {
            text: "🚗 Continuer",
            next: "loop_road"
        }

    ]

},


/* =========================================================
   SIÈGE ARRIÈRE
========================================================= */

back_seat: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:46",

    speaker: "NARRATEUR",

    text:
`Tu regardes le siège arrière.

Personne.

Tu souffles.

Puis tu remarques quelque chose.

Une vieille cassette audio est posée sur le siège.

Tu es certain qu'elle n'était pas là avant.

Une étiquette est collée dessus :

THE LAST CALL

Et en dessous :

« ÉCOUTE-MOI À 00:17. »`,

    choices: [

        {
            text: "📼 Prendre la cassette",
            next: "take_cassette",
            item: "Cassette The Last Call"
        },

        {
            text: "🚫 La laisser",
            next: "leave_cassette"
        }

    ]

},


/* =========================================================
   CE QU'ELLE VEUT
========================================================= */

what_wants: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:47",

    speaker: "VOIX INCONNUE",

    text:
`— Qu'est-ce que vous voulez ?

La voix répond :

« Que tu arrives vivant. »

— Où ?

« Au Last Call. »

— Pourquoi ?

Silence.

Puis :

« Parce que je n'ai pas réussi. »

La communication se coupe.`,

    choices: [

        {
            text: "🏨 Aller au Last Call",
            next: "hotel_road"
        },

        {
            text: "🚗 Fuir la zone",
            next: "leave_route"
        }

    ]

},


/* =========================================================
   REGARDER DERRIÈRE
========================================================= */

look_back: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:47",

    speaker: "NARRATEUR",

    text:
`Tu te retournes.

Le siège arrière est vide.

Mais la vitre est couverte de buée.

Quelqu'un vient d'y écrire un mot avec son doigt.

« ARRÊTE-TOI. »

Tu regardes devant toi.

Une voiture est arrêtée au milieu de la route.

Ses feux sont allumés.

La porte conducteur est ouverte.

Personne autour.`,

    choices: [

        {
            text: "🚗 S'arrêter",
            next: "stopped_car",
            clue: "Voiture abandonnée"
        },

        {
            text: "🏎️ Contourner la voiture",
            next: "pass_car"
        }

    ]

},


/* =========================================================
   PORTES VERROUILLÉES
========================================================= */

lock_doors: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:48",

    speaker: "NARRATEUR",

    text:
`Tu verrouilles les portes.

Tu accélères.

Pendant quelques secondes, rien.

Puis une main apparaît sur la vitre arrière.

Tu ne vois personne.

Seulement une main.

Elle glisse lentement sur la vitre.

Puis disparaît.

Ton téléphone affiche :

00:17

La route devant toi devient complètement noire.`,

    choices: [

        {
            text: "📞 Répondre au téléphone",
            next: "call_yourself"
        },

        {
            text: "🚗 Continuer",
            next: "hotel_road"
        }

    ]

},


/* =========================================================
   CAPTURE
========================================================= */

screenshot: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:46",

    speaker: "NARRATEUR",

    text:
`Tu fais une capture d'écran.

L'image apparaît immédiatement dans ta galerie.

Mais la capture montre quelque chose que tu n'avais pas vu.

Dans le reflet de ton écran...

une personne est assise derrière toi.

Tu te retournes.

Personne.

Lorsque tu regardes à nouveau l'écran...

la photo a disparu.`,

    choices: [

        {
            text: "📱 Vérifier la galerie",
            next: "gallery"
        },

        {
            text: "🚗 Ne plus regarder",
            next: "hotel_road"
        }

    ]

},


/* =========================================================
   APPEL À SOI-MÊME
========================================================= */

call_yourself: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:58",

    speaker: "TA VOIX",

    text:
`Tu décroches.

Tu entends ta propre respiration.

Puis ta propre voix.

« Ne va pas au Last Call. »

Tu restes silencieux.

« Tu m'entends ? »

Tu reconnais parfaitement ta voix.

Mais quelque chose ne va pas.

Elle semble terrifiée.

« Quand tu arriveras à 00:17... ne réponds surtout pas. »

La communication s'arrête.`,

    choices: [

        {
            text: "📞 Rappeler",
            next: "call_back"
        },

        {
            text: "🚗 Continuer",
            next: "hotel_road"
        }

    ]

},


/* =========================================================
   REFUSER
========================================================= */

refuse_yourself: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "23:59",

    speaker: "NARRATEUR",

    text:
`Tu refuses l'appel.

Ton téléphone s'éteint.

Une seconde plus tard...

toutes les lumières de la voiture s'éteignent également.

Le moteur continue pourtant de tourner.

Dans le noir, quelqu'un murmure :

« Mauvaise réponse. »`,

    choices: [

        {
            text: "🔦 Chercher une lampe",
            next: "find_light"
        },

        {
            text: "🚗 Sortir de la voiture",
            next: "exit_car"
        }

    ]

},


/* =========================================================
   PARKING
========================================================= */

hotel_parking: {

    chapter: "PROLOGUE",

    location: "LAST CALL HOTEL",

    time: "00:02",

    speaker: "NARRATEUR",

    text:
`Tu entres sur le parking.

Le moteur s'arrête.

Les portes se verrouillent toutes seules.

Tu essaies d'ouvrir.

Impossible.

Une lumière s'allume au dernier étage.

Une fenêtre.

Puis une deuxième.

Puis une troisième.

Toutes les lumières forment une ligne.

Comme si quelqu'un te montrait un chemin.`,

    choices: [

        {
            text: "🏨 Sortir de la voiture",
            next: "hotel_entrance"
        },

        {
            text: "🔒 Rester dans la voiture",
            next: "stay_car"
        },

        {
            text: "📞 Appeler les secours",
            next: "call_help"
        }

    ]

},


/* =========================================================
   FIN DU PROLOGUE → CHAPITRE 1
========================================================= */

hotel_entrance: {

    chapter: "PROLOGUE",

    location: "LAST CALL HOTEL",

    time: "00:07",

    speaker: "NARRATEUR",

    text:
`Tu entres dans le hall.

L'hôtel est silencieux.

Le comptoir est couvert de poussière.

Pourtant, une clé t'attend au milieu.

CHAMBRE 17.

Une vieille radio est posée derrière.

Elle s'allume toute seule.

Une voix murmure :

« Le premier appel est déjà passé. »

Puis...

trois coups résonnent quelque part dans l'hôtel.`,

    choices: [

        {
            text: "🔑 Prendre la clé",
            next: "chapter1_start",
            item: "Clé de la chambre 17"
        },

        {
            text: "📻 Écouter la radio",
            next: "radio_message",
            clue: "La radio"
        },

        {
            text: "🚪 Quitter immédiatement l'hôtel",
            next: "prologue_leave"
        }

    ]

},


/* =========================================================
   PASSER L'HÔTEL
========================================================= */

pass_hotel: {

    chapter: "PROLOGUE",

    location: "ROUTE 47",

    time: "00:03",

    speaker: "NARRATEUR",

    text:
`Tu passes devant l'hôtel.

Tu ne ralentis pas.

Quelques secondes plus tard...

le téléphone sonne.

Un message apparaît :

« TU AS OUBLIÉ DE REGARDER LA CHAMBRE 17. »`,

    choices: [

        {
            text: "🚗 Continuer",
            next: "chapter1_start"
        },

        {
            text: "🔄 Faire demi-tour",
            next: "hotel_road"
        }

    ]

},


/* =========================================================
   SORTIE 
