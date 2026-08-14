"use strict";

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter3_start:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"SOUS-SOL DU LAST CALL",
time:"01:08",
speaker:"NARRATEUR",
text:`Le téléphone reste allumé dans l'obscurité.

Tu décroches.

Une voix tremblante répond.

« Enfin... quelqu'un a répondu. »

— Qui êtes-vous ?

« Je suis ici depuis tellement longtemps... »

La voix s'arrête.

« Cherche les dossiers. Tu comprendras. »`,
choices:[
{text:"📁 Chercher les dossiers",next:"files"},
{text:"📞 Demander qui parle",next:"survivor_voice"},
{text:"🚪 Remonter",next:"stairs"}
]
},

files:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES SOUTERRAINES",
time:"01:14",
speaker:"NARRATEUR",
text:`Tu avances entre les étagères.

Des centaines de dossiers.

Chaque nom correspond à une personne disparue.

Toutes ont reçu un appel.

Toutes sont venues ici.

Puis tu trouves un dossier portant un nom familier.

BLACKWOOD.

À l'intérieur, plusieurs photographies.

La maison n°17.

Des téléphones.

Et une photo de toi.`,
choices:[
{text:"📁 Ouvrir le dossier",next:"blackwood_file",clue:"Dossier Blackwood"},
{text:"📷 Examiner la photo",next:"photo_file",clue:"Photo de l'hôtel"}
]
},

blackwood_file:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES SOUTERRAINES",
time:"01:17",
speaker:"NARRATEUR",
text:`Le dossier contient une phrase :

« LE SUJET A SURVÉCU AU PREMIER CONTACT. »

Une autre page indique :

« BLACKWOOD N'ÉTAIT QU'UN POINT D'ACCÈS. »

Tu comprends.

La maison n'était pas le phénomène.

Elle n'était qu'une porte.

Derrière toi, un dossier tombe au sol.

Il porte ton nom.`,
choices:[
{text:"📁 Ouvrir ton dossier",next:"your_file",clue:"Ton dossier"},
{text:"🚪 Partir",next:"archive_exit"}
]
},

photo_file:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES SOUTERRAINES",
time:"01:19",
speaker:"NARRATEUR",
text:`Tu prends la photographie.

Elle montre l'hôtel.

Puis tu remarques quelque chose.

Une silhouette se tient derrière la fenêtre de la chambre 17.

Tu retournes la photo.

Une date est inscrite :

DEMAIN.

Puis une phrase :

« IL TE REGARDE DEPUIS LE DÉBUT. »`,
choices:[
{text:"👁️ Chercher la silhouette",next:"archive_exit"},
{text:"📁 Continuer les recherches",next:"your_file"}
]
},

your_file:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES SOUTERRAINES",
time:"01:22",
speaker:"NARRATEUR",
text:`Tu ouvres le dossier.

Une photographie de toi.

Une autre de Blackwood.

Puis une dernière photographie.

Elle montre quelqu'un qui te ressemble parfaitement.

Sous la photo :

« AUTRE VERSION — ÉCHEC N°17 »

Tu comprends enfin.

Tu n'es pas le premier.

Tu n'es même peut-être pas le premier toi.`,
choices:[
{text:"📄 Lire la dernière page",next:"last_page",clue:"Échec numéro 17"},
{text:"📞 Appeler ton autre toi",next:"call_other"}
]
},

last_page:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES SOUTERRAINES",
time:"01:25",
speaker:"NARRATEUR",
text:`La dernière page ne contient qu'une phrase :

« LE SUJET DOIT ATTEINDRE LE DERNIER APPEL. »

En dessous :

« NE LUI FAIS PAS CONFIANCE. »

Tu ne sais plus qui croire.

Un téléphone sonne derrière toi.

Puis une voix prononce ton prénom.`,
choices:[
{text:"📞 Répondre",next:"survivor_voice"},
{text:"🏃 Fuir",next:"archive_exit"}
]
},

