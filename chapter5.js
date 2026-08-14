"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

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

« Tout ce que tu as vu depuis Blackwood était une seule et même histoire. »`,
choices:[
{text:"📞 Demander la vérité",next:"truth"},
{text:"🔇 Raccrocher",next:"silence"},
{text:"🔥 Détruire le téléphone",next:"destroy"}
]
},

truth:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:20",
speaker:"TA VOIX",
text:`« Blackwood n'était pas le début.

Le Last Call n'est pas la fin.

Ce sont des portes.

Et toi...

tu es la personne capable de les ouvrir. »

Un silence.

« Mais quelqu'un doit rester derrière. »`,
choices:[
{text:"❓ Demander qui doit rester",next:"choice_guardian"},
{text:"🚪 Chercher une sortie",next:"escape"},
{text:"📞 Continuer l'appel",next:"final_truth"}
]
},

choice_guardian:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"LAST CALL HOTEL",
time:"03:24",
speaker:"TA VOIX",
text:`Tu retournes dans l'hôtel.

Le hall est vide.

Quinze téléphones sont posés devant toi.

Tous affichent ton nom.

Une dernière voix murmure :

« Choisis. »`,
choices:[
{text:"🔒 Rester et devenir le gardien",next:"ending_guardian",end:"guardian"},
{text:"🔥 Détruire les téléphones",next:"ending_destroy",end:"destroy"},
{text:"🚪 Quitter l'hôtel",next:"ending_escape",end:"escape"}
]
},

escape:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:31",
speaker:"NARRATEUR",
text:`Tu démarres la voiture.

L'hôtel disparaît derrière toi.

La route devient normale.

Tu continues pendant plusieurs kilomètres.

Puis ton téléphone s'allume.

APPEL ENTRANT — BLACKWOOD.

Tu souris nerveusement.

Tu comprends que le phénomène n'est pas terminé.`,
choices:[
{text:"📞 Répondre",next:"ending_watched",end:"watched"},
{text:"🔇 Éteindre le téléphone",next:"ending_escape",end:"escape"}
]
},

silence:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:28",
speaker:"NARRATEUR",
text:`Tu raccroches.

Le téléphone s'éteint.

La route devient silencieuse.

Pendant quelques secondes, tu crois être libre.

Puis...

TOC.

TOC.

TOC.

Quelqu'un frappe à la vitre arrière.`,
choices:[
{text:"👀 Regarder",next:"ending_watched",end:"watched"},
{text:"🚗 Continuer",next:"ending_loop",end:"loop"}
]
},

destroy:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"ROUTE 47",
time:"03:30",
speaker:"NARRATEUR",
text:`Tu écrases le téléphone.

L'écran se brise.

Toutes les lumières autour de toi s'éteignent.

Puis les téléphones de l'hôtel cessent de sonner.

Pour la première fois...

plus aucun appel.

Tu crois avoir gagné.

Mais un dernier message apparaît sur l'écran brisé :

« UN APPEL RESTE. »`,
choices:[
{text:"📱 Lire le message",next:"ending_memory",end:"memory_end"},
{text:"🚗 Partir sans regarder",next:"ending_escape",end:"escape"}
]
},

final_truth:{
chapter:"CHAPITRE 5 — LE DERNIER APPEL",
location:"LAST CALL HOTEL",
time:"03:35",
speaker:"TA VOIX",
text:`« Tu veux vraiment savoir ? »

Les lumières s'allument.

Tu vois des dizaines de portes.

Derrière chacune...

une autre version de toi.

Certaines ont disparu.

Certaines sont encore enfermées.

Et toutes attendent la même chose.

Quelqu'un pour prendre leur place.`,
choices:[
{text:"🪞 Chercher ton double",next:"ending_other",end:"mirror_end"},
{text:"🚪 Refuser et partir",next:"ending_secret",end:"secret_escape"},
{text:"🔒 Prendre leur place",next:"ending_guardian",end:"guardian"}
]
},

ending_guardian:{
chapter:"FIN",
location:"LAST CALL HOTEL",
time:"03:41",
speaker:"NARRATEUR",
text:`Tu restes.

Les téléphones se taisent.

Les portes se ferment.

Tu comprends enfin ton rôle.

Chaque fois qu'une personne reçoit un appel...

tu seras là.

À attendre.

À prévenir.

À choisir.

Le Last Call a trouvé son nouveau gardien.`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"guardian"}
]
},

ending_destroy:{
chapter:"FIN",
location:"LAST CALL HOTEL",
time:"03:43",
speaker:"NARRATEUR",
text:`Tu détruis le dernier téléphone.

Une lumière blanche envahit l'hôtel.

Les voix disparaissent.

Les portes s'ouvrent.

Tu cours dehors.

Derrière toi, le Last Call s'effondre.

Pour la première fois depuis Blackwood...

le silence est réel.`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"destroy"}
]
},

ending_escape:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:02",
speaker:"NARRATEUR",
text:`Tu quittes définitivement la ville.

Le soleil commence à se lever.

Tu regardes ton téléphone.

Aucun réseau.

Aucun appel.

Rien.

Puis une notification apparaît.

« BLACKWOOD — APPEL ENTRANT. »`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"escape"}
]
},

ending_watched:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:07",
speaker:"NARRATEUR",
text:`Tu regardes dans le rétroviseur.

Personne.

Tu regardes à nouveau.

Une silhouette est assise derrière toi.

Elle sourit.

Ton téléphone affiche :

« ILS TE REGARDENT. »`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"watched"}
]
},

ending_loop:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:17",
speaker:"NARRATEUR",
text:`Tu continues.

Puis tu aperçois une enseigne.

LAST CALL HOTEL.

Tu freines.

Tu comprends.

La route t'a ramené au début.`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"loop"}
]
},

ending_memory:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:20",
speaker:"NARRATEUR",
text:`Tu rentres chez toi.

Tu poses ton téléphone.

Tu t'allonges.

Puis tu réalises quelque chose.

Tu ne te souviens plus de Blackwood.

Ni du Last Call.

Ni de cette nuit.

Ton téléphone sonne.

Tu ne sais pas pourquoi...

mais tu connais déjà le numéro.`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"memory_end"}
]
},

ending_other:{
chapter:"FIN",
location:"MIROIR",
time:"04:25",
speaker:"NARRATEUR",
text:`Ton reflet te regarde.

Il sourit.

Puis il sort du miroir.

Toi, tu restes prisonnier derrière la vitre.

Le monde extérieur continue normalement.

Personne ne remarque la différence.

Ton reflet vient de prendre ta place.`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"mirror_end"}
]
},

ending_secret:{
chapter:"FIN",
location:"ROUTE 47",
time:"04:30",
speaker:"NARRATEUR",
text:`Tu refuses.

Tu quittes l'hôtel.

Tu ne réponds plus jamais aux appels.

Tu ne retournes jamais à Blackwood.

Mais une question reste dans ta tête.

Pourquoi toi ?

Tu sais que tu n'as découvert qu'une partie de la vérité.`,
choices:[
{text:"🎬 Voir la fin",next:"ending_done",end:"secret_escape"}
]
},

ending_done:{
chapter:"FIN",
location:"ÉCRAN NOIR",
time:"",
speaker:"NARRATEUR",
text:`Écran noir.

Un téléphone sonne.

Une fois.

Silence.

Deux fois.

Puis une voix murmure :

« Vous avez trouvé le premier. »

Une respiration.

« Maintenant...

trouvez le deuxième. »

ÉCRAN NOIR.`,
choices:[]
}

});
