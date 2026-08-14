"use strict";

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter2_start:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:18",
speaker:"NARRATEUR",
text:`Le téléphone du comptoir continue de sonner.

Tu décroches.

Une respiration.

Puis une voix.

« Tu n'aurais pas dû venir. »

Tu reconnais immédiatement cette voix.

C'est celle qui t'avait appelé avant ton arrivée.`,
choices:[
{text:"📞 Demander qui parle",next:"voice_identity",clue:"La voix inconnue"},
{text:"📞 Demander pourquoi elle t'a attiré ici",next:"voice_reason"},
{text:"🔇 Raccrocher",next:"voice_hangup"}
]
},

voice_identity:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:19",
speaker:"VOIX INCONNUE",
text:`— Qui êtes-vous ?

Un long silence.

« Quelqu'un qui a essayé de te prévenir. »

— De quoi ?

La voix tremble.

« De ce qui se trouve sous l'hôtel. »

Puis elle ajoute :

« Va dans la chambre 17. Tu y trouveras une cassette. »

La communication coupe.`,
choices:[
{text:"🏨 Aller à la chambre 17",next:"room17"},
{text:"📞 Rappeler",next:"voice_reason"}
]
},

voice_reason:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:20",
speaker:"VOIX INCONNUE",
text:`— Pourquoi m'avoir fait venir ?

« Parce que Blackwood n'était que le commencement. »

Tu restes silencieux.

« Tu dois comprendre ce qui t'est arrivé. »

— Qu'est-ce que Blackwood a à voir avec cet endroit ?

La voix répond :

« Tout. »

Puis la ligne se coupe.`,
choices:[
{text:"🏨 Aller à la chambre 17",next:"room17",clue:"Blackwood et le Last Call"},
{text:"🚪 Quitter l'hôtel",next:"leave_hotel"}
]
},

voice_hangup:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:21",
speaker:"NARRATEUR",
text:`Tu raccroches.

Le téléphone se remet immédiatement à sonner.

Tu ne réponds pas.

Il sonne encore.

Puis s'arrête.

Sur l'écran apparaît un seul message :

« CHAMBRE 17. »`,
choices:[
{text:"🏨 Monter à la chambre 17",next:"room17"},
{text:"🚪 Quitter l'hôtel",next:"leave_hotel"}
]
},

room17:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"CHAMBRE 17",
time:"00:27",
speaker:"NARRATEUR",
text:`Tu arrives devant la chambre 17.

La porte est déjà ouverte.

À l'intérieur, tout est couvert de poussière.

Une vieille cassette repose sur le lit.

Sur l'étiquette :

BLACKWOOD — ENREGISTREMENT 01

Tu la prends.

Un vieux lecteur est posé sur la table.

Il fonctionne encore.

Tu appuies sur PLAY.

Une voix commence à parler.

« Si quelqu'un écoute cet enregistrement, c'est que le Last Call a recommencé. »

Tu reconnais la voix.

C'est la tienne.`,
choices:[
{text:"📼 Continuer l'enregistrement",next:"cassette"},
{text:"📻 Éteindre le lecteur",next:"cassette_stop",clue:"Cassette Blackwood"}
]
},

cassette:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"CHAMBRE 17",
time:"00:31",
speaker:"ENREGISTREMENT",
text:`« Blackwood n'était pas unique.

Il existe plusieurs endroits connectés.

Les appels servent à attirer certaines personnes.

Et lorsque la personne arrive...

une autre version d'elle-même apparaît. »

La cassette grésille.

Puis ta voix murmure :

« Si tu entends ça, ne descends surtout pas au sous-sol. »`,
choices:[
{text:"⬇️ Aller au sous-sol",next:"basement_door",clue:"Le sous-sol"},
{text:"🚪 Quitter la chambre",next:"hotel_corridor"},
{text:"📼 Écouter la suite",next:"cassette_end"}
]
},

