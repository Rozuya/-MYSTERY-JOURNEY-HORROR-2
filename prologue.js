"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   PROLOGUE — THE LAST CALL
========================================================= */

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

start:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:41",speaker:"NARRATEUR",
text:`La pluie tombe depuis près d'une heure.

La route est presque entièrement déserte.

Tu conduis depuis plusieurs kilomètres sans avoir croisé une seule voiture.

Ton téléphone est posé sur le siège passager.

Aucun réseau.
Aucune notification.

Puis, soudain...

il sonne.

Un appel inconnu.

NUMÉRO MASQUÉ.`,
choices:[
{text:"📞 Répondre",next:"answer_call",clue:"Appel inconnu"},
{text:"🔇 Ignorer l'appel",next:"ignore_call"},
{text:"🚗 Continuer sans toucher au téléphone",next:"keep_driving"}
]},

answer_call:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:42",speaker:"VOIX INCONNUE",
text:`Tu décroches.

Pendant quelques secondes... rien.

Seulement un souffle.

Puis une voix murmure :

« Ne t'arrête surtout pas. »

— Qui êtes-vous ?

« Tu ne dois pas aller à l'hôtel. »

Ton cœur se serre.

Tu n'as jamais parlé d'hôtel.

Avant de couper, la voix ajoute :

« Quand tu entendras trois coups... ne regarde pas derrière toi. »`,
choices:[
{text:"📞 Demander qui parle",next:"ask_identity",clue:"Avertissement"},
{text:"📍 Demander où se trouve l'hôtel",next:"ask_hotel",clue:"Le Last Call"},
{text:"❌ Raccrocher",next:"hang_up"}
]},

ignore_call:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:43",speaker:"NARRATEUR",
text:`Tu laisses sonner.

Une fois.
Deux fois.

L'appel s'arrête.

Quelques secondes plus tard, ton téléphone sonne encore.

Même numéro.

Tu refuses.

Cette fois, aucune sonnerie.

À la place, un message apparaît :

« TU AURAIS DÛ RÉPONDRE. »`,
choices:[
{text:"📱 Lire les détails",next:"message_details",clue:"Message inconnu"},
{text:"🗑️ Supprimer le message",next:"delete_message"},
{text:"🚗 Accélérer",next:"accelerate"}
]},

keep_driving:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:44",speaker:"NARRATEUR",
text:`Tu ne touches pas au téléphone.

La pluie devient plus forte.

Puis tu aperçois un panneau :

LAST CALL HOTEL
3 KM

Tu continues.

Quelques secondes plus tard, une notification apparaît.

Une photo.

Elle montre ta voiture prise depuis l'arrière.`,
choices:[
{text:"📱 Ouvrir la photo",next:"open_photo",clue:"Photo de la voiture"},
{text:"🚗 Continuer",next:"hotel_road"},
{text:"🔄 Faire demi-tour",next:"turn_back"}
]},

ask_identity:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:43",speaker:"VOIX INCONNUE",
text:`— Qui êtes-vous ?

« Quelqu'un qui a déjà fait ton trajet. »

— Comment connaissez-vous mon trajet ?

Un rire très faible.

« Parce que je suis encore dans ta voiture. »

Tu regardes le rétroviseur.

Personne.

« Je t'avais dit de ne pas regarder. »`,
choices:[
{text:"👀 Regarder le siège arrière",next:"back_seat",clue:"La présence"},
{text:"📞 Demander ce qu'elle veut",next:"what_wants"},
{text:"❌ Raccrocher",next:"hang_up"}
]},

ask_hotel:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:44",speaker:"VOIX INCONNUE",
text:`— Quel hôtel ?

« Le Last Call. Tu le verras dans trois kilomètres. »

— Pourquoi je ne dois pas y aller ?

Silence.

« Parce que quelqu'un t'y attend. »

— Qui ?

La communication coupe.`,
choices:[
{text:"🏨 Chercher l'hôtel",next:"hotel_road",clue:"Last Call Hotel"},
{text:"🚗 Faire demi-tour",next:"turn_back"},
{text:"📞 Rappeler le numéro",next:"call_back"}
]},

