"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   CHAPTER III — SOUS-SOL
========================================================= */

window.STORY = window.STORY || {};

Object.assign(window.STORY, {

chapter3_start: {

    chapter: "CHAPITRE III",
    location: "SOUS-SOL",
    time: "01:48",
    speaker: "NARRATEUR",

    text:
`La porte se referme derrière toi.

Tu es au sous-sol.

L'air est glacial.

Une ampoule clignote au plafond.

Devant toi se trouvent trois couloirs.

À gauche : ARCHIVES.

Au centre : MAINTENANCE.

À droite : NIVEAU -2.

Puis ton téléphone vibre.

Un message apparaît :

« NE DESCENDS PAS PLUS BAS. »`,

    choices: [

        {
            text: "📁 Aller aux archives",
            next: "archives",
            clue: "Archives du sous-sol"
        },

        {
            text: "🔧 Aller en maintenance",
            next: "maintenance"
        },

        {
            text: "⬇️ Descendre au niveau -2",
            next: "level_minus2"
        }

    ]

},


/* =========================================================
   ARCHIVES
========================================================= */

archives: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:50",
    speaker: "NARRATEUR",

    text:
`Les archives sont immenses.

Des dossiers remplissent les étagères.

Tu allumes une lampe.

Les dossiers portent des noms.

Certains sont très anciens.

Tu avances.

Puis tu trouves un dossier portant ton nom.

Date d'entrée :

14 AOÛT.

Date de sortie :

INCONNUE.

À l'intérieur se trouve une photo.

Tu reconnais l'hôtel.

Mais la photo semble avoir été prise depuis le sous-sol.`,

    choices: [

        {
            text: "📂 Lire le dossier",
            next: "personal_file",
            clue: "Ton dossier"
        },

        {
            text: "📸 Examiner la photo",
            next: "basement_photo",
            clue: "Photo du sous-sol"
        },

        {
            text: "🚪 Quitter les archives",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   DOSSIER PERSONNEL
========================================================= */

personal_file: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:52",
    speaker: "NARRATEUR",

    text:
`Le dossier contient plusieurs pages.

PAGE 1 :

« Sujet : PATIENT 01. »

PAGE 2 :

« Mémoire instable. »

PAGE 3 :

« Répond aux appels malgré les avertissements. »

Tu tournes la page.

La dernière phrase est écrite à la main :

« IL NE DOIT JAMAIS SE SOUVENIR DE SA MORT. »

Tu lâches presque le dossier.`,

    choices: [

        {
            text: "📄 Lire la dernière page",
            next: "death_file",
            clue: "Patient 01"
        },

        {
            text: "🔥 Détruire le dossier",
            next: "burn_file"
        }

    ]

},


/* =========================================================
   LA MORT
========================================================= */

death_file: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:54",
    speaker: "NARRATEUR",

    text:
`La dernière page est différente.

Une seule phrase :

« PATIENT 01 — DÉCÉDÉ SUR LA ROUTE 47 À 23:17. »

Tu relis.

23:17.

L'heure exacte du début de ton histoire.

Tu comprends.

Tu n'es pas arrivé à l'hôtel.

Tu y es retourné.`,

    choices: [

        {
            text: "😨 Continuer à lire",
            next: "death_truth"
        },

        {
            text: "📁 Fermer le dossier",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   VÉRITÉ
========================================================= */

death_truth: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:55",
    speaker: "NARRATEUR",

    text:
`Une note est cachée derrière le dossier.

« Le sujet oublie sa mort après chaque cycle.

Le Last Call lui permet de revenir.

Mais chaque retour crée une copie.

La copie croit être l'original.

L'original reste ici. »

Tu entends un bruit derrière les étagères.

Quelqu'un marche.`,

    choices: [

        {
            text: "🔦 Chercher la personne",
            next: "archive_figure"
        },

        {
            text: "🏃 Fuir",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   PHOTO
========================================================= */

basement_photo: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:53",
    speaker: "NARRATEUR",

    text:
`Tu regardes la photo.

Elle montre une pièce souterraine.

Au centre :

un téléphone.

Derrière lui :

six chaises.

Cinq sont occupées.

La sixième est vide.

Sous la photo :

« LA PROCHAINE PLACE EST POUR TOI. »`,

    choices: [

        {
            text: "📸 Garder la photo",
            next: "keep_basement_photo",
            clue: "Les six chaises"
        },

        {
            text: "🔥 Brûler la photo",
            next: "burn_photo"
        }

    ]

},


/* =========================================================
   MAINTENANCE
========================================================= */

maintenance: {

    chapter: "CHAPITRE III",
    location: "MAINTENANCE",
    time: "01:57",
    speaker: "NARRATEUR",

    text:
`La salle de maintenance est remplie de machines.

Des générateurs tournent encore.

Tu remarques un panneau :

SYSTÈME LAST CALL.

Un voyant rouge clignote.

Une inscription :

« APPELS RESTANTS : 4 »

Puis un bruit mécanique démarre.`,

    choices: [

        {
            text: "🔧 Examiner le système",
            next: "last_call_system",
            clue: "Système Last Call"
        },

        {
            text: "🔌 Couper le système",
            next: "shutdown_system"
        },

        {
            text: "🚪 Quitter",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   SYSTÈME LAST CALL
========================================================= */

last_call_system: {

    chapter: "CHAPITRE III",
    location: "MAINTENANCE",
    time: "01:59",
    speaker: "NARRATEUR",

    text:
`Tu examines le panneau.

Le système affiche :

APPEL 01 — TERMINÉ

APPEL 02 — TERMINÉ

APPEL 03 — EN COURS

APPEL 04 — VERROUILLÉ

APPEL 05 — VERROUILLÉ

APPEL 06 — FINAL

Sous la liste :

« SIX APPELS.

UNE SEULE SORTIE. »`,

    choices: [

        {
            text: "🔓 Chercher comment déverrouiller",
            next: "unlock_calls",
            clue: "Six appels"
        },

        {
            text: "🔌 Couper le système",
            next: "shutdown_system"
        }

    ]

},


/* =========================================================
   COUPER LE SYSTÈME
========================================================= */

shutdown_system: {

    chapter: "CHAPITRE III",
    location: "MAINTENANCE",
    time: "02:00",
    speaker: "NARRATEUR",

    text:
`Tu coupes le courant.

Toutes les machines s'arrêtent.

Le silence revient.

Puis un générateur redémarre tout seul.

Un écran s'allume :

« TU NE PEUX PAS ARRÊTER UN APPEL. »

Le téléphone de la salle sonne.`,

    choices: [

        {
            text: "📞 Répondre",
            next: "third_call"
        },

        {
            text: "🏃 Partir",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   NIVEAU -2
========================================================= */

level_minus2: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:02",
    speaker: "NARRATEUR",

    text:
`Tu descends.

Un étage.

Puis deux.

La température chute.

Les murs deviennent humides.

Au bout du couloir se trouve une porte métallique.

Sur celle-ci :

PATIENTS.

Tu entends quelqu'un frapper de l'autre côté.`,

    choices: [

        {
            text: "🚪 Ouvrir",
            next: "patients_room"
        },

        {
            text: "🔙 Remonter",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   PATIENTS
========================================================= */

patients_room: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:04",
    speaker: "NARRATEUR",

    text:
`La pièce ressemble à un ancien hôpital.

Des lits.

Des sangles.

Des dossiers.

Sur le premier lit :

PATIENT 03.

Le lit est vide.

Sur le deuxième :

PATIENT 04.

Vide.

Troisième :

PATIENT 05.

Vide.

Puis tu arrives au dernier.

PATIENT 01.

Ton nom.

Le lit est occupé.`,

    choices: [

        {
            text: "👤 Regarder le patient",
            next: "patient01"
        },

        {
            text: "🏃 Fuir",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   PATIENT 01
========================================================= */

patient01: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:05",
    speaker: "NARRATEUR",

    text:
`Tu t'approches.

La personne sur le lit ouvre les yeux.

C'est toi.

Exactement toi.

Il te regarde.

— Tu as mis longtemps.

Tu recules.

— Qui êtes-vous ?

Il sourit.

— La version qui est morte ici.

Puis il murmure :

— Et toi, tu es la copie.`,

    choices: [

        {
            text: "😨 Lui demander la vérité",
            next: "patient_truth",
            clue: "L'original"
        },

        {
            text: "🏃 Partir",
            next: "basement_hall"
        },

        {
            text: "📞 Lui demander s'il connaît les appels",
            next: "patient_calls"
        }

    ]

},


/* =========================================================
   VÉRITÉ DU PATIENT
========================================================= */

patient_truth: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:07",
    speaker: "PATIENT 01",

    text:
`— L'hôtel ne tue personne.

Il crée des copies.

— Pourquoi ?

— Pour empêcher les morts de partir.

Il te regarde.

— Chaque fois que tu réponds, une nouvelle version de toi apparaît.

— Et l'original ?

Il désigne le lit.

— Il reste ici.

Puis il ajoute :

— Mais tu peux encore choisir laquelle de nous deux sortira.`,

    choices: [

        {
            text: "🚪 Ouvrir la porte de sortie",
            next: "patient_exit"
        },

        {
            text: "📞 Lui demander le sixième appel",
            next: "sixth_call_truth"
        }

    ]

},


/* =========================================================
   TROISIÈME APPEL
========================================================= */

third_call: {

    chapter: "CHAPITRE III",
    location: "MAINTENANCE",
    time: "02:09",
    speaker: "VOIX INCONNUE",

    text:
`Tu décroches.

Une voix grave :

« Troisième appel. »

— Que voulez-vous ?

« Te montrer ce que tu étais avant. »

Le téléphone diffuse un enregistrement.

Une voiture.

La pluie.

Une collision.

Puis un silence.

Tu reconnais la route 47.

Tu reconnais ta voiture.

Et tu comprends enfin :

tu es mort à 23:17.`,

    choices: [

        {
            text: "📞 Continuer à écouter",
            next: "death_recording",
            clue: "Accident de la route 47"
        },

        {
            text: "📵 Raccrocher",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   ENREGISTREMENT DE L'ACCIDENT
========================================================= */

death_recording: {

    chapter: "CHAPITRE III",
    location: "MAINTENANCE",
    time: "02:11",
    speaker: "ENREGISTREMENT",

    text:
`L'enregistrement continue.

Une voix dit :

« Sujet décédé.

Mémoire récupérée.

Création de copie.

Cycle numéro 01. »

Puis une autre voix :

« Combien de copies ? »

Réponse :

« Nous ne savons plus. »`,

    choices: [

        {
            text: "🔎 Chercher le cycle numéro 01",
            next: "cycle_one",
            clue: "Cycle numéro 01"
        },

        {
            text: "🚪 Quitter",
            next: "basement_hall"
        }

    ]

},


/* =========================================================
   FIN DU CHAPITRE 3
========================================================= */

chapter3_end: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:17",
    speaker: "NARRATEUR",

    text:
`Une alarme retentit.

Les portes du sous-sol se verrouillent.

Une voix annonce :

« TROISIÈME APPEL TERMINÉ. »

Puis :

« QUATRIÈME APPEL : PRÉPARATION. »

Une porte métallique s'ouvre.

Derrière :

une immense salle plongée dans le noir.

Six téléphones sont posés sur une table.

Le premier se met à sonner.`,

    choices: [

        {
            text: "▶ Continuer",
            next: "chapter4_start"
        }

    ]

},


/* =========================================================
   TRANSITIONS
========================================================= */

basement_hall: {

    chapter: "CHAPITRE III",
    location: "SOUS-SOL",
    time: "02:12",
    speaker: "NARRATEUR",

    text:
`Tu reviens dans le couloir.

Les portes derrière toi sont maintenant verrouillées.

Une lumière verte s'allume.

Elle indique :

NIVEAU -2.`,

    choices: [

        {
            text: "⬇️ Descendre",
            next: "level_minus2"
        },

        {
            text: "📁 Retourner aux archives",
            next: "archives"
        },

        {
            text: "▶ Suivre la lumière",
            next: "chapter3_end"
        }

    ]

},

burn_file: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:56",
    speaker: "NARRATEUR",

    text:
`Tu brûles le dossier.

Les flammes montent.

Mais les feuilles ne brûlent pas.

Une phrase apparaît :

« TU NE PEUX PAS DÉTRUIRE CE QUE TU ES. »`,

    choices: [
        {
            text: "🚪 Fuir",
            next: "basement_hall"
        }
    ]

},

burn_photo: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:54",
    speaker: "NARRATEUR",

    text:
`La photo prend feu.

Pendant une seconde, tu vois les six personnes assises autour de la table.

Puis l'une d'elles tourne la tête vers toi.

La photo devient noire.`,

    choices: [
        {
            text: "🚪 Quitter",
            next: "basement_hall"
        }
    ]

},

keep_basement_photo: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:54",
    speaker: "NARRATEUR",

    text:
`Tu ranges la photo.

Au dos, un nouveau texte apparaît :

« LA SIXIÈME CHAISE EST DÉJÀ OCCUPÉE. »`,

    choices: [
        {
            text: "🔎 Chercher la sixième chaise",
            next: "level_minus2"
        }
    ]

},

archive_figure: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "01:55",
    speaker: "NARRATEUR",

    text:
`Tu éclaires le couloir entre les étagères.

Personne.

Mais un dossier est posé au sol.

PATIENT 02.

Tu l'ouvres.

La photo montre ton double.`,

    choices: [
        {
            text: "📂 Prendre le dossier",
            next: "basement_hall",
            item: "Dossier du patient 02"
        }
    ]

},

unlock_calls: {

    chapter: "CHAPITRE III",
    location: "MAINTENANCE",
    time: "02:00",
    speaker: "NARRATEUR",

    text:
`Tu cherches un moyen de déverrouiller les appels.

Un code est inscrit sous le panneau :

17 — 23 — 31 — 06.

Tu l'entres.

Le système affiche :

« ACCÈS AU QUATRIÈME APPEL AUTORISÉ. »`,

    choices: [
        {
            text: "▶ Continuer",
            next: "chapter3_end"
        }
    ]

},

patient_calls: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:06",
    speaker: "PATIENT 01",

    text:
`— Les appels ne sont pas là pour communiquer.

— Alors pourquoi ?

— Pour transférer les souvenirs.

Il ferme les yeux.

— Au quatrième appel, ils transfèrent l'identité.`,

    choices: [
        {
            text: "📞 Demander ce qui arrive au cinquième",
            next: "sixth_call_truth"
        },
        {
            text: "🚪 Partir",
            next: "basement_hall"
        }
    ]

},

sixth_call_truth: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:08",
    speaker: "PATIENT 01",

    text:
`— Le sixième appel ne donne rien.

— Alors ?

— Il décide qui est réel.

Un silence.

— Mais pour ça, tu dois atteindre le cinquième.`,

    choices: [
        {
            text: "▶ Continuer",
            next: "chapter3_end"
        }
    ]

},

patient_exit: {

    chapter: "CHAPITRE III",
    location: "NIVEAU -2",
    time: "02:08",
    speaker: "NARRATEUR",

    text:
`Derrière le lit se trouve une porte.

Tu l'ouvres.

Un couloir monte vers la surface.

Mais avant de partir, le patient murmure :

« Si tu sors maintenant, il prendra ta place. »`,

    choices: [
        {
            text: "🚪 Sortir",
            next: "chapter3_end"
        },
        {
            text: "🔙 Rester",
            next: "chapter3_end"
        }
    ]

},

cycle_one: {

    chapter: "CHAPITRE III",
    location: "ARCHIVES",
    time: "02:13",
    speaker: "NARRATEUR",

    text:
`Le cycle numéro 01 correspond à une date.

14 AOÛT.

Puis le numéro 02.

14 AOÛT.

Tous les cycles ont lieu le même jour.

Comme si l'hôtel ne connaissait qu'une seule journée.

Aujourd'hui.

Et toujours aujourd'hui.`,

    choices: [
        {
            text: "▶ Continuer",
            next: "chapter3_end"
        }
    ]

}

});
