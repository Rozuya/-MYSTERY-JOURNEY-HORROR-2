"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   CHAPTER V — LE DERNIER APPEL
========================================================= */

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter5_start: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "02:48",
    speaker: "NARRATEUR",

    text:
`Tu es de nouveau sur la route 47.

L'hôtel a disparu.

Le ciel commence à s'éclaircir.

Tu regardes ton téléphone.

Aucun réseau.

Puis l'écran s'allume.

APPEL N°07.

Tu n'as jamais vu ce numéro auparavant.

Le téléphone sonne.

Une fois.

Deux fois.

Trois fois.

Puis une phrase apparaît :

« SI TU RÉPONDS, TU TE SOUVIENDRAS DE TOUT. »`,

    choices: [

        {
            text: "📞 Répondre",
            next: "seventh_call",
            clue: "Appel numéro 07"
        },

        {
            text: "📵 Refuser l'appel",
            next: "refuse_seventh"
        },

        {
            text: "🚗 Reprendre la voiture",
            next: "drive_away"
        }

    ]

},


/* =========================================================
   APPEL 07
========================================================= */

seventh_call: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "02:49",
    speaker: "TA PROPRE VOIX",

    text:
`Tu décroches.

Tu entends ta propre voix.

— Enfin.

Tu restes silencieux.

— Tu veux savoir pourquoi tu es revenu ?

— Oui.

— Parce que tu n'es jamais parti.

Un silence.

— Le Last Call n'est pas un endroit.

— Alors c'est quoi ?

Ta voix répond :

« C'est toi. »`,

    choices: [

        {
            text: "🧠 Demander toute la vérité",
            next: "full_truth"
        },

        {
            text: "📞 Demander comment sortir",
            next: "real_exit"
        },

        {
            text: "📵 Raccrocher",
            next: "hangup_seventh"
        }

    ]

},


/* =========================================================
   VÉRITÉ
========================================================= */

full_truth: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "02:51",
    speaker: "TA PROPRE VOIX",

    text:
`— Tu es mort à 23:17.

Mais ton esprit refusait de partir.

Le premier appel a créé une copie de tes souvenirs.

Le deuxième a créé ton identité.

Le troisième a recréé ta mémoire.

Le quatrième a créé ton double.

Le cinquième a séparé vos identités.

Le sixième devait décider lequel était réel.

Mais tu as refusé de choisir.

C'est pour cela que le cycle continue.`,

    choices: [

        {
            text: "🧠 Accepter la vérité",
            next: "accept_truth"
        },

        {
            text: "❌ Refuser la vérité",
            next: "deny_truth"
        }

    ]

},


/* =========================================================
   SORTIE
========================================================= */

real_exit: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "02:52",
    speaker: "TA PROPRE VOIX",

    text:
`— Il existe une sortie.

— Où ?

— Là où tout a commencé.

Tu regardes la route.

Au loin apparaît une maison.

Numéro 17.

Tu comprends.

La sortie n'est pas devant toi.

Elle est derrière.`,

    choices: [

        {
            text: "🏚️ Retourner à la maison 17",
            next: "return_house"
        },

        {
            text: "🚗 Continuer sur la route",
            next: "drive_away"
        }

    ]

},


/* =========================================================
   REFUSER L'APPEL
========================================================= */

refuse_seventh: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "02:50",
    speaker: "NARRATEUR",

    text:
`Tu refuses l'appel.

Le téléphone s'éteint.

Tu respires.

Tu avances.

La route semble normale.

Puis tu remarques quelque chose.

Chaque kilomètre porte le même numéro.

47.

47.

47.

Tu regardes derrière toi.

L'hôtel est là.

Tu n'es jamais parti.`,

    choices: [

        {
            text: "🏃 Courir",
            next: "run_road"
        },

        {
            text: "📞 Rappeler le numéro",
            next: "seventh_call"
        }

    ]

},


/* =========================================================
   VOITURE
========================================================= */

