"use strict";

window.SaveSystem = (() => {

const SAVE_KEY = "mystery_journey_horror_2_save_v1";
const ENDINGS_KEY = "mystery_journey_horror_2_endings";
const VOLUME_KEY = "mystery_journey_horror_2_volume";


function save(data){

try{

localStorage.setItem(
SAVE_KEY,
JSON.stringify(data)
);

return true;

}catch(error){

console.error("Sauvegarde impossible :",error);
return false;

}

}


function load(){

try{

const data =
localStorage.getItem(SAVE_KEY);

return data
? JSON.parse(data)
: null;

}catch(error){

console.error("Chargement impossible :",error);
return null;

}

}


function clear(){

try{

localStorage.removeItem(SAVE_KEY);

}catch(error){

console.error("Suppression impossible :",error);

}

}


function setVolume(value){

try{

const v=Math.max(
0,
Math.min(1,Number(value)||0)
);

localStorage.setItem(
VOLUME_KEY,
String(v)
);

}catch(error){

console.error("Volume impossible :",error);

}

}


function volume(){

try{

const value =
localStorage.getItem(VOLUME_KEY);

if(value===null)return 0.45;

const v=Number(value);

return Number.isFinite(v)
?Math.max(0,Math.min(1,v))
:.45;

}catch(error){

return .45;

}

}


function getEndings(){

try{

const data =
localStorage.getItem(ENDINGS_KEY);

const endings =
data ? JSON.parse(data) : [];

return Array.isArray(endings)
?endings
:[];

}catch(error){

return [];

}

}


function unlockEnding(id){

if(!id)return;

try{

const endings=getEndings();

if(!endings.includes(id)){

endings.push(id);

localStorage.setItem(
ENDINGS_KEY,
JSON.stringify(endings)
);

}

}catch(error){

console.error(
"Impossible de sauvegarder la fin :",
error
);

}

}


function hasSave(){

try{

return localStorage.getItem(SAVE_KEY)!==null;

}catch(error){

return false;

}

}


return{

save,
load,
clear,

setVolume,
volume,

getEndings,
unlockEnding,

hasSave

};

})();
