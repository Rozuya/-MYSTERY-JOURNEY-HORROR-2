"use strict";

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter1_start:{
chapter:"CHAPITRE 1",
location:"LAST CALL HOTEL",
time:"00:00",
speaker:"NARRATEUR",
text:`Tu franchis les portes du Last Call.

L'air est froid.

Le hall semble abandonné depuis des années.

Pourtant, derrière le comptoir, une vieille lampe fonctionne encore.

Sur le bureau :

une clé.

CHAMBRE 17.

À côté se trouve une cassette.

BLACKWOOD — ENREGISTREMENT 01.

Puis le téléphone de la réception sonne.`,
choices:[
{text:"🔑 Prendre la clé",next:"take_key",item:"Clé chambre 17"},
{text:"📼 Prendre la cassette",next:"take_tape",item:"Cassette Blackwood"},
{text:"📞 Répondre au téléphone",next:"reception_call",clue:"Téléphone du hall"}
]},

take_key:{
chapter:"CHAPITRE 1",
location:"RÉCEPTION",
time:"00:02",
speaker:"NARRATEUR",
text:`Tu prends la clé.

Elle est glaciale.

Au dos du porte-clés :

17.

Le téléphone cesse soudain de sonner.

Puis l'ascenseur s'allume.

Étage 1.

Les portes s'ouvrent.

Personne à l'intérieur.`,
choices:[
{text:"⬆️ Prendre l'ascenseur",next:"elevator"},
{text:"📼 Prendre aussi la cassette",next:"take_tape",item:"Cassette Blackwood"},
{text:"🚶 Monter par les escaliers",next:"stairs"}
]},

take_tape:{
chapter:"CHAPITRE 1",
location:"RÉCEPTION",
time:"00:03",
speaker:"NARRATEUR",
text:`Tu prends la cassette.

Une inscription est gravée sur le plastique :

BLACKWOOD — ENREGISTREMENT 01.

Tu n'as aucun lecteur.

Pourtant...

la cassette se met à jouer toute seule.

Une voix murmure :

« Si tu écoutes ceci, c'est que tu as trouvé le Last Call. »

La voix s'arrête.

Puis :

« Ne fais confiance à personne. »`,
choices:[
{text:"🔊 Continuer l'enregistrement",next:"tape_end",clue:"Enregistrement Blackwood"},
{text:"⬆️ Chercher la chambre 17",next:"elevator"},
{text:"📞 Répondre au téléphone",next:"reception_call"}
]},

tape_end:{
chapter:"CHAPITRE 1",
location:"RÉCEPTION",
time:"00:05",
speaker:"VOIX ENREGISTRÉE",
text:`La cassette reprend.

« Blackwood n'était pas le premier endroit.

Et le Last Call ne sera pas le dernier.

Si tu veux comprendre...

trouve les archives.

Mais surtout...

ne regarde jamais ton reflet trop longtemps. »

La bande s'arrête.

Un bruit de pas résonne à l'étage.`,
choices:[
{text:"⬆️ Monter",next:"elevator"},
{text:"🚪 Explorer le hall",next:"lobby"},
{text:"📼 Garder la cassette",next:"lobby",item:"Cassette Blackwood"}
]},

reception_call:{
chapter:"CHAPITRE 1",
location:"RÉCEPTION",
time:"00:06",
speaker:"VOIX INCONNUE",
text:`Tu décroches.

Silence.

Puis une voix :

« Tu as trouvé la clé. »

— Qui êtes-vous ?

« Quelqu'un qui connaît Blackwood. »

— Que voulez-vous ?

Un souffle.

« Trouve la chambre 17.

La vérité est derrière cette porte. »

La communication coupe.`,
choices:[
{text:"🔑 Aller à la chambre 17",next:"elevator",clue:"Chambre 17"},
{text:"📞 Rappeler",next:"call_back"},
{text:"🚶 Explorer le hall",next:"lobby"}
]},