drive_away: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "02:53",
    speaker: "NARRATEUR",

    text:
`Tu montes dans la voiture.

Le moteur démarre.

Tu accélères.

La route défile.

Pendant quelques minutes, tout semble normal.

Puis la radio s'allume.

Une voix annonce :

« Il est 23 heures 17. »

Tu regardes l'horloge.

23:17.

Le temps vient de revenir en arrière.`,

    choices: [

        {
            text: "🚗 Continuer",
            next: "road_loop"
        },

        {
            text: "🛑 Arrêter la voiture",
            next: "stop_car"
        }

    ]

},


/* =========================================================
   RETOUR MAISON 17
========================================================= */

return_house: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "02:55",
    speaker: "NARRATEUR",

    text:
`La maison numéro 17 est exactement comme dans tes souvenirs.

La porte est ouverte.

À l'intérieur :

un téléphone.

Une chaise.

Un miroir.

Et une vieille photo.

Tu la prends.

Sur la photo, tu vois six personnes.

La dernière personne est toi.

Mais derrière la photo est écrit :

« SEPTIÈME APPEL — DÉCISION FINALE. »`,

    choices: [

        {
            text: "📞 Répondre au téléphone",
            next: "final_call"
        },

        {
            text: "🪞 Regarder le miroir",
            next: "final_mirror"
        },

        {
            text: "🔥 Brûler la photo",
            next: "burn_final_photo"
        }

    ]

},


/* =========================================================
   APPEL FINAL
========================================================= */

final_call: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "02:57",
    speaker: "VOIX INCONNUE",

    text:
`Le téléphone sonne.

Tu décroches.

La voix dit :

« Tu as enfin compris. »

— Qui êtes-vous ?

« Celui qui répondait avant toi. »

— Que dois-je faire ?

« Choisir.

Vivre avec tes souvenirs.

Ou vivre sans eux. »`,

    choices: [

        {
            text: "🧠 Garder tous mes souvenirs",
            next: "keep_memory"
        },

        {
            text: "🕊️ Tout oublier",
            next: "forget_everything"
        },

        {
            text: "🔥 Détruire le téléphone",
            next: "destroy_phone"
        }

    ]

},


/* =========================================================
   MIROIR FINAL
========================================================= */

final_mirror: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "02:58",
    speaker: "NARRATEUR",

    text:
`Tu regardes le miroir.

Ton reflet n'est plus là.

À sa place :

une porte.

Tu poses la main dessus.

Elle s'ouvre.

Derrière se trouve la route 47.

Mais cette fois...

il fait jour.`,

    choices: [

        {
            text: "🚪 Traverser",
            next: "mirror_exit"
        },

        {
            text: "🔙 Revenir en arrière",
            next: "return_house"
        }

    ]

},


/* =========================================================
   DÉTRUIRE LA PHOTO
========================================================= */

burn_final_photo: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "02:59",
    speaker: "NARRATEUR",

    text:
`Tu brûles la photo.

Les flammes deviennent bleues.

Les personnes disparaissent une par une.

Puis la dernière silhouette se retourne.

C'est toi.

Elle murmure :

« Merci. »`,

    choices: [

        {
            text: "🚪 Quitter la maison",
            next: "destroy_ending"
        }
    ]

},


/* =========================================================
   GARDER LES SOUVENIRS
========================================================= */

keep_memory: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "03:00",
    speaker: "VOIX INCONNUE",

    text:
`Tu choisis de te souvenir.

Tout revient.

La route.

L'accident.

Les appels.

Les copies.

Les morts.

Tu te souviens de chaque version de toi.

Puis tu comprends quelque chose.

Tu n'es pas le premier.

Tu es simplement le dernier.`,

    choices: [

        {
            text: "🚪 Quitter la maison",
            next: "truth_ending"
        },

        {
            text: "🏚️ Rester dans la maison",
            next: "guardian_ending"
        }

    ]

},