cassette_stop:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"CHAMBRE 17",
time:"00:32",
speaker:"NARRATEUR",
text:`Tu éteins le lecteur.

Le silence revient.

Puis quelqu'un frappe à la porte.

TOC.

TOC.

TOC.

Tu ne bouges pas.

Une voix derrière la porte murmure :

« Tu aurais dû écouter jusqu'au bout. »`,
choices:[
{text:"🚪 Ouvrir",next:"open_door"},
{text:"🔒 Rester dans la chambre",next:"stay_room"}
]
},

cassette_end:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"CHAMBRE 17",
time:"00:34",
speaker:"ENREGISTREMENT",
text:`La cassette continue.

« Si tu es arrivé jusqu'ici, tu as déjà changé l'histoire.

Le dossier qui porte ton nom existe.

Tu dois le trouver.

Il se trouve dans les archives. »

La cassette s'arrête.

Dans le couloir, un téléphone sonne.`,
choices:[
{text:"📞 Suivre la sonnerie",next:"hotel_corridor"},
{text:"📁 Chercher les archives",next:"archives"}
]
},

hotel_corridor:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:37",
speaker:"NARRATEUR",
text:`Tu sors de la chambre.

Le couloir semble différent.

Les murs sont plus longs.

Les portes ont changé de numéro.

Puis tu entends une sonnerie.

Elle vient du bout du couloir.

Tu avances.

Une porte porte désormais une inscription :

ARCHIVES.`,
choices:[
{text:"📁 Entrer dans les archives",next:"archives"},
{text:"📞 Suivre une autre sonnerie",next:"phone_room"}
]
},

archives:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"ARCHIVES",
time:"00:41",
speaker:"NARRATEUR",
text:`Les archives sont immenses.

Des centaines de dossiers remplissent les étagères.

Tu en ouvres plusieurs.

Tous parlent de personnes disparues.

Tous avaient reçu un appel.

Puis tu trouves un dossier récent.

Ton nom est écrit dessus.

La photographie à l'intérieur te glace.

Elle montre ton arrivée devant l'hôtel.

La date indique :

DEMAIN.`,
choices:[
{text:"📁 Lire le dossier",next:"file_read",clue:"Ton dossier"},
{text:"🚪 Quitter les archives",next:"phone_room"}
]
},

file_read:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"ARCHIVES",
time:"00:44",
speaker:"NARRATEUR",
text:`Le dossier contient une seule phrase :

« SUJET : SURVIVANT DE BLACKWOOD. »

Une deuxième page apparaît derrière.

« Le sujet ne doit pas atteindre le sous-sol. »

Puis une dernière ligne :

« Il a déjà rencontré l'autre. »

Le téléphone sonne derrière toi.`,
choices:[
{text:"📞 Répondre",next:"second_voice"},
{text:"🚪 Fuir les archives",next:"phone_room"}
]
},

second_voice:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"ARCHIVES",
time:"00:46",
speaker:"TA VOIX",
text:`Tu décroches.

Tu entends ta propre respiration.

Puis ta voix :

« Ne leur fais pas confiance. »

— Qui sont-ils ?

Silence.

« Ceux qui surveillent les appels. »

— Et toi ?

La réponse arrive :

« Moi, je suis celui qui n'a pas réussi à sortir. »

La communication coupe.`,
choices:[
{text:"📞 Rappeler",next:"phone_room"},
{text:"⬇️ Chercher le sous-sol",next:"basement_door",clue:"Une autre version de toi"}
]
},

phone_room:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:49",
speaker:"NARRATEUR",
text:`Tu suis la sonnerie.

Elle s'arrête devant une porte.

Tu l'ouvres.

La pièce est vide.

Au centre se trouve seulement un téléphone.

Il sonne.

Sur son écran :

APPEL ENTRANT — TOI.`,
choices:[
{text:"📞 Répondre",next:"second_voice"},
{text:"🔇 Détruire le téléphone",next:"destroy_phone",item:"Téléphone du Last Call"}
]
},