call_back:{
chapter:"CHAPITRE 1",
location:"RÉCEPTION",
time:"00:07",
speaker:"NARRATEUR",
text:`Tu rappelles.

Le téléphone sonne.

Une fois.

Deux fois.

Puis tu entends ta propre voix :

« Pourquoi continues-tu ? »

Tu raccroches immédiatement.

Le téléphone affiche :

APPEL TERMINÉ.

Puis l'ascenseur s'ouvre.`,
choices:[
{text:"⬆️ Entrer dans l'ascenseur",next:"elevator"},
{text:"🚶 Prendre les escaliers",next:"stairs"}
]},

lobby:{
chapter:"CHAPITRE 1",
location:"HALL",
time:"00:09",
speaker:"NARRATEUR",
text:`Tu explores le hall.

Des cadres sont accrochés aux murs.

Des dizaines de photographies.

Des personnes disparues.

Certaines photos sont très anciennes.

Puis tu trouves une photo de Blackwood.

Au centre...

tu reconnais la maison du premier jeu.

Derrière la photo :

« DOSSIER 01 — NON RÉSOLU. »`,
choices:[
{text:"🔎 Examiner les dossiers",next:"archives",clue:"Dossier Blackwood"},
{text:"⬆️ Monter à l'étage",next:"elevator"},
{text:"🚪 Sortir de l'hôtel",next:"hotel_exit"}
]},

stairs:{
chapter:"CHAPITRE 1",
location:"ESCALIERS",
time:"00:11",
speaker:"NARRATEUR",
text:`Tu prends les escaliers.

Un étage.

Deux.

Trois.

Tu continues.

Puis tu réalises quelque chose.

Tu es toujours au premier étage.

Tu redescends.

La réception est vide.

Sur le comptoir, quelqu'un a écrit :

« TU ES DÉJÀ MONTÉ. »`,
choices:[
{text:"⬆️ Reprendre les escaliers",next:"stairs_again"},
{text:"🔎 Chercher la réception",next:"archives"},
{text:"🚪 Quitter l'hôtel",next:"hotel_exit"}
]},

stairs_again:{
chapter:"CHAPITRE 1",
location:"ESCALIERS",
time:"00:13",
speaker:"NARRATEUR",
text:`Tu montes encore.

Cette fois, les marches semblent normales.

Arrivé à l'étage, tu aperçois un long couloir.

Une seule porte est éclairée.

17.

La porte est entrouverte.`,
choices:[
{text:"🚪 Entrer dans la chambre 17",next:"room17"},
{text:"👂 Écouter derrière la porte",next:"listen_room"},
{text:"⬇️ Redescendre",next:"lobby"}
]},

elevator:{
chapter:"CHAPITRE 1",
location:"ASCENSEUR",
time:"00:15",
speaker:"NARRATEUR",
text:`Tu entres dans l'ascenseur.

Les portes se ferment.

Tu appuies sur 1.

L'ascenseur descend.

2...

3...

4...

Puis l'écran affiche :

-1.

Les portes s'ouvrent.

Un couloir sombre se trouve devant toi.

Au fond...

une lumière rouge.`,
choices:[
{text:"🚪 Sortir",next:"basement"},
{text:"🔼 Appuyer sur 1",next:"floor1"},
{text:"🔒 Fermer les portes",next:"elevator_close"}
]},

elevator_close:{
chapter:"CHAPITRE 1",
location:"ASCENSEUR",
time:"00:17",
speaker:"NARRATEUR",
text:`Tu appuies sur le bouton.

Les portes commencent à se fermer.

Une main apparaît entre les deux portes.

Tu recules.

La main disparaît.

L'ascenseur remonte.

Quand les portes s'ouvrent...

tu es devant la chambre 17.`,
choices:[
{text:"🚪 Entrer",next:"room17"},
{text:"🏃 Revenir au hall",next:"lobby"}
]},