/* =========================================================
   OUBLI TOTAL
========================================================= */

forget_everything: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "03:01",
    speaker: "NARRATEUR",

    text:
`Tu acceptes.

Ton nom disparaît.

Tes souvenirs disparaissent.

La maison disparaît.

La route disparaît.

Tout devient blanc.

Puis tu ouvres les yeux.

Tu es dans une voiture.

Tu conduis.

Tu ne sais pas où tu vas.

La radio annonce :

« Il est 23 heures 17. »`,

    choices: [

        {
            text: "▶ Continuer",
            next: "memory_ending"
        }
    ]

},


/* =========================================================
   DÉTRUIRE LE TÉLÉPHONE
========================================================= */

destroy_phone: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "03:02",
    speaker: "NARRATEUR",

    text:
`Tu prends le téléphone.

Tu le frappes contre le sol.

Une fois.

Deux fois.

Trois fois.

L'écran se brise.

Tous les téléphones de l'hôtel se mettent à sonner en même temps.

Puis...

plus rien.

La maison commence à trembler.`,

    choices: [

        {
            text: "🔥 Mettre le feu à la maison",
            next: "fire_house"
        },

        {
            text: "🏃 Fuir",
            next: "escape_house"
        }

    ]

},


/* =========================================================
   ROUTE
========================================================= */

run_road: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "03:03",
    speaker: "NARRATEUR",

    text:
`Tu cours.

La route semble interminable.

Puis tu aperçois une voiture.

Elle s'arrête.

Le conducteur ouvre la porte.

Tu montes.

Il te regarde.

C'est toi.`,

    choices: [

        {
            text: "🚗 Monter dans la voiture",
            next: "copy_car"
        },

        {
            text: "🏃 Continuer à courir",
            next: "road_loop"
        }

    ]

},


road_loop: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`Tu continues.

La pluie commence.

Les phares apparaissent au loin.

Une voiture arrive.

Elle te percute.

Tout devient noir.

Tu ouvres les yeux.

Tu es au début de la route 47.

23:17.

Le téléphone sonne.

Encore.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "loop_ending"
        }
    ]

},


stop_car: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "03:04",
    speaker: "NARRATEUR",

    text:
`Tu arrêtes la voiture.

Le moteur s'éteint.

Tu descends.

Devant toi se trouve une maison.

Numéro 17.

Derrière toi :

la route a disparu.`,

    choices: [

        {
            text: "🏚️ Entrer dans la maison",
            next: "return_house"
        },

        {
            text: "🚶 Avancer dans le noir",
            next: "watched_ending"
        }

    ]

},


copy_car: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "03:05",
    speaker: "TON DOUBLE",

    text:
`Ton double conduit.

— Où allons-nous ?

Il sourit.

— Là où tu es déjà allé.

Tu regardes par la fenêtre.

L'hôtel apparaît.

Mais cette fois, tu es à l'extérieur.

Ton double arrête la voiture.

— C'est ton tour de répondre.`,

    choices: [

        {
            text: "📞 Prendre le téléphone",
            next: "guardian_choice"
        },

        {
            text: "🚪 Sortir de la voiture",
            next: "escape_house"
        }

    ]

},


/* =========================================================
   MIROIR EXIT
========================================================= */

mirror_exit: {

    chapter: "CHAPITRE V",
    location: "ROUTE 47",
    time: "03:06",
    speaker: "NARRATEUR",

    text:
`Tu traverses le miroir.

Tu es dehors.

Le soleil se lève.

Tu regardes derrière toi.

La maison n'existe plus.

Ton téléphone affiche :

« 0 APPEL EN ATTENTE. »

Pour la première fois...

le silence est réel.`,

    choices: [

        {
            text: "🌅 Continuer",
            next: "truth_ending"
        }
    ]

},


/* =========================================================
   FEU
========================================================= */

