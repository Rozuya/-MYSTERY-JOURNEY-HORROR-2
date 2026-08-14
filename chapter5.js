"use strict";

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter5_start:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:17",
speaker:"NARRATEUR",
text:`Le téléphone sonne encore.

Tu regardes l'écran.

APPEL ENTRANT — DERNIER APPEL.

Tu sais que cette fois, il n'y aura pas de deuxième chance.

Tu décroches.

Une voix répond.

La tienne.

« Tout ce que tu as vu depuis Blackwood était une seule et même histoire. »

Un silence.

Puis :

« Il est temps de choisir comment elle se termine. »`,
choices:[
{text:"📞 Demander la vérité",next:"truth"},
{text:"🔇 Raccrocher",next:"silence_path"},
{text:"📱 Répondre à l'appel",next:"answer_path"}
]
},


/* =========================================================
   CHEMIN — LA VÉRITÉ
========================================================= */

truth:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"LAST CALL HOTEL",
time:"03:20",
speaker:"TA VOIX",
text:`« Blackwood n'était pas le début.

Le Last Call n'est pas la fin.

Ce sont des portes.

Et toi...

tu es la personne capable de les ouvrir.

Mais derrière chaque porte se trouve une version différente de ton histoire. »`,
choices:[
{text:"🩸 Chercher toute la vérité",next:"truth_final"},
{text:"🏨 Retourner dans l'hôtel",next:"hotel_path"},
{text:"🪞 Chercher ton autre version",next:"other_path"}
]
},


truth_final:{
chapter:"CHAPITRE 5 — LA VÉRITÉ",
location:"ARCHIVES",
time:"03:24",
speaker:"NARRATEUR",
text:`Tu avances dans les archives.

Les dossiers racontent tout.

Blackwood.

Le Last Call.

Les appels.

Les survivants.

Puis tu trouves ton propre dossier.

Une seule phrase est inscrite sur la dernière page :

« LE SUJET EST LE DERNIER À SAVOIR. »

Tu comprends enfin.

Tu n'étais pas choisi pour arrêter le phénomène.

Tu étais choisi pour devenir sa prochaine victime.

Mais une autre phrase apparaît :

« À MOINS QU'IL NE DÉCOUVRE LA VÉRITÉ. »`,
choices:[
{text:"🩸 Accepter la vérité",next:"ending_truth",end:"truth"},
{text:"📼 Rechercher l'enregistrement original",next:"ending_cassette",end:"cassette"},
{text:"🚪 Quitter les archives",next:"ending_after_blackwood",end:"after_blackwood"}
]
},


/* =========================================================
   CHEMIN — RACCROCHER
========================================================= */

silence_path:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:28",
speaker:"NARRATEUR",
text:`Tu raccroches.

Le téléphone s'éteint.

Pendant quelques secondes, tout semble normal.

Puis les lumières de la route disparaissent une par une.

Ton téléphone se rallume.

Aucun réseau.

Aucun message.

Pourtant, une notification apparaît :

« TU AS CHOISI LE SILENCE. »`,
choices:[
{text:"🔇 Ne plus répondre",next:"ending_silence",end:"silence"},
{text:"🚗 Continuer vers la ville",next:"offline_path"},
{text:"🏨 Retourner au Last Call",next:"hotel_path"}
]
},


/* =========================================================
   CHEMIN — RÉPONDRE
========================================================= */

answer_path:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:30",
speaker:"TA VOIX",
text:`« Tu as répondu.

C'est tout ce qu'il fallait.

Maintenant écoute attentivement.

Ne raccroche pas.

Ne regarde pas derrière toi.

Et surtout...

ne prononce jamais ton propre nom. »`,
choices:[
{text:"📞 Continuer l'appel",next:"ending_answer",end:"answer"},
{text:"👀 Regarder derrière toi",next:"ending_nobody",end:"nobody"},
{text:"🔇 Raccrocher",next:"ending_new_cycle",end:"new_cycle"}
]
},


/* =========================================================
   CHEMIN — L'HÔTEL
========================================================= */

hotel_path:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"LAST CALL HOTEL",
time:"03:34",
speaker:"NARRATEUR",
text:`Tu retournes dans le Last Call.

Les portes sont toutes ouvertes.

Le hall est exactement comme lorsque tu es arrivé.

Sauf qu'il y a maintenant quinze téléphones sur le comptoir.

Tous sonnent.

Sur le mur, une phrase est apparue :

« UNE SEULE PORTE MÈNE À LA SORTIE. »`,
choices:[
{text:"🏨 Rester dans l'hôtel",next:"ending_hotel",end:"hotel"},
{text:"🚪 Chercher la porte de sortie",next:"offline_path"},
{text:"📞 Décrocher l'un des téléphones",next:"answer_path"}
]
},


/* =========================================================
   CHEMIN — L'AUTRE
========================================================= */

