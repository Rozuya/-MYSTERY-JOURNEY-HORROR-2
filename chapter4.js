"use strict";

window.STORY=window.STORY||{};

Object.assign(window.STORY,{

chapter4_start:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"LAST CALL HOTEL",
time:"02:13",
speaker:"NARRATEUR",
text:`Tu arrives dans le hall.

Quelqu'un est debout devant la réception.

Toi.

Même visage.
Même voix.

Il te regarde sans bouger.

« Tu as enfin compris. »

— Qui es-tu ?

« Celui qui a vécu cette nuit avant toi. »`,
choices:[
{text:"👁️ Lui demander ce qui va arriver",next:"other_future"},
{text:"📞 Lui demander pourquoi il t'appelle",next:"other_call"},
{text:"🏃 Fuir",next:"other_escape"}
]
},

other_future:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"LAST CALL HOTEL",
time:"02:16",
speaker:"AUTRE TOI",
text:`« J'ai essayé de détruire les téléphones.

J'ai essayé de partir.

J'ai même essayé de me tuer.

Rien n'a fonctionné.

À chaque fois...

je revenais ici. »

Il désigne le sous-sol.

« Le Last Call ne veut pas ta mort.

Il veut ta place. »`,
choices:[
{text:"❓ Demander quelle place",next:"guardian"},
{text:"📞 Demander comment arrêter le cycle",next:"cycle_secret"}
]
},

other_call:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"RÉCEPTION",
time:"02:18",
speaker:"AUTRE TOI",
text:`« Les appels permettent aux différentes versions de nous de communiquer.

Blackwood était une porte.

Le Last Call en est une autre.

Mais quelqu'un contrôle les portes. »

— Qui ?

Il baisse la tête.

« Nous. »

Puis tous les téléphones sonnent.`,
choices:[
{text:"📞 Répondre à un téléphone",next:"many_voices"},
{text:"🔇 Les ignorer",next:"silent_hall"}
]
},

guardian:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"RÉCEPTION",
time:"02:21",
speaker:"AUTRE TOI",
text:`« Quelqu'un doit rester ici.

Quelqu'un doit répondre aux appels.

Quelqu'un doit guider les prochains.

C'est pour ça que les survivants disparaissent. »

Il te regarde.

« Et bientôt, ce sera ton tour. »`,
choices:[
{text:"🔥 Refuser et détruire les téléphones",next:"destroy_plan"},
{text:"🔒 Accepter de rester",next:"guardian_end"}
]
},

cycle_secret:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"RÉCEPTION",
time:"02:23",
speaker:"AUTRE TOI",
text:`« Il existe un dernier téléphone.

Celui qui a créé le premier appel.

Si tu réponds...

tu verras la vérité.

Mais après ça, tu ne pourras plus revenir en arrière. »

Il te tend une clé.

CHAMBRE 17.`,
choices:[
{text:"🔑 Prendre la clé",next:"room17_again",item:"Clé de la chambre 17"},
{text:"🚪 Refuser",next:"silent_hall"}
]
},

many_voices:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"RÉCEPTION",
time:"02:25",
speaker:"VOIX MULTIPLES",
text:`Tu décroches.

Des dizaines de voix parlent en même temps.

Certaines pleurent.

Certaines crient.

Une seule voix devient claire.

La tienne.

« Ne crois pas celui qui est devant toi. »

Tu regardes ton double.

Il sourit.

Puis il disparaît.`,
choices:[
{text:"🔎 Le chercher",next:"mirror_hall"},
{text:"📞 Rappeler",next:"last_phone"}
]
},

silent_hall:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"RÉCEPTION",
time:"02:27",
speaker:"NARRATEUR",
text:`Tu ignores les téléphones.

Un à un, ils s'arrêtent.

Le silence revient.

Ton double n'est plus là.

Sur le comptoir se trouve une feuille.

« SI TU VEUX SORTIR, DÉTRUIS LE DERNIER TÉLÉPHONE. »`,
choices:[
{text:"📄 Garder la feuille",next:"destroy_plan",clue:"Le dernier téléphone"},
{text:"🚪 Quitter l'hôtel",next:"exit_hotel"}
]
},