survivor_voice:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES SOUTERRAINES",
time:"01:27",
speaker:"VOIX INCONNUE",
text:`— Qui êtes-vous ?

La voix répond :

« Quelqu'un qui a survécu. »

— Depuis combien de temps êtes-vous ici ?

Silence.

« Je ne sais plus. »

— Comment sortir ?

La voix murmure :

« Trouve-moi. »

La ligne coupe.`,
choices:[
{text:"🔎 Chercher la voix",next:"survivor"},
{text:"🚪 Remonter",next:"stairs"}
]
},

survivor:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"COULOIR SOUTERRAIN",
time:"01:32",
speaker:"NARRATEUR",
text:`Tu suis les indications.

Un couloir étroit.

Puis une porte métallique.

Derrière, quelqu'un frappe.

Trois coups.

Tu ouvres.

Une personne est assise dans une petite pièce.

Elle te regarde.

Elle semble épuisée.

« Pourquoi tu es revenu ? »`,
choices:[
{text:"❓ Demander qui elle est",next:"survivor_identity"},
{text:"🚪 La faire sortir",next:"free_survivor"},
{text:"🔒 Ne pas lui faire confiance",next:"leave_survivor"}
]
},

survivor_identity:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"PIÈCE SOUTERRAINE",
time:"01:34",
speaker:"SURVIVANT",
text:`« Je m'appelle Elias. »

Il baisse les yeux.

« J'ai reçu le même appel que toi. »

— Depuis combien de temps ?

« Onze ans. »

Tu recules.

Il n'a pas vieilli.

« Le Last Call ne laisse pas les gens partir comme avant. »`,
choices:[
{text:"🕯️ Lui faire confiance",next:"free_survivor",clue:"Elias"},
{text:"🚪 Partir seul",next:"leave_survivor"}
]
},

free_survivor:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"COULOIR SOUTERRAIN",
time:"01:38",
speaker:"NARRATEUR",
text:`Tu aides Elias à se relever.

Vous avancez ensemble.

Mais au bout du couloir, tous les téléphones sonnent.

Elias s'arrête.

« Ils savent que je suis sorti. »

Les lumières s'allument.

Une silhouette apparaît au bout du couloir.

Elle vous ressemble.`,
choices:[
{text:"🏃 Courir",next:"escape_corridor"},
{text:"👁️ Observer la silhouette",next:"other_appears"}
]
},

leave_survivor:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"COULOIR SOUTERRAIN",
time:"01:40",
speaker:"NARRATEUR",
text:`Tu laisses Elias derrière toi.

Tu remontes seul.

Au moment de fermer la porte, il murmure :

« Tu regretteras de ne pas m'avoir cru. »

Le téléphone dans ta poche sonne.

L'écran affiche :

ELIAS.`,
choices:[
{text:"📞 Répondre",next:"elias_call"},
{text:"🔇 Ignorer",next:"stairs"}
]
},

elias_call:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ESCALIER",
time:"01:42",
speaker:"ELIAS",
text:`« Écoute-moi.

Ne va pas dans la salle des miroirs.

Ton autre toi t'y attend. »

La ligne coupe.

Une porte s'ouvre devant toi.

Derrière :

un miroir immense.`,
choices:[
{text:"🪞 Entrer",next:"mirror_room"},
{text:"🚪 Faire demi-tour",next:"stairs"}
]
},

other_appears:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"COULOIR SOUTERRAIN",
time:"01:43",
speaker:"NARRATEUR",
text:`La silhouette avance.

Même visage.

Même vêtements.

Même voix.

« Tu aurais dû écouter Elias. »

Tu demandes :

— Qui es-tu ?

Il sourit.

« Celui qui a vécu ce qui va t'arriver. »`,
choices:[
{text:"📞 Lui parler",next:"other_talk"},
{text:"🏃 Fuir",next:"escape_corridor"}
]
},

other_talk:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"COULOIR SOUTERRAIN",
time:"01:45",
speaker:"AUTRE TOI",
text:`« Le Last Call veut que tu répondes au dernier appel.

Si tu le fais, le cycle continuera.

Si tu refuses...

quelqu'un devra prendre ta place. »

— Qui ?

Il te regarde.

« Moi. »

Puis il disparaît.`,
choices:[
{text:"🪞 Suivre sa trace",next:"mirror_room"},
{text:"🏃 Fuir l'hôtel",next:"escape_corridor"}
]
},