hang_up:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:45",speaker:"NARRATEUR",
text:`Tu raccroches.

Le silence revient.

Puis...

TOC.

Deuxième coup.

TOC.

Troisième coup.

Quelque chose vient de frapper la vitre arrière.`,
choices:[
{text:"👀 Regarder derrière",next:"look_back"},
{text:"🚗 Accélérer",next:"accelerate"},
{text:"🔒 Verrouiller les portes",next:"lock_doors",item:"Clé de voiture"}
]},

message_details:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:44",speaker:"NARRATEUR",
text:`Tu ouvres les informations du message.

Aucun numéro.
Aucune adresse.
Aucune trace.

Seulement une heure :

00:17

Puis une deuxième ligne apparaît :

« NE SOIS PAS DANS LA CHAMBRE 17. »`,
choices:[
{text:"📱 Faire une capture",next:"screenshot",clue:"Chambre 17"},
{text:"🚗 Quitter la route 47",next:"leave_route"},
{text:"🏨 Chercher le Last Call Hotel",next:"hotel_road"}
]},

delete_message:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:45",speaker:"NARRATEUR",
text:`Tu supprimes le message.

L'écran devient noir.

Puis le téléphone s'allume tout seul.

« SUPPRIMER N'EFFACE PAS. »

Une nouvelle notification apparaît :

LAST CALL HOTEL
ROUTE 47

Il se trouve à moins de trois kilomètres.`,
choices:[
{text:"🏨 Aller à l'hôtel",next:"hotel_road"},
{text:"🚗 Faire demi-tour",next:"turn_back"}
]},

accelerate:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:46",speaker:"NARRATEUR",
text:`Tu appuies sur l'accélérateur.

Les lumières de la route s'éteignent une par une.

Devant toi : l'obscurité.

Ton téléphone sonne encore.

Cette fois...

l'appel affiche ton propre numéro.`,
choices:[
{text:"📞 Répondre",next:"call_yourself"},
{text:"🚫 Refuser",next:"refuse_yourself"}
]},

open_photo:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:45",speaker:"NARRATEUR",
text:`Tu ouvres la photo.

Ta voiture est parfaitement visible.

Derrière elle se trouve une silhouette.

Tu zoomes.

L'image devient floue.

Ton téléphone affiche :

PHOTO PRISE À 23:47.

Tu regardes l'heure.

23:45.`,
choices:[
{text:"📱 Garder la photo",next:"keep_photo",clue:"Photo impossible"},
{text:"🗑️ Supprimer la photo",next:"delete_photo"}
]},

hotel_road:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:49",speaker:"NARRATEUR",
text:`Trois kilomètres plus tard...

LAST CALL HOTEL.

Le bâtiment semble abandonné.

Aucune voiture.
Aucune lumière.

Pourtant, le panneau fonctionne.

Ton téléphone affiche :

00:17

L'horloge de la voiture indique 23:49.

Puis une voix sort des haut-parleurs :

« Bienvenue. »`,
choices:[
{text:"🏨 Entrer sur le parking",next:"hotel_parking",clue:"Last Call Hotel"},
{text:"🚗 Continuer sans s'arrêter",next:"pass_hotel"},
{text:"🔄 Faire demi-tour",next:"turn_back"}
]},

turn_back:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:51",speaker:"NARRATEUR",
text:`Tu fais demi-tour.

Cinq minutes.
Dix minutes.
Vingt minutes.

La route semble interminable.

Puis tu aperçois à nouveau :

LAST CALL HOTEL.

Tu viens de repasser exactement au même endroit.

Impossible.

Ton téléphone sonne.`,
choices:[
{text:"📞 Répondre",next:"answer_again"},
{text:"🚗 Continuer",next:"loop_road"}
]},

back_seat:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:46",speaker:"NARRATEUR",
text:`Tu regardes le siège arrière.

Personne.

Puis tu remarques une vieille cassette.

THE LAST CALL

Une inscription :

« ÉCOUTE-MOI À 00:17. »`,
choices:[
{text:"📼 Prendre la cassette",next:"take_cassette",item:"Cassette The Last Call"},
{text:"🚫 La laisser",next:"leave_cassette"}
]},

