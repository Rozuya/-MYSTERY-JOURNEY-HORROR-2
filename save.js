"use strict";

/* =========================================================
   🕵️ MYSTERY JOURNEY: HORROR 2
   SAVE SYSTEM
========================================================= */

const SAVE_KEY =
    "mystery_journey_horror_2_save_v1";

const ENDINGS_KEY =
    "mystery_journey_horror_2_endings_v1";

const VOLUME_KEY =
    "mjh2_volume";


window.SaveSystem = {


    /* =====================================================
       SAUVEGARDER LA PARTIE
    ===================================================== */

    save(game){

        try{

            localStorage.setItem(
                SAVE_KEY,
                JSON.stringify(game)
            );

            return true;

        }catch(error){

            console.error(
                "Erreur sauvegarde :",
                error
            );

            return false;
        }
    },


    /* =====================================================
       CHARGER LA PARTIE
    ===================================================== */

    load(){

        try{

            const data =
                localStorage.getItem(
                    SAVE_KEY
                );

            if(!data){
                return null;
            }

            return JSON.parse(data);

        }catch(error){

            console.error(
                "Erreur chargement :",
                error
            );

            return null;
        }
    },


    /* =====================================================
       VÉRIFIER SI UNE SAUVEGARDE EXISTE
    ===================================================== */

    exists(){

        return (
            localStorage.getItem(
                SAVE_KEY
            ) !== null
        );

    },


    /* =====================================================
       SUPPRIMER UNIQUEMENT LA PARTIE
       
       IMPORTANT :
       Les fins découvertes ne sont PAS supprimées.
    ===================================================== */

    clear(){

        localStorage.removeItem(
            SAVE_KEY
        );

    },


    /* =====================================================
       ENREGISTRER UNE FIN DÉCOUVERTE
    ===================================================== */

    unlockEnding(endingId){

        if(!endingId){
            return false;
        }

        try{

            let endings =
                this.getEndings();

            if(
                !endings.includes(
                    endingId
                )
            ){

                endings.push(
                    endingId
                );

                localStorage.setItem(
                    ENDINGS_KEY,
                    JSON.stringify(endings)
                );

            }

            return true;

        }catch(error){

            console.error(
                "Erreur enregistrement fin :",
                error
            );

            return false;
        }
    },


    /* =====================================================
       RÉCUPÉRER LES FINS DÉCOUVERTES
    ===================================================== */

    getEndings(){

        try{

            const data =
                localStorage.getItem(
                    ENDINGS_KEY
                );

            if(!data){
                return [];
            }

            const endings =
                JSON.parse(data);

            return Array.isArray(endings)
                ? endings
                : [];

        }catch(error){

            console.error(
                "Erreur lecture fins :",
                error
            );

            return [];
        }
    },


    /* =====================================================
       NOMBRE DE FINS DÉCOUVERTES
    ===================================================== */

    endingCount(){

        return this.getEndings().length;

    },


    /* =====================================================
       VÉRIFIER UNE FIN
    ===================================================== */

    hasEnding(endingId){

        return this
            .getEndings()
            .includes(endingId);

    },


    /* =====================================================
       SUPPRIMER LES FINS
       
       Cette fonction existe uniquement pour une
       éventuelle remise à zéro complète.
       
       Elle n'est PAS utilisée par Nouvelle partie.
    ===================================================== */

    clearEndings(){

        localStorage.removeItem(
            ENDINGS_KEY
        );

    },


    /* =====================================================
       SUPPRIMER ABSOLUMENT TOUT
    ===================================================== */

    clearEverything(){

        localStorage.removeItem(
            SAVE_KEY
        );

        localStorage.removeItem(
            ENDINGS_KEY
        );

        localStorage.removeItem(
            VOLUME_KEY
        );

    },


    /* =====================================================
       VOLUME
    ===================================================== */

    volume(){

        try{

            const value =
                localStorage.getItem(
                    VOLUME_KEY
                );

            if(value === null){
                return 0.45;
            }

            const number =
                Number(value);

            if(
                Number.isNaN(number)
            ){
                return 0.45;
            }

            return Math.max(
                0,
                Math.min(
                    1,
                    number
                )
            );

        }catch(error){

            return 0.45;
        }
    },


    /* =====================================================
       ENREGISTRER LE VOLUME
    ===================================================== */

    setVolume(value){

        const number =
            Number(value);

        if(
            Number.isNaN(number)
        ){
            return;
        }

        const safeValue =
            Math.max(
                0,
                Math.min(
                    1,
                    number
                )
            );

        localStorage.setItem(
            VOLUME_KEY,
            safeValue
        );

    }

};