escape_corridor:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"LAST CALL HOTEL",
time:"01:49",
speaker:"NARRATEUR",
text:`Tu remontes les escaliers.

La porte principale est juste devant toi.

Tu l'ouvres.

Mais derrière la porte...

tu retrouves le même couloir.

Tu recommences.

Encore.

Encore.

Le Last Call ne te laisse pas sortir.`,
choices:[
{text:"🔄 Continuer",next:"loop_hotel"},
{text:"🪞 Chercher le miroir",next:"mirror_room"}
]
},

loop_hotel:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"LAST CALL HOTEL",
time:"01:55",
speaker:"NARRATEUR",
text:`Tu marches pendant plusieurs minutes.

Chaque porte ramène au même endroit.

Puis un téléphone sonne.

Une voix dit :

« Il est temps de choisir. »

Toutes les portes s'ouvrent en même temps.

Une seule porte porte un numéro :

17.`,
choices:[
{text:"🚪 Entrer dans la chambre 17",next:"mirror_room"},
{text:"📞 Répondre au téléphone",next:"last_call"}
]
},

mirror_room:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"SALLE DES MIROIRS",
time:"02:00",
speaker:"NARRATEUR",
text:`La pièce est remplie de miroirs.

Dans chacun, tu vois une version différente de toi.

Certaines sont mortes.

Certaines fuient.

Certaines te regardent simplement.

Puis tous les reflets se tournent vers toi.

Un seul téléphone se trouve au centre.

Il sonne.

L'écran indique :

DERNIER APPEL.`,
choices:[
{text:"📞 Répondre",next:"last_call",clue:"Le dernier appel"},
{text:"🪞 Briser le miroir",next:"mirror_break"}
]
},

mirror_break:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"SALLE DES MIROIRS",
time:"02:03",
speaker:"NARRATEUR",
text:`Tu frappes le miroir.

Il se brise.

Tous les autres miroirs se fissurent en même temps.

Mais ton reflet reste debout.

Il te regarde.

Puis il sourit.

Le téléphone sonne une dernière fois.`,
choices:[
{text:"📞 Décrocher",next:"last_call"},
{text:"🚪 Quitter la salle",next:"chapter3_end"}
]
},

last_call:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"SALLE DES MIROIRS",
time:"02:07",
speaker:"TA VOIX",
text:`Tu décroches.

Ta propre voix murmure :

« Tu veux savoir pourquoi tu as survécu à Blackwood ? »

Tu ne réponds pas.

« Parce que tu n'étais pas censé survivre. »

Un silence.

« Maintenant, tu dois découvrir pourquoi. »

La communication coupe.

Le téléphone affiche :

CHAPITRE 4 — L'AUTRE.`,
choices:[
{text:"➡️ Continuer",next:"chapter4_start"}
]
},

stairs:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ESCALIER",
time:"02:08",
speaker:"NARRATEUR",
text:`Tu remontes.

Derrière toi, les téléphones continuent de sonner.

Tu arrives dans le hall.

Mais quelqu'un t'attend à la réception.

Ton visage.

Ton sourire.

Ta voix.

« Enfin. »`,
choices:[
{text:"👁️ T'approcher",next:"other_talk"},
{text:"🏃 Fuir",next:"chapter3_end"}
]
},

archive_exit:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"ARCHIVES",
time:"02:10",
speaker:"NARRATEUR",
text:`Tu quittes les archives.

Le téléphone de la réception sonne.

Tu sais déjà que quelqu'un attend au bout du fil.

Une voix murmure :

« Tu as trouvé les disparus.

Maintenant, tu dois trouver l'autre. »

CHAPITRE 4 — L'AUTRE.`,
choices:[
{text:"➡️ Continuer",next:"chapter4_start"}
]
},

chapter3_end:{
chapter:"CHAPITRE 3 — LES DISPARUS",
location:"LAST CALL HOTEL",
time:"02:12",
speaker:"NARRATEUR",
text:`Tu quittes la salle.

Derrière toi, un dernier téléphone sonne.

Tu ne te retournes pas.

Une voix murmure :

« À bientôt. »

Les lumières s'éteignent.

CHAPITRE 4 — L'AUTRE.`,
choices:[
{text:"➡️ Continuer",next:"chapter4_start"}
]
}

});