floor1:{
chapter:"CHAPITRE 1",
location:"PREMIER ÉTAGE",
time:"00:18",
speaker:"NARRATEUR",
text:`Les portes s'ouvrent.

Le couloir est silencieux.

Toutes les portes sont fermées.

Sauf une.

17.

Une faible lumière vient de l'intérieur.

Tu avances.`,
choices:[
{text:"🚪 Entrer dans la chambre 17",next:"room17"},
{text:"👂 Écouter",next:"listen_room"},
{text:"🚶 Explorer le couloir",next:"hallway"}
]},

hallway:{
chapter:"CHAPITRE 1",
location:"PREMIER ÉTAGE",
time:"00:20",
speaker:"NARRATEUR",
text:`Tu avances dans le couloir.

Les numéros des chambres changent.

15.

16.

18.

Puis 17.

Tu te retournes.

Le couloir derrière toi est devenu beaucoup plus long.

La porte 17 est maintenant ouverte.`,
choices:[
{text:"🚪 Entrer",next:"room17"},
{text:"🏃 Courir vers l'ascenseur",next:"elevator_escape"}
]},

listen_room:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:21",
speaker:"NARRATEUR",
text:`Tu approches ton oreille de la porte.

Quelqu'un respire derrière.

Puis une voix murmure :

« Entre. »

Tu reconnais cette voix.

C'est la tienne.`,
choices:[
{text:"🚪 Entrer",next:"room17"},
{text:"🏃 Fuir",next:"elevator_escape"}
]},

room17:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:23",
speaker:"NARRATEUR",
text:`Tu entres.

La chambre ressemble étrangement à celle de Blackwood.

Même papier peint.

Même odeur.

Même silence.

Sur le lit repose un magnétophone.

À côté :

une cassette.

BLACKWOOD — ENREGISTREMENT 01.

Au mur se trouve une photographie.

C'est toi.

Mais la photo semble avoir été prise demain.`,
choices:[
{text:"📼 Écouter la cassette",next:"recording"},
{text:"📷 Examiner la photographie",next:"future_photo",clue:"Photo du futur"},
{text:"🪞 Regarder le miroir",next:"mirror"}
]},

future_photo:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:25",
speaker:"NARRATEUR",
text:`Tu prends la photographie.

Au dos :

« TU ARRIVERAS JUSQU'ICI. »

Puis une seconde phrase apparaît :

« MAIS TU NE DOIS PAS DESCENDRE. »

Un bruit vient du plafond.

Quelqu'un marche au-dessus de toi.`,
choices:[
{text:"📼 Écouter la cassette",next:"recording"},
{text:"⬆️ Chercher l'étage supérieur",next:"upper_floor"},
{text:"🪞 Regarder le miroir",next:"mirror"}
]},

mirror:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:27",
speaker:"NARRATEUR",
text:`Tu regardes le miroir.

Ton reflet te regarde.

Tu lèves la main.

Il ne bouge pas.

Puis ton reflet sourit.

Toi, tu ne souris pas.

Il pose un doigt sur ses lèvres.

Derrière toi...

quelqu'un frappe à la porte.`,
choices:[
{text:"🚪 Regarder la porte",next:"door17"},
{text:"🪞 Continuer à regarder",next:"mirror_again"},
{text:"🏃 Quitter la chambre",next:"elevator_escape"}
]},

mirror_again:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:29",
speaker:"NARRATEUR",
text:`Ton reflet s'approche du miroir.

Il murmure :

« Tu aurais dû rester à Blackwood. »

Puis le miroir devient noir.

Quand tu regardes à nouveau...

ton reflet a disparu.`,
choices:[
{text:"🚪 Quitter la chambre",next:"door17"},
{text:"📼 Écouter la cassette",next:"recording"}
]},

door17:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:31",
speaker:"NARRATEUR",
text:`Tu ouvres la porte.

Le couloir est vide.

Mais au sol se trouve un dossier.

Ton nom est inscrit dessus.

À l'intérieur :

une photographie de toi.

Une date.

Demain.

Et une phrase :

« IL A SURVÉCU À BLACKWOOD. »`,
choices:[
{text:"📂 Ouvrir le dossier",next:"file",clue:"Dossier personnel"},
{text:"📼 Retourner à la cassette",next:"recording"},
{text:"🏃 Quitter l'étage",next:"elevator_escape"}
]},

