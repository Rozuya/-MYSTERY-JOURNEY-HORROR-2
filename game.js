"use strict";

document.addEventListener("DOMContentLoaded",()=>{

const $=id=>document.getElementById(id);
const scenes=window.STORY||{};
const Save=window.SaveSystem;

let game={
 scene:"start",
 chapter:"PROLOGUE",
 clues:[],
 items:[],
 decisions:[],
 endings:[],
 started:Date.now(),
 lastSaved:Date.now()
};

let typing=false;
let timer=null;

const params=new URLSearchParams(location.search);
const forceNew=params.get("new")==="1";
const forceContinue=params.get("continue")==="1";

function freshGame(){
 return{
  scene:"start",
  chapter:"PROLOGUE",
  clues:[],
  items:[],
  decisions:[],
  endings:[],
  started:Date.now(),
  lastSaved:Date.now()
 };
}

function toast(text){
 const e=$("toast");
 if(!e)return;
 e.textContent=text;
 e.classList.add("show");
 clearTimeout(e._timer);
 e._timer=setTimeout(()=>e.classList.remove("show"),2200);
}

function save(show=false){
 if(!Save)return false;
 game.lastSaved=Date.now();
 const ok=Save.save(game);
 if(show&&ok)toast("💾 Partie sauvegardée");
 return ok;
}

function load(){
 if(!Save)return false;
 const data=Save.load();
 if(!data)return false;

 game={
  ...freshGame(),
  ...data,
  clues:Array.isArray(data.clues)?data.clues:[],
  items:Array.isArray(data.items)?data.items:[],
  decisions:Array.isArray(data.decisions)?data.decisions:[],
  endings:Array.isArray(data.endings)?data.endings:[]
 };

 return true;
}

function updateStats(){
 const c=$("clueCount");
 const i=$("itemCount");
 const p=$("progress");

 if(c)c.textContent=game.clues.length;
 if(i)i.textContent=game.items.length;

 if(p){
  const total=Math.max(Object.keys(scenes).length,1);
  const used=new Set(game.decisions.map(x=>x.scene)).size;
  const percent=Math.min(99,Math.round(used/total*100));
  p.textContent=percent+"%";
 }
}

function setupMusic(){
 const audio=$("music");
 const volume=$("volume");
 const value=$("volumeValue");

 if(!audio)return;

 let v=Save&&Save.volume?Number(Save.volume()):.45;
 if(!Number.isFinite(v))v=.45;

 audio.volume=v;

 if(volume)volume.value=Math.round(v*100);
 if(value)value.textContent=Math.round(v*100)+"%";

 function play(){
  audio.play().catch(()=>{});
 }

 play();

 document.addEventListener("click",play,{once:true});

 if(volume){
  volume.addEventListener("input",()=>{
   const n=Math.max(0,Math.min(100,Number(volume.value)||0))/100;
   audio.volume=n;
   if(value)value.textContent=Math.round(n*100)+"%";
   if(Save&&Save.setVolume)Save.setVolume(n);
  });
 }
}

function typeText(text,done){
 clearInterval(timer);
 typing=true;

 const box=$("storyText");
 if(!box){
  typing=false;
  if(done)done();
  return;
 }

 box.textContent="";
 let i=0;

 timer=setInterval(()=>{
  box.textContent+=text.charAt(i++);
  if(i>=text.length){
   clearInterval(timer);
   typing=false;
   if(done)done();
  }
 },18);
}

function finishTyping(scene){
 clearInterval(timer);
 typing=false;

 const box=$("storyText");
 if(box)box.textContent=scene.text||"";

 renderChoices(scene);
}

function showScene(id){
 const scene=scenes[id];

 if(!scene){
  console.error("Scène introuvable :",id);
  endGame("unknown");
  return;
 }

 game.scene=id;

 if(scene.chapter)
  game.chapter=scene.chapter;

 const chapter=$("chapter");
 const location=$("location");
 const time=$("time");
 const speaker=$("speaker");
 const choices=$("choices");

 if(chapter)chapter.textContent=scene.chapter||"MYSTERY JOURNEY";
 if(location)location.textContent=scene.location||"UNKNOWN";
 if(time)time.textContent=scene.time||"";
 if(speaker)speaker.textContent=scene.speaker||"";
 if(choices)choices.innerHTML="";

 updateStats();
 save(false);

 typeText(scene.text||"",()=>renderChoices(scene));
}

function conditionOK(condition){
 if(typeof condition!=="function")return true;

 try{
  return !!condition(game);
 }catch(e){
  console.error("Erreur condition :",e);
  return false;
 }
}

function renderChoices(scene){
 const box=$("choices");
 if(!box)return;

 box.innerHTML="";

 (Array.isArray(scene.choices)?scene.choices:[]).forEach((choice,index)=>{

  if(choice.condition&&!conditionOK(choice.condition))
   return;

  const button=document.createElement("button");
  button.className="choice";
  button.type="button";
  button.textContent=choice.text||"Continuer";

  button.addEventListener("click",()=>{
   if(typing){
    finishTyping(scene);
    return;
   }

   choose(choice,index);
  });

  box.appendChild(button);
 });
}

function choose(choice,index){

 game.decisions.push({
  scene:game.scene,
  choice:index,
  time:Date.now()
 });

 if(typeof choice.effect==="function"){
  try{
   choice.effect(game);
  }catch(e){
   console.error("Erreur effet :",e);
  }
 }

 if(choice.clue&&!game.clues.includes(choice.clue)){
  game.clues.push(choice.clue);
  toast("🔎 Nouvel indice");
 }

 if(choice.item&&!game.items.includes(choice.item)){
  game.items.push(choice.item);
  toast("🎒 Objet obtenu");
 }

 updateStats();
 save(false);

 if(choice.end){
  endGame(choice.end);
  return;
 }

 if(choice.next){
  showScene(choice.next);
  return;
 }

 save(false);
}

const endings={
 good:["🌅","LA VÉRITÉ","Le cycle est terminé. Blackwood disparaît derrière toi."],
 loop:["🔄","LE CYCLE","La route 47 recommence encore."],
 destroy:["🔥","LE FEU","Blackwood brûle et les voix disparaissent."],
 guardian:["🔒","LE GARDIEN","Tu es devenu le nouveau gardien."],
 escape:["🚗","L'ÉCHAPPÉE","Tu quittes les lieux, mais quelque chose marche toujours derrière toi."],
 watched:["👁️","ILS TE REGARDENT","Quelqu'un se tient derrière toi, même lorsque tu ne vois personne."],
 mirror_end:["🪞","LE REFLET","Ton reflet est désormais libre."],
 memory_end:["🧠","L'OUBLI","Tu as tout oublié, mais l'histoire recommence."],
 house_end:["🚪","LA PORTE","Tu quittes la maison sans jamais regarder derrière toi."],
 chapter1_escape:["🏃","TROP TÔT","Tu as quitté Blackwood avant de découvrir toute la vérité."],
 basement_end:["⬇️","LE SOUS-SOL","Tu es enfermé. Des voix utilisent maintenant ta propre voix."],
 secret_escape:["🔑","LE SECRET","Tu refuses d'ouvrir la dernière porte et pars."],
 upper_end:["👤","LA SILHOUETTE","La silhouette est déjà derrière toi."],
 survivor_end:["🕯️","LE SURVIVANT","Tu marches jusqu'à l'aube, mais ton ombre n'est pas seule."]
};

function endGame(id){

 if(id&&id!=="unknown"){

  if(!game.endings.includes(id))
   game.endings.push(id);

  if(Save&&Save.unlockEnding)
   Save.unlockEnding(id);
 }

 save(false);

 const gameBox=$("game");
 const ending=$("ending");

 if(gameBox)gameBox.classList.add("hidden");
 if(ending)ending.classList.remove("hidden");

 const data=endings[id]||[
  "❓",
  "FIN",
  "L'histoire se termine ici."
 ];

 const icon=$("endingIcon");
 const title=$("endingTitle");
 const text=$("endingText");

 if(icon)icon.textContent=data[0];
 if(title)title.textContent=data[1];
 if(text)text.textContent=data[2];
}

function newGame(){
 if(Save)Save.clear();

 game=freshGame();

 const ending=$("ending");
 const gameBox=$("game");

 if(ending)ending.classList.add("hidden");
 if(gameBox)gameBox.classList.remove("hidden");

 showScene("start");
}

function replay(){
 game=freshGame();

 const ending=$("ending");
 const gameBox=$("game");

 if(ending)ending.classList.add("hidden");
 if(gameBox)gameBox.classList.remove("hidden");

 showScene("start");
}

const saveBtn=$("saveBtn");
const restartBtn=$("restartBtn");
const againBtn=$("againBtn");
const menuBtn=$("menuBtn");

if(saveBtn)
 saveBtn.addEventListener("click",()=>save(true));

if(restartBtn)
 restartBtn.addEventListener("click",newGame);

if(againBtn)
 againBtn.addEventListener("click",replay);

if(menuBtn)
 menuBtn.addEventListener("click",()=>{
  save(false);
  location.href="index.html";
});

setupMusic();

if(forceNew){
 newGame();
}else if(forceContinue){
 if(load())showScene(game.scene);
 else newGame();
}else if(load()){
 toast("📂 Partie chargée");
 showScene(game.scene);
}else{
 showScene("start");
}

});