other_path:{
chapter:"CHAPITRE 5 — L'AUTRE",
location:"MIROIR",
time:"03:38",
speaker:"NARRATEUR",
text:`Tu entres dans une pièce entièrement recouverte de miroirs.

Au centre se trouve ton reflet.

Mais il n'imite plus tes mouvements.

Il te regarde.

« Tu voulais comprendre qui j'étais ? »

Il sourit.

« Je suis celui qui a continué après Blackwood. »`,
choices:[
{text:"🪞 T'approcher du reflet",next:"ending_other",end:"other"},
{text:"🪞 Détruire le miroir",next:"ending_mirror",end:"mirror"},
{text:"🚪 Partir sans le regarder",next:"offline_path"}
]
},


/* =========================================================
   CHEMIN — HORS RÉSEAU
========================================================= */

offline_path:{
chapter:"CHAPITRE 5 — HORS RÉSEAU",
location:"ROUTE 47",
time:"03:42",
speaker:"NARRATEUR",
text:`Tu quittes enfin le Last Call.

Tu conduis pendant plusieurs kilomètres.

La ville disparaît derrière toi.

Puis ton téléphone affiche :

AUCUN RÉSEAU.

Tu continues.

Pour la première fois depuis Blackwood, tu crois réellement être libre.

Mais quelque chose apparaît dans ton rétroviseur.`,
choices:[
{text:"🚗 Continuer sans regarder",next:"ending_offline",end:"offline"},
{text:"👀 Regarder le rétroviseur",next:"ending_last_survivor",end:"last_survivor"},
{text:"📞 Vérifier ton téléphone",next:"ending_tomorrow",end:"tomorrow"}
]
},


/* =========================================================
   FIN — LE DERNIER APPEL
========================================================= */

ending_last_call:{
chapter:"FIN",
location:"LAST CALL HOTEL",
time:"03:47",
speaker:"NARRATEUR",
text:`Tu décroches le dernier téléphone.

La voix de l'autre côté est calme.

« Tu voulais savoir pourquoi tous ces endroits existent. »

Tu ne réponds pas.

« Ils existent parce que quelqu'un doit toujours recevoir l'appel. »

Tu comprends.

Le dernier appel n'était pas destiné à quelqu'un d'autre.

Il était destiné à toi.

L'écran devient noir.

FIN — LE DERNIER APPEL.`,
choices:[]
},


/* =========================================================
   FIN — DÉCROCHE
========================================================= */

ending_answer:{
chapter:"FIN",
location:"ROUTE 47",
time:"03:49",
speaker:"TA VOIX",
text:`Tu gardes le téléphone contre ton oreille.

La voix murmure :

« Maintenant tu sais.

Mais savoir ne signifie pas pouvoir partir. »

La communication coupe.

Ton téléphone affiche un nouveau contact.

TON PROPRE NOM.

Tu comprends que quelqu'un attend déjà ton prochain appel.

FIN — DÉCROCHE.`,
choices:[]
},


/* =========================================================
   FIN — SILENCE
========================================================= */

ending_silence:{
chapter:"FIN",
location:"ROUTE 47",
time:"03:51",
speaker:"NARRATEUR",
text:`Tu refuses de répondre.

Tu continues à conduire.

Les appels cessent.

Le silence revient.

Pourtant, quelque chose reste avec toi.

Tu ne sais pas quoi.

Mais tu sais une chose :

tu ne décrocheras plus jamais.

FIN — SILENCE.`,
choices:[]
},


/* =========================================================
   FIN — L'HÔTEL
========================================================= */

ending_hotel:{
chapter:"FIN",
location:"LAST CALL HOTEL",
time:"03:55",
speaker:"NARRATEUR",
text:`Tu restes dans le Last Call.

Les portes se ferment une par une.

Les fenêtres disparaissent.

Le hall devient plus petit.

Puis tu comprends.

L'hôtel n'est plus un bâtiment.

Il est devenu ton monde.

Un téléphone sonne derrière le comptoir.

Tu te retournes.

FIN — L'HÔTEL.`,
choices:[]
},


/* =========================================================
   FIN — LE NOUVEAU CYCLE
========================================================= */

ending_new_cycle:{
chapter:"FIN",
location:"ROUTE 47",
time:"03:58",
speaker:"NARRATEUR",
text:`Tu raccroches.

Le monde devient noir.

Puis tu ouvres les yeux.

Tu es de nouveau devant Blackwood.

La même pluie.

La même route.

La même heure.

Ton téléphone sonne.

Tu comprends.

Tout recommence.

FIN — LE NOUVEAU CYCLE.`,
choices:[]
},


/* =========================================================
   FIN — L'AUTRE
========================================================= */

ending_other:{
chapter:"FIN",
location:"MIROIR",
time:"04:01",
speaker:"NARRATEUR",
text:`Ton reflet sourit.

Puis il sort du miroir.

Tu essaies de bouger.

Impossible.

Ton reflet prend ta place.

Dehors, personne ne remarque la différence.

Lui continue ta vie.

Toi...

tu restes derrière la vitre.

FIN — L'AUTRE.`,
choices:[]
},


/* =========================================================
   FIN — LE REFLET
========================================================= */