what_wants:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:47",speaker:"VOIX INCONNUE",
text:`— Qu'est-ce que vous voulez ?

« Que tu arrives vivant. »

— Où ?

« Au Last Call. »

— Pourquoi ?

Silence.

« Parce que je n'ai pas réussi. »

La communication se coupe.`,
choices:[
{text:"🏨 Aller au Last Call",next:"hotel_road"},
{text:"🚗 Fuir la zone",next:"leave_route"}
]},

look_back:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:47",speaker:"NARRATEUR",
text:`Tu te retournes.

Le siège arrière est vide.

La vitre est couverte de buée.

Quelqu'un vient d'y écrire :

« ARRÊTE-TOI. »

Devant toi, une voiture est arrêtée au milieu de la route.

Ses feux sont allumés.

La porte conducteur est ouverte.

Personne autour.`,
choices:[
{text:"🚗 S'arrêter",next:"stopped_car",clue:"Voiture abandonnée"},
{text:"🏎️ Contourner la voiture",next:"pass_car"}
]},

lock_doors:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:48",speaker:"NARRATEUR",
text:`Tu verrouilles les portes.

Tu accélères.

Puis une main apparaît sur la vitre arrière.

Tu ne vois personne.

La main disparaît.

Ton téléphone affiche :

00:17

La route devant toi devient complètement noire.`,
choices:[
{text:"📞 Répondre au téléphone",next:"call_yourself"},
{text:"🚗 Continuer",next:"hotel_road"}
]},

screenshot:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:46",speaker:"NARRATEUR",
text:`Tu fais une capture d'écran.

Dans le reflet de ton écran...

une personne est assise derrière toi.

Tu te retournes.

Personne.

Lorsque tu regardes à nouveau l'écran...

la photo a disparu.`,
choices:[
{text:"📱 Vérifier la galerie",next:"gallery"},
{text:"🚗 Ne plus regarder",next:"hotel_road"}
]},

call_yourself:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:58",speaker:"TA VOIX",
text:`Tu décroches.

Tu entends ta propre respiration.

Puis ta propre voix :

« Ne va pas au Last Call. »

La voix semble terrifiée.

« Quand tu arriveras à 00:17... ne réponds surtout pas. »

La communication s'arrête.`,
choices:[
{text:"📞 Rappeler",next:"call_back"},
{text:"🚗 Continuer",next:"hotel_road"}
]},

refuse_yourself:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:59",speaker:"NARRATEUR",
text:`Tu refuses l'appel.

Ton téléphone s'éteint.

Une seconde plus tard, toutes les lumières de la voiture s'éteignent également.

Le moteur tourne toujours.

Dans le noir, quelqu'un murmure :

« Mauvaise réponse. »`,
choices:[
{text:"🔦 Chercher une lampe",next:"find_light"},
{text:"🚗 Sortir de la voiture",next:"exit_car"}
]},

hotel_parking:{
chapter:"PROLOGUE",location:"LAST CALL HOTEL",time:"00:02",speaker:"NARRATEUR",
text:`Tu entres sur le parking.

Le moteur s'arrête.

Les portes se verrouillent toutes seules.

Une lumière s'allume au dernier étage.

Puis une deuxième.

Puis une troisième.

Toutes forment une ligne.

Comme si quelqu'un te montrait un chemin.`,
choices:[
{text:"🏨 Sortir de la voiture",next:"hotel_entrance"},
{text:"🔒 Rester dans la voiture",next:"stay_car"},
{text:"📞 Appeler les secours",next:"call_help"}
]},