file:{
chapter:"CHAPITRE 1",
location:"COULOIR",
time:"00:33",
speaker:"NARRATEUR",
text:`Tu lis le dossier.

Une seule phrase est lisible :

« SUJET : SURVIVANT DE BLACKWOOD. »

Puis :

« PROCHAINE ÉTAPE : SOUS-SOL. »

Tu comprends que quelqu'un t'observe depuis longtemps.`,
choices:[
{text:"⬇️ Chercher le sous-sol",next:"basement",clue:"Le sous-sol"},
{text:"📼 Écouter la cassette",next:"recording"},
{text:"🚪 Quitter l'hôtel",next:"hotel_exit"}
]},

recording:{
chapter:"CHAPITRE 1",
location:"CHAMBRE 17",
time:"00:35",
speaker:"VOIX ENREGISTRÉE",
text:`La cassette commence.

Une voix parle :

« Si tu écoutes ceci, Blackwood est déjà derrière toi.

Mais ce n'était qu'un point.

Il existe d'autres endroits.

D'autres personnes.

D'autres versions de toi.

Le Last Call les relie tous. »

Un bruit parasite.

Puis :

« Descends au sous-sol.

Tu trouveras les archives. »`,
choices:[
{text:"⬇️ Descendre au sous-sol",next:"basement",clue:"Archives du Last Call"},
{text:"🪞 Examiner le miroir",next:"mirror"},
{text:"🚪 Quitter l'hôtel",next:"hotel_exit"}
]},

basement:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:40",
speaker:"NARRATEUR",
text:`Tu descends.

Le sous-sol est immense.

Des centaines de dossiers sont rangés sur des étagères.

Au centre de la pièce...

des téléphones.

Des dizaines.

Certains sonnent.

Puis l'un d'eux affiche ton nom.

APPEL ENTRANT.`,
choices:[
{text:"📞 Répondre",next:"basement_call"},
{text:"📂 Chercher ton dossier",next:"your_file",clue:"Archives"},
{text:"🚪 Remonter",next:"hotel_exit"}
]},

basement_call:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:42",
speaker:"TA VOIX",
text:`Tu décroches.

Ta propre voix :

« Tu as trouvé les archives. »

— Qui es-tu ?

« Je suis toi.

Mais pas celui que tu connais. »

Un silence.

« Et bientôt...

tu comprendras pourquoi Blackwood t'a laissé partir. »`,
choices:[
{text:"📞 Demander pourquoi",next:"why_blackwood"},
{text:"📂 Chercher ton dossier",next:"your_file"},
{text:"🔇 Raccrocher",next:"phone_wall"}
]},

why_blackwood:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:44",
speaker:"TA VOIX",
text:`« Blackwood n'était qu'une porte.

Le Last Call en est une autre.

Et toi...

tu es la clé. »

La communication coupe.

Tous les téléphones du sous-sol se mettent à sonner en même temps.`,
choices:[
{text:"📂 Chercher ton dossier",next:"your_file"},
{text:"🏃 Fuir",next:"basement_escape"}
]},

your_file:{
chapter:"CHAPITRE 1",
location:"ARCHIVES",
time:"00:46",
speaker:"NARRATEUR",
text:`Tu trouves ton dossier.

Il est beaucoup plus épais que les autres.

À l'intérieur :

des photos de Blackwood.

Des photos du Last Call.

Et une dernière photo.

Une pièce remplie de téléphones.

Au dos :

« PROCHAINE PHASE : L'AUTRE. »`,
choices:[
{text:"📂 Continuer à lire",next:"file_truth",clue:"Dossier du survivant"},
{text:"🏃 Quitter les archives",next:"basement_escape"}
]},