destroy_phone:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"LAST CALL HOTEL",
time:"00:51",
speaker:"NARRATEUR",
text:`Tu écrases le téléphone.

Le silence tombe.

Puis tous les téléphones de l'hôtel se mettent à sonner en même temps.

Des dizaines.

Peut-être des centaines.

Une porte s'ouvre lentement derrière toi.

Un escalier descend dans l'obscurité.

Sous-sol.`,
choices:[
{text:"⬇️ Descendre",next:"basement_door"},
{text:"🏃 Fuir",next:"leave_hotel"}
]
},

basement_door:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"SOUS-SOL",
time:"00:55",
speaker:"NARRATEUR",
text:`Tu arrives devant l'escalier.

La cassette t'avait prévenu.

Ne descends pas.

Mais quelque chose t'appelle depuis l'obscurité.

Une voix.

Ta voix.

« Viens. »

Tu poses la main sur la rampe.

Puis les lumières s'allument une par une.

En bas, des dizaines de téléphones attendent.`,
choices:[
{text:"⬇️ Descendre",next:"chapter2_end",clue:"La salle des téléphones"},
{text:"🚪 Remonter",next:"leave_hotel"}
]
},

open_door:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"CHAMBRE 17",
time:"00:35",
speaker:"NARRATEUR",
text:`Tu ouvres.

Personne.

Mais dans le couloir, une silhouette disparaît derrière un angle.

Tu la suis.

Elle laisse tomber quelque chose.

Une clé.

Sur la clé :

SOUS-SOL.`,
choices:[
{text:"🔑 Prendre la clé",next:"basement_door",item:"Clé du sous-sol"},
{text:"🚪 Retourner dans la chambre",next:"stay_room"}
]
},

stay_room:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"CHAMBRE 17",
time:"00:36",
speaker:"NARRATEUR",
text:`Tu verrouilles la porte.

Quelques secondes passent.

Puis ton téléphone affiche une vidéo.

La vidéo montre exactement la chambre dans laquelle tu te trouves.

Mais la vidéo a été filmée demain.

Une silhouette entre dans la pièce.

Elle se retourne vers la caméra.

C'est toi.`,
choices:[
{text:"📱 Regarder jusqu'à la fin",next:"chapter2_end"},
{text:"🚪 Sortir",next:"hotel_corridor"}
]
},

leave_hotel:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"DEVANT LE LAST CALL",
time:"01:02",
speaker:"NARRATEUR",
text:`Tu quittes l'hôtel.

Tu marches jusqu'à ta voiture.

Tu démarres.

Pendant quelques secondes, tout semble normal.

Puis ton téléphone s'allume.

Un message :

« TU N'AS PAS ENCORE RENCONTRÉ L'AUTRE. »

Tu regardes dans le rétroviseur.

Le siège arrière est occupé.

Par toi.`,
choices:[
{text:"👁️ Regarder derrière",next:"chapter2_end"},
{text:"🚗 Démarrer immédiatement",next:"chapter2_end"}
]
},

chapter2_end:{
chapter:"CHAPITRE 2 — LA VOIX",
location:"SOUS-SOL DU LAST CALL",
time:"01:07",
speaker:"NARRATEUR",
text:`Tu descends.

La salle est immense.

Des centaines de téléphones sont reliés aux murs.

Certains sonnent.

D'autres diffusent des voix.

Puis tu entends une conversation que tu reconnais.

Une conversation de Blackwood.

La voix de ton autre toi résonne dans la pièce :

« Maintenant que tu es là...

le vrai jeu peut commencer. »

Toutes les lumières s'éteignent.

Un seul téléphone reste allumé.

CHAPITRE 3 — LES DISPARUS.`,
choices:[
{text:"📞 Décrocher",next:"chapter3_start"},
{text:"➡️ Continuer",next:"chapter3_start"}
]
}

});