hotel_entrance:{
chapter:"PROLOGUE",location:"LAST CALL HOTEL",time:"00:07",speaker:"NARRATEUR",
text:`Tu entres dans le hall.

L'hôtel est silencieux.

Le comptoir est couvert de poussière.

Pourtant, une clé t'attend au milieu.

CHAMBRE 17.

Une vieille radio s'allume toute seule.

Une voix murmure :

« Le premier appel est déjà passé. »

Puis...

trois coups résonnent dans l'hôtel.`,
choices:[
{text:"🔑 Prendre la clé",next:"chapter1_start",item:"Clé de la chambre 17"},
{text:"📻 Écouter la radio",next:"radio_message",clue:"La radio"},
{text:"🚪 Quitter immédiatement l'hôtel",next:"prologue_leave"}
]},

pass_hotel:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"00:03",speaker:"NARRATEUR",
text:`Tu passes devant l'hôtel.

Tu ne ralentis pas.

Quelques secondes plus tard, le téléphone sonne.

Un message apparaît :

« TU AS OUBLIÉ DE REGARDER LA CHAMBRE 17. »`,
choices:[
{text:"🚗 Continuer",next:"chapter1_start"},
{text:"🔄 Faire demi-tour",next:"hotel_road"}
]},

/* =========================================================
   SCÈNES COMPLÉMENTAIRES
========================================================= */

call_back:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"00:01",speaker:"VOIX INCONNUE",
text:`Tu rappelles le numéro.

Une seule sonnerie.

Puis une voix répond :

« Tu n'aurais jamais dû rappeler. »

La ligne coupe.

Au loin, une enseigne apparaît :

LAST CALL HOTEL.`,
choices:[{text:"🏨 Aller à l'hôtel",next:"hotel_road"}]},

leave_route:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:58",speaker:"NARRATEUR",
text:`Tu quittes la Route 47.

Tu prends une autre direction.

Pendant quelques secondes, tout semble normal.

Puis ton GPS affiche :

« DESTINATION : LAST CALL HOTEL »

Tu n'as pourtant jamais indiqué cette destination.`,
choices:[{text:"🚗 Continuer",next:"hotel_road"}]},

keep_photo:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:47",speaker:"NARRATEUR",
text:`Tu gardes la photo.

Quelques secondes plus tard, la silhouette sur l'image semble avoir avancé.

Tu verrouilles ton téléphone.

Quand tu le rallumes...

la photo montre maintenant le siège arrière de ta voiture.`,
choices:[{text:"🚗 Continuer",next:"hotel_road"}]},

delete_photo:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:47",speaker:"NARRATEUR",
text:`Tu supprimes la photo.

L'écran devient noir.

Puis une nouvelle image apparaît.

Cette fois, elle montre l'entrée du Last Call Hotel.

Tu comprends que quelqu'un t'attend.`,
choices:[{text:"🏨 Aller à l'hôtel",next:"hotel_road"}]},

answer_again:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:52",speaker:"VOIX INCONNUE",
text:`Tu réponds.

Une voix murmure :

« Tu tournes en rond depuis le début. »

— Qui êtes-vous ?

« Quelqu'un qui a déjà essayé de sortir. »

Puis la ligne coupe.`,
choices:[{text:"🏨 Aller au Last Call",next:"hotel_road"}]},

loop_road:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"00:01",speaker:"NARRATEUR",
text:`Tu continues.

La route disparaît progressivement dans le brouillard.

Puis tu aperçois une enseigne :

LAST CALL HOTEL.

Tu comprends que tu es revenu au même endroit.`,
choices:[{text:"🏨 Entrer sur le parking",next:"hotel_parking"}]},

take_cassette:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:55",speaker:"NARRATEUR",
text:`Tu prends la cassette.

Une petite lumière rouge s'allume sur le lecteur.

00:17.

Tu n'as pourtant encore rien lancé.

Une voix sort du lecteur :

« Si tu écoutes ceci... c'est que tu as déjà reçu l'appel. »`,
choices:[{text:"🏨 Continuer vers le Last Call",next:"hotel_road"}]},

leave_cassette:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:55",speaker:"NARRATEUR",
text:`Tu laisses la cassette sur le siège.

Lorsque tu regardes à nouveau...

elle n'est plus là.

Ton téléphone affiche :

00:17.`,
choices:[{text:"🏨 Aller au Last Call",next:"hotel_road"}]},