fire_house: {

    chapter: "CHAPITRE V",
    location: "MAISON 17",
    time: "03:07",
    speaker: "NARRATEUR",

    text:
`Le feu se propage.

Les murs deviennent rouges.

Les téléphones sonnent encore.

Puis les voix commencent à disparaître.

Une dernière voix murmure :

« Merci de nous avoir libérés. »

La maison s'effondre.`,

    choices: [

        {
            text: "🏃 Sortir",
            next: "destroy_ending"
        }
    ]

},


/* =========================================================
   FUITE
========================================================= */

escape_house: {

    chapter: "CHAPITRE V",
    location: "EXTÉRIEUR",
    time: "03:08",
    speaker: "NARRATEUR",

    text:
`Tu cours.

Tu ne regardes pas derrière toi.

Tu arrives sur une route normale.

Des voitures passent.

Une ville apparaît au loin.

Tu crois être sauvé.

Puis ton téléphone vibre.

Un message :

« TU AS OUBLIÉ QUELQU'UN. »`,

    choices: [

        {
            text: "📱 Regarder le message",
            next: "watched_ending"
        },

        {
            text: "📵 Jeter le téléphone",
            next: "escape_ending"
        }

    ]

},


/* =========================================================
   FINITIONS — 15 FINS
========================================================= */

/* 1 */
truth_ending: {

    chapter: "FIN",
    location: "AUBE",
    time: "06:17",
    speaker: "NARRATEUR",

    text:
`Le soleil se lève.

Tu as compris la vérité.

Le cycle est terminé.

Pour la première fois depuis des années, aucun téléphone ne sonne.

Blackwood disparaît derrière toi.

Tu es enfin libre.`,

    choices: [
        {
            text: "🌅 Terminer",
            end: "good"
        }
    ]

},


/* 2 */
loop_ending: {

    chapter: "FIN",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`Tu ouvres les yeux.

La pluie tombe.

La route 47.

La même voiture.

Le même téléphone.

Le même appel.

Tu comprends.

Le cycle recommence.`,

    choices: [
        {
            text: "🔄 Accepter le cycle",
            end: "loop"
        }
    ]

},


/* 3 */
destroy_ending: {

    chapter: "FIN",
    location: "BLACKWOOD",
    time: "03:10",
    speaker: "NARRATEUR",

    text:
`Les flammes engloutissent la maison.

Les téléphones cessent de sonner.

Les voix disparaissent.

Blackwood brûle.

Tu es le dernier à quitter les lieux.`,

    choices: [
        {
            text: "🔥 Regarder les flammes",
            end: "destroy"
        }
    ]

},


/* 4 */
guardian_ending: {

    chapter: "FIN",
    location: "MAISON 17",
    time: "03:11",
    speaker: "NARRATEUR",

    text:
`Tu décides de rester.

La maison devient silencieuse.

Tu prends place devant le téléphone.

Une nouvelle sonnerie retentit.

Quelqu'un vient d'entrer.

Tu comprends ton rôle.

Tu es devenu le gardien.`,

    choices: [
        {
            text: "🔒 Accepter",
            end: "guardian"
        }
    ]

},


/* 5 */
escape_ending: {

    chapter: "FIN",
    location: "ROUTE",
    time: "03:12",
    speaker: "NARRATEUR",

    text:
`Tu jettes le téléphone.

Tu continues de marcher.

La ville se rapproche.

Tu ne regardes jamais derrière toi.

Mais quelque chose marche à la même vitesse que toi.`,

    choices: [
        {
            text: "🚗 Continuer",
            end: "escape"
        }
    ]

},


/* 6 */
watched_ending: {

    chapter: "FIN",
    location: "ROUTE",
    time: "03:13",
    speaker: "NARRATEUR",

    text:
`Tu regardes derrière toi.

Personne.

Tu avances.

Puis ton téléphone s'allume.

La caméra frontale est activée.

Sur l'écran...

quelqu'un se tient derrière toi.

Tu te retournes.

Personne.

L'écran affiche :

« ILS TE REGARDENT. »`,

    choices: [
        {
            text: "👁️ Comprendre",
            end: "watched"
        }
    ]

},


