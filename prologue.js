"use strict";

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

start:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:41",
speaker:"NARRATEUR",
text:`Quelques mois ont passé depuis Blackwood.

Tu essaies de vivre normalement.

Tu ne parles plus de cette nuit.

Personne ne te croirait.

Puis ton téléphone sonne.

NUMÉRO INCONNU.

Tu décroches.

Silence.

Une respiration.

Puis une voix murmure :

« Tu m'entends ? »`,
choices:[
{text:"📞 Répondre",next:"call"},
{text:"🔇 Ignorer",next:"ignore"},
{text:"📱 Regarder le numéro",next:"number"}
]},

call:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:42",
speaker:"VOIX INCONNUE",
text:`— Qui êtes-vous ?

Un long silence.

Puis :

« Ne retourne jamais à Blackwood. »

Tu te figes.

La voix reprend :

« Tu n'aurais jamais dû survivre. »

La communication coupe.

Quelques secondes plus tard, une vidéo arrive sur ton téléphone.

Un hôtel abandonné.

Une porte.

CHAMBRE 17.

La vidéo est datée de demain.`,
choices:[
{text:"▶ Regarder la vidéo",next:"video",clue:"Vidéo mystérieuse"},
{text:"📞 Rappeler",next:"recall"},
{text:"🗑️ Supprimer",next:"delete"}
]},

ignore:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:43",
speaker:"NARRATEUR",
text:`Tu laisses sonner.

L'appel s'arrête.

Puis ton téléphone vibre.

Un message.

« TU AURAIS DÛ RÉPONDRE. »

Une vidéo apparaît immédiatement.

Elle montre un hôtel abandonné.

THE LAST CALL HOTEL.

À la fin de la vidéo :

CHAMBRE 17.

La date indique demain.`,
choices:[
{text:"▶ Ouvrir la vidéo",next:"video",clue:"Vidéo mystérieuse"},
{text:"🗑️ Supprimer le message",next:"delete"},
{text:"📱 Garder le téléphone",next:"number"}
]},

number:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:44",
speaker:"NARRATEUR",
text:`Tu regardes le numéro.

Il n'y en a aucun.

L'écran affiche seulement :

APPEL INCONNU.

Puis une nouvelle notification apparaît.

Une photo.

Tu l'ouvres.

C'est une photographie de toi.

Devant un hôtel que tu n'as jamais visité.

Au dos de la photo :

« SI TU VEUX SAVOIR, VIENS SEUL. »`,
choices:[
{text:"📷 Examiner la photo",next:"photo",clue:"Photo de l'hôtel"},
{text:"📞 Rappeler",next:"recall"},
{text:"🗑️ Supprimer",next:"delete"}
]},

video:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:46",
speaker:"NARRATEUR",
text:`La vidéo montre une ville plongée dans la nuit.

La caméra avance lentement.

Puis apparaît un hôtel abandonné.

THE LAST CALL HOTEL.

La caméra s'arrête devant une porte.

CHAMBRE 17.

Tu regardes la date.

DEMAIN.

La vidéo se termine.

Ton téléphone affiche une nouvelle adresse.

Tu reconnais immédiatement la route.

Elle mène hors de la ville.`,
choices:[
{text:"🏨 Aller à l'hôtel",next:"go_hotel",clue:"Last Call Hotel"},
{text:"📞 Rappeler la voix",next:"recall"},
{text:"🚫 Ne pas y aller",next:"stay_home"}
]},

recall:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:47",
speaker:"VOIX INCONNUE",
text:`Tu rappelles.

Une sonnerie.

Deux.

Puis quelqu'un décroche.

Tu n'entends aucune voix.

Seulement ta propre respiration.

Puis une phrase :

« Si tu veux connaître la vérité sur Blackwood... viens au Last Call. »

— Pourquoi moi ?

La réponse tombe :

« Parce que tu es déjà impliqué. »

La ligne coupe.`,
choices:[
{text:"🏨 Aller au Last Call",next:"go_hotel",clue:"La vérité sur Blackwood"},
{text:"🚫 Refuser",next:"stay_home"},
{text:"📞 Rappeler encore",next:"recall_again"}
]},