stopped_car:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:50",speaker:"NARRATEUR",
text:`Tu t'arrêtes.

La voiture abandonnée est vide.

Sur le siège conducteur, un téléphone sonne.

L'écran affiche ton propre numéro.`,
choices:[
{text:"📞 Répondre",next:"call_yourself"},
{text:"🚗 Repartir",next:"hotel_road"}
]},

pass_car:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:50",speaker:"NARRATEUR",
text:`Tu contournes la voiture.

Dans le rétroviseur, elle disparaît.

Quelques secondes plus tard, tu aperçois les lumières du Last Call Hotel.`,
choices:[{text:"🏨 Continuer",next:"hotel_road"}]},

gallery:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"23:47",speaker:"NARRATEUR",
text:`Tu ouvres la galerie.

La capture n'existe plus.

À la place, une nouvelle photo apparaît.

Elle montre l'hôtel.

Et sur la fenêtre de la chambre 17...

quelqu'un te regarde.`,
choices:[{text:"🏨 Aller au Last Call",next:"hotel_road"}]},

find_light:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"00:00",speaker:"NARRATEUR",
text:`Tu cherches une lampe.

Tes doigts trouvent quelque chose sous le siège.

Une vieille clé.

Lorsque tu rallumes ton téléphone, l'écran affiche :

CHAMBRE 17.`,
choices:[{text:"🏨 Suivre l'indication",next:"hotel_road"}]},

exit_car:{
chapter:"PROLOGUE",location:"ROUTE 47",time:"00:01",speaker:"NARRATEUR",
text:`Tu sors de la voiture.

La pluie s'est arrêtée.

Derrière toi, le moteur continue de tourner.

Devant toi, une enseigne lumineuse apparaît dans le brouillard.

LAST CALL HOTEL.`,
choices:[{text:"🏨 Avancer",next:"hotel_road"}]},

stay_car:{
chapter:"PROLOGUE",location:"LAST CALL HOTEL",time:"00:04",speaker:"NARRATEUR",
text:`Tu refuses de sortir.

Les minutes passent.

Puis quelqu'un frappe doucement à ta vitre.

TOC.
TOC.
TOC.

Une voix murmure :

« Chambre 17. »`,
choices:[{text:"🏨 Sortir",next:"hotel_entrance"}]},

call_help:{
chapter:"PROLOGUE",location:"LAST CALL HOTEL",time:"00:04",speaker:"NARRATEUR",
text:`Tu appelles les secours.

Aucune tonalité.

Puis quelqu'un décroche.

« Nous savons où tu es. »

La ligne coupe.

Les portes de la voiture s'ouvrent.`,
choices:[{text:"🏨 Entrer dans l'hôtel",next:"hotel_entrance"}]},

radio_message:{
chapter:"PROLOGUE",location:"LAST CALL HOTEL",time:"00:08",speaker:"RADIO",
text:`La radio grésille.

Une voix d'homme murmure :

« Si tu entends cette cassette, ne monte pas au troisième étage. »

Silence.

Puis trois coups.

La radio s'éteint.`,
choices:[{text:"🔑 Prendre la clé de la chambre 17",next:"chapter1_start",item:"Clé de la chambre 17"}]},

prologue_leave:{
chapter:"PROLOGUE",location:"LAST CALL HOTEL",time:"00:09",speaker:"NARRATEUR",
text:`Tu quittes l'hôtel.

Tu rejoins ta voiture.

Le moteur démarre immédiatement.

Tu regardes dans le rétroviseur.

L'hôtel est toujours là.

Mais toutes ses fenêtres sont maintenant éclairées.

Une seule porte est ouverte :

CHAMBRE 17.`,
choices:[{text:"🚗 Repartir",next:"chapter1_start"}]}

});

Cette version est volontairement compactée : beaucoup moins de lignes inutiles, mais les scènes restent structurées de la même manière avec "chapter", "location", "time", "speaker", "text" et "choices".

Important : mets bien ce fichier à la racine de ton dépôt sous le nom "prologue.js", puisque ton "game.html" charge actuellement "prologue.js" directement.