destroy_plan:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"02:31",
speaker:"NARRATEUR",
text:`Tu redescends au sous-sol.

Les téléphones sont toujours là.

Mais un seul est différent.

Il est ancien.

Rouillé.

Une inscription est gravée dessus :

LAST CALL.

Ton double apparaît derrière toi.

« Si tu le détruis, toutes les portes se fermeront.

Mais quelqu'un restera de l'autre côté. »`,
choices:[
{text:"🔥 Détruire le téléphone",next:"destroy_last"},
{text:"📞 Répondre",next:"last_phone"},
{text:"👁️ Faire confiance à ton double",next:"trust_other"}
]
},

room17_again:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"CHAMBRE 17",
time:"02:35",
speaker:"NARRATEUR",
text:`Tu retournes dans la chambre 17.

Le décor ressemble exactement à celui de Blackwood.

Un lit.

Une chaise.

Un miroir.

Et un téléphone.

Le téléphone sonne.

Sur l'écran :

APPEL DE BLACKWOOD.`,
choices:[
{text:"📞 Répondre",next:"blackwood_call"},
{text:"🪞 Regarder le miroir",next:"mirror_hall"}
]
},

mirror_hall:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"CHAMBRE 17",
time:"02:37",
speaker:"NARRATEUR",
text:`Tu regardes le miroir.

Ton reflet ne bouge pas.

Puis il lève lentement la main.

Derrière lui, tu aperçois Blackwood.

La maison n°17.

Ton reflet murmure :

« Tout a commencé là-bas. »`,
choices:[
{text:"🪞 Toucher le miroir",next:"blackwood_call"},
{text:"🚪 Partir",next:"exit_hotel"}
]
},

blackwood_call:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"CHAMBRE 17",
time:"02:40",
speaker:"VOIX DE BLACKWOOD",
text:`« Tu te souviens maintenant ?

La première nuit.

La maison.

La porte.

Le téléphone. »

Des images de Blackwood apparaissent dans ta tête.

Puis la voix ajoute :

« Le Last Call n'a jamais commencé ici.

Il t'attendait déjà à Blackwood. »`,
choices:[
{text:"📞 Demander la vérité",next:"truth_hint"},
{text:"🔇 Raccrocher",next:"last_phone"}
]
},

truth_hint:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"CHAMBRE 17",
time:"02:42",
speaker:"VOIX DE BLACKWOOD",
text:`« Tu veux la vérité ?

Alors réponds au dernier appel.

Une seule fois.

Après cela...

le choix t'appartiendra. »

La ligne coupe.

Le téléphone ancien sonne dans le sous-sol.`,
choices:[
{text:"📞 Aller répondre",next:"last_phone",clue:"Le dernier appel"},
{text:"🚪 Quitter l'hôtel",next:"exit_hotel"}
]
},

trust_other:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"02:45",
speaker:"AUTRE TOI",
text:`Tu regardes ton double.

« Fais-moi confiance. »

Il te montre un passage secret.

« Je peux te faire sortir.

Mais tu dois me laisser prendre ta place. »

Tu comprends.

Il veut devenir toi.`,
choices:[
{text:"🤝 Accepter",next:"swap"},
{text:"❌ Refuser",next:"last_phone"}
]
},

swap:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"02:48",
speaker:"NARRATEUR",
text:`Tu acceptes.

Le monde devient noir.

Une seconde plus tard, tu te retrouves devant l'hôtel.

Tout semble normal.

Ton téléphone sonne.

Tu décroches.

Ta propre voix murmure :

« Merci. »

Tu regardes ton reflet dans une vitrine.

Ce n'est plus toi.`,
choices:[
{text:"➡️ Continuer",next:"chapter4_end"}
]
},