recall_again:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:48",
speaker:"TA VOIX",
text:`Tu rappelles.

Cette fois quelqu'un répond immédiatement.

C'est ta voix.

« Ne viens pas. »

Tu restes silencieux.

« Je sais ce qui va arriver. »

Puis la voix murmure :

« J'ai déjà vécu cette nuit. »

La communication coupe.`,
choices:[
{text:"🏨 Aller quand même",next:"go_hotel"},
{text:"🚫 Rester chez toi",next:"stay_home"},
{text:"📱 Attendre un autre appel",next:"last_call"}
]},

delete:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:49",
speaker:"NARRATEUR",
text:`Tu supprimes tout.

La vidéo.

La photo.

Le message.

L'écran devient noir.

Puis le téléphone se rallume.

Un seul texte apparaît :

« TU NE PEUX PAS SUPPRIMER CE QUI EST DÉJÀ ARRIVÉ. »

Une adresse apparaît.

THE LAST CALL HOTEL.`,
choices:[
{text:"🏨 Aller à l'hôtel",next:"go_hotel"},
{text:"🚫 Éteindre le téléphone",next:"stay_home"},
{text:"📱 Photographier l'écran",next:"screen",clue:"Message impossible"}
]},

photo:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:50",
speaker:"NARRATEUR",
text:`Tu examines la photographie.

L'hôtel semble abandonné.

Mais une fenêtre est éclairée.

Tu zoomes.

Une silhouette se tient derrière la vitre.

Elle te ressemble.

Tu regardes à nouveau.

La silhouette a disparu.

Au dos de la photo apparaît une nouvelle phrase :

« DEMAIN, TU COMPRENDRAS. »`,
choices:[
{text:"🏨 Aller au Last Call",next:"go_hotel"},
{text:"🔥 Détruire la photo",next:"destroy_photo"},
{text:"📷 Garder la photo",next:"keep_photo",clue:"Silhouette"}
]},

screen:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:51",
speaker:"NARRATEUR",
text:`Tu photographies l'écran.

Le flash éclaire la pièce.

Sur la photo prise...

quelqu'un apparaît derrière toi.

Tu te retournes.

Personne.

Tu regardes l'écran.

La personne est toujours là.`,
choices:[
{text:"👀 Regarder derrière toi",next:"look"},
{text:"🏨 Quitter la maison",next:"go_hotel"},
{text:"📱 Garder la photo",next:"keep_photo"}
]},

look:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:52",
speaker:"NARRATEUR",
text:`Tu te retournes.

Personne.

Mais ton téléphone sonne.

Une dernière fois.

Tu décroches.

Ta propre voix murmure :

« Maintenant, tu peux commencer. »`,
choices:[
{text:"📞 Écouter",next:"last_call"},
{text:"🔇 Raccrocher",next:"go_hotel"}
]},

last_call:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:53",
speaker:"TA VOIX",
text:`« Écoute-moi.

Le Last Call n'est pas un hôtel ordinaire.

Tu trouveras une clé.

Tu trouveras une cassette.

Et surtout...

ne fais confiance à personne.

Même pas à moi. »

La ligne coupe.

Pour la première fois depuis Blackwood...

tu sais que quelqu'un t'attend.`,
choices:[
{text:"🏨 Partir pour le Last Call",next:"go_hotel",clue:"Le dernier appel"},
{text:"🚫 Refuser",next:"stay_home"}
]},

keep_photo:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:54",
speaker:"NARRATEUR",
text:`Tu gardes la photographie.

Tu la poses sur la table.

Quelques secondes passent.

Puis une nouvelle phrase apparaît au dos.

« TU ES DÉJÀ VENU. »

Tu relèves la tête.

Ton téléphone affiche une adresse.

Le Last Call Hotel.

Tu prends tes clés.`,
choices:[
{text:"🏨 Partir",next:"go_hotel"},
{text:"🚫 Rester",next:"stay_home"}
]},

destroy_photo:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:55",
speaker:"NARRATEUR",
text:`Tu déchires la photographie.

Les morceaux tombent au sol.

Puis ton téléphone sonne.

Un message :

« Mauvaise décision. »

Une nouvelle photographie apparaît.

Elle montre l'hôtel.

Cette fois, tu es devant la porte.

Tu n'y es pourtant jamais allé.`,
choices:[
{text:"🏨 Aller au Last Call",next:"go_hotel"},
{text:"📱 Garder le téléphone",next:"keep_phone"}
]},

keep_phone:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"22:56",
speaker:"NARRATEUR",
text:`Tu gardes ton téléphone.

L'écran devient noir.

Puis une dernière phrase apparaît :

« À DEMAIN. »

Tu comprends que rester chez toi ne changera rien.`,
choices:[
{text:"🏨 Partir",next:"go_hotel"}
]},