/* 7 */
mirror_end_scene: {

    chapter: "FIN",
    location: "MAISON 17",
    time: "03:14",
    speaker: "NARRATEUR",

    text:
`Tu regardes ton reflet.

Il sourit.

Tu ne souris pas.

Il lève la main.

Tu ne bouges pas.

Puis il sort du miroir.

Tu comprends trop tard.

Le reflet est maintenant libre.`,

    choices: [
        {
            text: "🪞 Regarder",
            end: "mirror_end"
        }
    ]

},


/* 8 */
memory_ending: {

    chapter: "FIN",
    location: "ROUTE 47",
    time: "23:17",
    speaker: "NARRATEUR",

    text:
`Tu as tout oublié.

Tu ne sais plus qui tu es.

Mais quelque chose semble familier.

La route.

La pluie.

Le téléphone.

Une nouvelle histoire commence.`,

    choices: [
        {
            text: "🧠 Tout oublier",
            end: "memory_end"
        }
    ]

},


/* 9 */
house_end_scene: {

    chapter: "FIN",
    location: "MAISON 17",
    time: "03:15",
    speaker: "NARRATEUR",

    text:
`Tu quittes la maison.

La porte se ferme derrière toi.

Tu avances sans regarder.

Puis tu entends la porte se rouvrir.

Tu continues.

Tu ne te retournes pas.`,

    choices: [
        {
            text: "🚪 Partir",
            end: "house_end"
        }
    ]

},


/* 10 */
chapter1_escape_end: {

    chapter: "FIN",
    location: "ROUTE 47",
    time: "03:16",
    speaker: "NARRATEUR",

    text:
`Tu as quitté Blackwood trop tôt.

Tu n'as jamais découvert toute la vérité.

Mais certaines histoires ne restent jamais derrière nous.`,

    choices: [
        {
            text: "🏃 Continuer",
            end: "chapter1_escape"
        }
    ]

},


/* 11 */
basement_end_scene: {

    chapter: "FIN",
    location: "SOUS-SOL",
    time: "03:17",
    speaker: "NARRATEUR",

    text:
`Les portes se ferment.

Tu es enfermé.

Une voix murmure ton prénom.

Puis une autre.

Puis des dizaines.

Toutes utilisent ta voix.`,

    choices: [
        {
            text: "⬇️ Rester",
            end: "basement_end"
        }
    ]

},


/* 12 */
secret_end_scene: {

    chapter: "FIN",
    location: "MAISON 17",
    time: "03:18",
    speaker: "NARRATEUR",

    text:
`Tu refuses d'ouvrir la dernière porte.

Tu pars.

Peut-être était-ce la meilleure décision de toute ta vie.

Ou peut-être que tu viens simplement de laisser quelque chose derrière toi.`,

    choices: [
        {
            text: "🔑 Garder le secret",
            end: "secret_escape"
        }
    ]

},


/* 13 */
upper_end_scene: {

    chapter: "FIN",
    location: "ÉTAGE SUPÉRIEUR",
    time: "03:19",
    speaker: "NARRATEUR",

    text:
`Tu refuses de suivre la silhouette.

Tu descends l'escalier.

Une marche.

Deux.

Trois.

Puis tu sens une respiration derrière ton oreille.

La silhouette est déjà là.`,

    choices: [
        {
            text: "👤 Se retourner",
            end: "upper_end"
        }
    ]

},


/* 14 */
survivor_end_scene: {

    chapter: "FIN",
    location: "ROUTE 47",
    time: "03:20",
    speaker: "NARRATEUR",

    text:
`Tu laisses l'inconnu derrière toi.

Tu ne sauras jamais s'il disait la vérité.

Tu marches jusqu'à l'aube.

Mais lorsque tu regardes ton ombre...

elle n'est pas seule.`,

    choices: [
        