ending_mirror:{
chapter:"FIN",
location:"MIROIR",
time:"04:04",
speaker:"NARRATEUR",
text:`Tu frappes le miroir.

Une fissure apparaît.

Puis une deuxième.

Le miroir explose.

Ton reflet disparaît.

Pendant quelques secondes, tu crois avoir gagné.

Puis un morceau de verre au sol bouge.

Ton reflet est toujours là.

Il te regarde depuis l'autre côté.

FIN — LE REFLET.`,
choices:[]
},


/* =========================================================
   FIN — HORS RÉSEAU
========================================================= */

ending_offline:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:09",
speaker:"NARRATEUR",
text:`Tu continues de rouler.

La ville disparaît complètement.

Plus de réseau.

Plus d'appels.

Plus de Blackwood.

Tu arrives enfin chez toi.

Tu poses ton téléphone.

Une dernière notification apparaît :

« HORS RÉSEAU. »

Puis l'écran s'éteint.

FIN — HORS RÉSEAU.`,
choices:[]
},


/* =========================================================
   FIN — LA CASSETTE
========================================================= */

ending_cassette:{
chapter:"FIN",
location:"ARCHIVES",
time:"04:13",
speaker:"VOIX ENREGISTRÉE",
text:`Tu retrouves l'enregistrement original.

La bande commence.

Une voix murmure :

« Blackwood n'était pas le premier.

Et le Last Call ne sera pas le dernier.

Il y aura toujours une porte.

Toujours un appel.

Toujours quelqu'un pour écouter. »

La cassette s'arrête.

Tu comprends que l'histoire ne se termine pas ici.

FIN — LA CASSETTE.`,
choices:[]
},


/* =========================================================
   FIN — APRÈS BLACKWOOD
========================================================= */

ending_after_blackwood:{
chapter:"FIN",
location:"ARCHIVES",
time:"04:17",
speaker:"NARRATEUR",
text:`Tu regardes tous les dossiers.

Blackwood.

Le Last Call.

D'autres maisons.

D'autres hôtels.

D'autres survivants.

Tu comprends enfin.

Blackwood n'était qu'un endroit parmi des centaines.

Et quelque part...

un autre téléphone vient de sonner.

FIN — APRÈS BLACKWOOD.`,
choices:[]
},


/* =========================================================
   FIN — LE DERNIER SURVIVANT
========================================================= */

ending_last_survivor:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:21",
speaker:"NARRATEUR",
text:`Tu regardes dans le rétroviseur.

La silhouette est toujours là.

Tu t'arrêtes.

La porte arrière s'ouvre.

Une personne descend.

Tu la reconnais.

Un survivant de Blackwood.

Il te regarde et murmure :

« Tu n'aurais jamais dû revenir. »

Puis il disparaît dans la nuit.

FIN — LE DERNIER SURVIVANT.`,
choices:[]
},


/* =========================================================
   FIN — LA CHAMBRE 17
========================================================= */

ending_room17:{
chapter:"FIN",
location:"CHAMBRE 17",
time:"04:25",
speaker:"NARRATEUR",
text:`Tu ouvres la porte de la chambre 17.

La pièce est vide.

Sur le lit repose une photographie.

C'est toi.

Debout devant la chambre.

Mais la photo a été prise demain.

Au dos, une phrase :

« TU ES DÉJÀ VENU ICI. »

FIN — LA CHAMBRE 17.`,
choices:[]
},


/* =========================================================
   FIN — DEMAIN
========================================================= */

ending_tomorrow:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:29",
speaker:"NARRATEUR",
text:`Tu regardes ton téléphone.

Une vidéo apparaît.

Tu la lances.

C'est toi.

Tu es assis dans la même voiture.

Tu regardes la caméra.

Puis tu dis :

« Si tu regardes cette vidéo...

c'est que tu n'as pas encore compris. »

La vidéo date de demain.

FIN — DEMAIN.`,
choices:[]
},


/* =========================================================
   FIN — PERSONNE NE RÉPOND
========================================================= */

ending_nobody:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:33",
speaker:"NARRATEUR",
text:`Tu regardes derrière toi.

Personne.

Tu regardes ton téléphone.

L'appel est toujours actif.

Mais personne ne parle.

Tu dis :

« Allô ? »

Silence.

Puis quelqu'un frappe à la vitre.

TOC.

TOC.

TOC.

Tu te retournes.

Personne.

Ton téléphone affiche :

« PERSONNE NE RÉPOND. »

FIN — PERSONNE NE RÉPOND.`,
choices:[]
},


/* =========================================================
   FIN — LA VÉRITÉ
========================================================= */

ending_truth:{
chapter:"FIN",
location:"ARCHIVES",
time:"04:37",
speaker:"NARRATEUR",
text:`Tu comprends enfin.

Le phénomène ne cherche pas à te tuer.

Il cherche quelqu'un capable de prendre ta place.

Blackwood.

Le Last Call.

Les appels.

Tout était destiné à te conduire ici.

Tu refermes ton dossier.

Sur la dernière page apparaît une phrase :

« MAINTENANT, TU SAIS. »

Le téléphone sonne.

FIN — LA VÉRITÉ.`,
choices:[]
}

});