stay_home:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"23:00",
speaker:"NARRATEUR",
text:`Tu décides de ne pas y aller.

Tu éteins toutes les lumières.

Tu poses ton téléphone.

Le silence revient.

Puis...

TOC.

Un coup à la porte.

TOC.

Deuxième coup.

TOC.

Troisième coup.

Ton téléphone s'allume.

Un message :

« TU AS OUBLIÉ LA CHAMBRE 17. »`,
choices:[
{text:"🚪 Ouvrir la porte",next:"door"},
{text:"📱 Regarder le message",next:"message"},
{text:"🏨 Aller finalement à l'hôtel",next:"go_hotel"}
]},

door:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"23:01",
speaker:"NARRATEUR",
text:`Tu ouvres la porte.

Personne.

Seulement une enveloppe posée au sol.

À l'intérieur :

une clé.

Sur la clé :

17.

Une adresse est écrite sur une feuille.

THE LAST CALL HOTEL.`,
choices:[
{text:"🔑 Prendre la clé",next:"go_hotel",item:"Clé 17"},
{text:"🚫 Laisser la clé",next:"go_hotel"}
]},

message:{
chapter:"PROLOGUE",
location:"CHEZ TOI",
time:"23:02",
speaker:"NARRATEUR",
text:`Tu regardes le message.

« IL EST TROP TARD. »

Un second message apparaît.

« VIENS. »

Puis une adresse.

Tu prends tes clés.

Tu sais déjà où elle mène.`,
choices:[
{text:"🏨 Aller au Last Call",next:"go_hotel",clue:"Adresse du Last Call"}
]},

go_hotel:{
chapter:"PROLOGUE",
location:"ROUTE",
time:"23:41",
speaker:"NARRATEUR",
text:`La route est presque déserte.

La pluie tombe depuis plusieurs minutes.

Tu conduis seul.

Au loin, une enseigne apparaît.

THE LAST CALL HOTEL.

Ton téléphone affiche soudain :

00:17.

L'horloge de la voiture indique pourtant 23:41.

Puis ton téléphone sonne.

Une dernière fois.

Tu décroches.

Une voix murmure :

« Bienvenue. »`,
choices:[
{text:"📞 Répondre",next:"hotel_call"},
{text:"🔇 Refuser",next:"hotel"},
{text:"🚗 Continuer",next:"hotel"}
]},

hotel_call:{
chapter:"PROLOGUE",
location:"ROUTE",
time:"23:42",
speaker:"TA VOIX",
text:`Tu décroches.

C'est ta propre voix.

« Entre dans l'hôtel.

Trouve la chambre 17.

Et prends la cassette.

Elle contient la vérité. »

Tu demandes :

— Qui es-tu ?

La réponse :

« Celui que tu deviendras. »`,
choices:[
{text:"🏨 Entrer dans l'hôtel",next:"hotel"},
{text:"🚗 Faire demi-tour",next:"hotel"}
]},

hotel:{
chapter:"PROLOGUE",
location:"LAST CALL HOTEL",
time:"23:47",
speaker:"NARRATEUR",
text:`Tu entres dans le parking.

Le moteur s'arrête.

Toutes les lumières du bâtiment s'allument une par une.

Une seule fenêtre reste noire.

La chambre 17.

Tu sors de la voiture.

Les portes se verrouillent derrière toi.

Devant l'entrée...

un vieux téléphone sonne.`,
choices:[
{text:"🏨 Entrer",next:"chapter1_start",clue:"Entrée du Last Call"},
{text:"📞 Répondre au téléphone",next:"chapter1_start"},
{text:"🚗 Retourner à la voiture",next:"chapter1_start"}
]},

chapter1_start:{
chapter:"CHAPITRE 1",
location:"LAST CALL HOTEL",
time:"00:00",
speaker:"NARRATEUR",
text:`Tu franchis les portes du Last Call.

L'hôtel est silencieux.

Derrière le comptoir repose une vieille clé.

CHAMBRE 17.

À côté...

une cassette portant une inscription :

BLACKWOOD — ENREGISTREMENT 01.

Tu comprends que cette nuit ne fait que commencer.`,
choices:[
{text:"➡️ Continuer",next:"chapter1_start"}
]}

});