file_truth:{
chapter:"CHAPITRE 1",
location:"ARCHIVES",
time:"00:48",
speaker:"NARRATEUR",
text:`Une dernière feuille attire ton attention.

« Le sujet a survécu à Blackwood.

Le phénomène a donc changé de méthode.

Il ne doit plus être éliminé.

Il doit être remplacé. »

Tu entends des pas derrière toi.

Tu te retournes.

Personne.

Mais un téléphone sonne.`,
choices:[
{text:"📞 Répondre",next:"basement_call"},
{text:"🏃 Fuir",next:"basement_escape"}
]},

phone_wall:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:50",
speaker:"NARRATEUR",
text:`Tu raccroches.

Tous les téléphones se taisent.

Puis un seul recommence à sonner.

Tu t'approches.

L'écran affiche :

BLACKWOOD.

Tu décroches.

Une voix murmure :

« Tu n'aurais jamais dû revenir. »`,
choices:[
{text:"📞 Écouter",next:"blackwood_call"},
{text:"🔇 Raccrocher",next:"basement_escape"}
]},

blackwood_call:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:52",
speaker:"VOIX INCONNUE",
text:`« Tu pensais que la maison était la fin.

Elle n'était que le début.

Le Last Call était déjà là.

Et maintenant...

il sait que tu es revenu. »

La ligne coupe.

Toutes les lumières s'éteignent.`,
choices:[
{text:"🔦 Chercher une sortie",next:"basement_escape"},
{text:"📞 Attendre",next:"basement_wait"}
]},

basement_wait:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:54",
speaker:"NARRATEUR",
text:`Tu attends dans le noir.

Un téléphone sonne.

Puis un autre.

Puis tous.

Une voix résonne dans la pièce :

« CHOISIS. »

Une lumière s'allume au fond.

Une porte.

Derrière elle commence quelque chose que tu ne comprends pas encore.`,
choices:[
{text:"🚪 Ouvrir la porte",next:"chapter2_start"}
]},

basement_escape:{
chapter:"CHAPITRE 1",
location:"SOUS-SOL",
time:"00:56",
speaker:"NARRATEUR",
text:`Tu cours.

Les téléphones sonnent derrière toi.

Tu remontes les escaliers.

Quand tu arrives dans le hall...

tout est redevenu silencieux.

Sur le comptoir repose une feuille.

« TU AS TROUVÉ LE PREMIER. »

En dessous :

« MAINTENANT, TROUVE L'AUTRE. »`,
choices:[
{text:"➡️ Continuer",next:"chapter2_start",clue:"L'autre"}
]},

elevator_escape:{
chapter:"CHAPITRE 1",
location:"ASCENSEUR",
time:"00:58",
speaker:"NARRATEUR",
text:`Tu entres dans l'ascenseur.

Les portes se ferment.

Tu appuies sur le rez-de-chaussée.

L'ascenseur descend.

Puis s'arrête.

Une voix résonne :

« CHAPITRE SUIVANT. »`,
choices:[
{text:"➡️ Continuer",next:"chapter2_start"}
]},

hotel_exit:{
chapter:"CHAPITRE 1",
location:"DEVANT LE LAST CALL",
time:"01:00",
speaker:"NARRATEUR",
text:`Tu quittes l'hôtel.

La pluie tombe toujours.

Tu regardes derrière toi.

Le Last Call semble complètement abandonné.

Tu avances.

Ton téléphone vibre.

Un message :

« TU N'AS PAS ENCORE COMPRIS. »

Puis une deuxième ligne :

« L'AUTRE T'ATTEND. »`,
choices:[
{text:"📱 Lire la suite",next:"chapter2_start",clue:"L'autre"},
{text:"🚗 Partir",next:"chapter2_start"}
]},

chapter2_start:{
chapter:"CHAPITRE 2",
location:"ROUTE 47",
time:"01:07",
speaker:"NARRATEUR",
text:`Tu quittes le Last Call.

Mais une chose est certaine.

Blackwood n'était pas un accident.

Et le Last Call n'était pas la fin.

Quelqu'un d'autre existe.

Une autre version de toi.

Et elle sait déjà où tu vas.`,
choices:[
{text:"➡️ Continuer",next:"chapter2_start"}
]}

});
