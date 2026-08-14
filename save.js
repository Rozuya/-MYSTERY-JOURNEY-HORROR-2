"use strict";

window.SaveSystem = (() => {

    const SAVE_KEY =
        "mystery_journey_horror_2_save_v1";

    /*
       Clé utilisée par l'accueil ET le jeu.
    */
    const ENDINGS_KEY =
        "mystery_journey_horror_2_endings_v1";

    const VOLUME_KEY =
        "mystery_journey_horror_2_volume";


    /* =========================================================
       SAUVEGARDE
    ========================================================= */

    function save(data){

        try{

            localStorage.setItem(
                SAVE_KEY,
                JSON.stringify(data)
            );

            return true;

        }catch(error){

            console.error(
                "Sauvegarde impossible :",
                error
            );

            return false;
        }
    }


    /* =========================================================
       CHARGEMENT
    ========================================================= */

    function load(){

        try{

            const data =
                localStorage.getItem(
                    SAVE_KEY
                );

            return data
                ? JSON.parse(data)
                : null;

        }catch(error){

            console.error(
                "Chargement impossible :",
                error
            );

            return null;
        }
    }


    /* =========================================================
       NOUVELLE PARTIE
       IMPORTANT :
       ON SUPPRIME UNIQUEMENT LA SAUVEGARDE.
       LES FINS RESTENT.
    ========================================================= */

    function clear(){

        try{

            localStorage.removeItem(
                SAVE_KEY
            );

        }catch(error){

            console.error(
                "Suppression impossible :",
                error
            );
        }
    }


    /* =========================================================
       VOLUME
    ========================================================= */

    function setVolume(value){

        try{

            const v =
                Math.max(
                    0,
                    Math.min(
                        1,
                        Number(value) || 0
                    )
                );

            localStorage.setItem(
                VOLUME_KEY,
                String(v)
            );

        }catch(error){

            console.error(
                "Volume impossible :",
                error
            );
        }
    }


    function volume(){

        try{

            const value =
                localStorage.getItem(
                    VOLUME_KEY
                );

            if(value === null){

                return 0.45;
            }

            const v =
                Number(value);

            return Number.isFinite(v)
                ? Math.max(
                    0,
                    Math.min(1,v)
                )
                : 0.45;

        }catch(error){

            return 0.45;
        }
    }


    /* =========================================================
       FINS
    ========================================================= */

    function getEndings(){

        try{

            const data =
                localStorage.getItem(
                    ENDINGS_KEY
                );

            const endings =
                data
                    ? JSON.parse(data)
                    : [];


            return Array.isArray(endings)
                ? endings
                : [];

        }catch(error){

            console.error(
                "Lecture des fins impossible :",
                error
            );

            return [];
        }
    }


    function unlockEnding(id){

        if(!id){
            return;
        }


        try{

            const endings =
                getEndings();


            if(
                !endings.includes(id)
            ){

                endings.push(id);


                localStorage.setItem(
                    ENDINGS_KEY,
                    JSON.stringify(
                        endings
                    )
                );
            }


            console.log(
                "🏆 Fin débloquée :",
                id
            );

        }catch(error){

            console.error(
                "Impossible de sauvegarder la fin :",
                error
            );
        }
    }


    /* =========================================================
       VÉRIFIER UNE FIN
    ========================================================= */

    function hasEnding(id){

        return getEndings().includes(id);
    }


    /* =========================================================
       SAUVEGARDE EXISTANTE
    ========================================================= */

    function hasSave(){

        try{

            return (
                localStorage.getItem(
                    SAVE_KEY
                ) !== null
            );

        }catch(error){

            return false;
        }
    }


    /* =========================================================
       API PUBLIQUE
    ========================================================= */

    return {

        save,
        load,
        clear,

        setVolume,
        volume,

        getEndings,
        unlockEnding,
        hasEnding,

        hasSave

    };

})();