destroy_last:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"02:52",
speaker:"NARRATEUR",
text:`Tu frappes le dernier téléphone.

Une fissure apparaît.

Puis une explosion de lumière.

Tous les autres téléphones s'éteignent.

Ton double hurle.

Le sol tremble.

Le Last Call commence à disparaître.`,
choices:[
{text:"🏃 Courir vers la sortie",next:"chapter4_end"},
{text:"👁️ Rester avec ton double",next:"guardian_end"}
]
},

last_phone:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"02:55",
speaker:"TA VOIX",
text:`Tu décroches.

Silence.

Puis ta voix :

« Tu es enfin arrivé au dernier appel. »

— Qui contrôle tout ça ?

« Personne.

C'est toi. »

Tu ne comprends pas.

« Le phénomène n'a jamais choisi une victime.

Il cherche un gardien. »`,
choices:[
{text:"❓ Demander pourquoi toi",next:"why_you"},
{text:"📞 Demander comment terminer",next:"final_choice"}
]
},

why_you:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"02:58",
speaker:"TA VOIX",
text:`« Parce que tu as survécu à Blackwood.

Tu étais déjà connecté.

Le Last Call t'attendait.

Depuis le début. »

Le téléphone grésille.

« Maintenant tu dois choisir.

Rester.

Ou tout détruire. »`,
choices:[
{text:"🔥 Tout détruire",next:"destroy_last"},
{text:"🔒 Rester",next:"guardian_end"},
{text:"🚪 Partir",next:"final_choice"}
]
},

final_choice:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"SOUS-SOL",
time:"03:00",
speaker:"NARRATEUR",
text:`Le téléphone se tait.

Une porte apparaît devant toi.

Au-dessus :

SORTIE.

Derrière toi, tous les téléphones recommencent à sonner.

Tu comprends que c'est ta dernière chance.`,
choices:[
{text:"🚪 Partir",next:"exit_hotel"},
{text:"📞 Répondre encore",next:"chapter5_start"},
{text:"🔥 Détruire le système",next:"destroy_last"}
]
},

exit_hotel:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"DEVANT LE LAST CALL",
time:"03:05",
speaker:"NARRATEUR",
text:`Tu quittes l'hôtel.

La pluie a cessé.

La ville semble normale.

Tu démarres ta voiture.

Pendant quelques kilomètres, rien.

Puis ton téléphone affiche :

APPEL ENTRANT — BLACKWOOD.

Tu comprends que ce n'est pas terminé.`,
choices:[
{text:"📞 Répondre",next:"chapter5_start"},
{text:"🔇 Ignorer",next:"chapter5_start"}
]
},

guardian_end:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"LAST CALL HOTEL",
time:"03:10",
speaker:"NARRATEUR",
text:`Tu restes.

Ton double disparaît.

Les portes se ferment.

Un nouveau téléphone apparaît sur le comptoir.

Il sonne.

Tu décroches.

Une voix demande :

« Qui êtes-vous ? »

Tu réponds :

« Celui qui surveille les appels. »

Le dernier chapitre peut commencer.`,
choices:[
{text:"➡️ Continuer",next:"chapter5_start"}
]
},

chapter4_end:{
chapter:"CHAPITRE 4 — L'AUTRE",
location:"ROUTE 47",
time:"03:12",
speaker:"NARRATEUR",
text:`Tu quittes le Last Call.

Derrière toi, l'hôtel disparaît dans l'obscurité.

Mais ton téléphone reste allumé.

Un message apparaît :

« DERNIER APPEL : EN ATTENTE. »

Tu sais que la prochaine réponse décidera de tout.

CHAPITRE 5 — LE DERNIER APPEL.`,
choices:[
{text:"➡️ Continuer",next:"chapter5_start"}
]
}

});
