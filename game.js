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
 started:Date.now()
};

let typing=false;
let timer=null;

function fresh(){
 return{
  scene:"start",
  chapter:"PROLOGUE",
  clues:[],
  items:[],
  decisions:[],
  endings:[],
  started:Date.now()
 };
}

function toast(text){
 const e=$("toast");
 if(!e)return;
 e.textContent=text;
 e.classList.add("show");
 clearTimeout(e._t);
 e._t=setTimeout(()=>e.classList.remove("show"),2200);
}

function save(show=true){
 if(!Save)return false;
 const ok=Save.save(game);
 if(show&&ok)toast("💾 Partie sauvegardée");
 return ok;
}

function load(){
 if(!Save)return false;
 const data=Save.load();
 if(!data)return false;

 game=data;
 game.clues=Array.isArray(game.clues)?game.clues:[];
 game.items=Array.isArray(game.items)?game.items:[];
 game.decisions=Array.isArray(game.decisions)?game.decisions:[];
 game.endings=Array.isArray(game.endings)?game.endings:[];

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
  const value=Math.min(
   99,
   Math.round((game.decisions.length/total)*100)
  );
  p.textContent=value+"%";
 }
}

function music(){
 const audio=$("music");
 if(!audio)return;

 let volume=.45;

 if(Save&&typeof Save.volume==="function"){
  volume=Number(Save.volume());
  if(!Number.isFinite(volume))volume=.45;
 }

 audio.volume=volume;

 const slider=$("volume");
 const value=$("volumeValue");

 if(slider)slider.value=Math.round(volume*100);
 if(value)value.textContent=Math.round(volume*100)+"%";

 audio.play().catch(()=>{});
}

function setVolume(){
 const slider=$("volume");
 if(!slider)return;

 const v=Math.max(
  0,
  Math.min(100,Number(slider.value)||0)
 )/100;

 const audio=$("music");
 const value=$("volumeValue");

 if(audio)audio.volume=v;
 if(value)value.textContent=Math.round(v*100)+"%";

 if(Save&&typeof Save.setVolume==="function")
  Save.setVolume(v);
}

function typeText(text,done){
 clearInterval(timer);
 typing=true;

 const box=$("storyText");
 if(!box)return;

 box.textContent="";
 let n=0;

 timer=setInterval(()=>{
  box.textContent+=text.charAt(n++);
  if(n>=text.length){
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
  endGame("unknown");
  return;
 }

 game.scene=id;
 if(scene.chapter)game.chapter=scene.chapter;

 const chapter=$("chapter");
 const location=$("location");
 const time=$("time");
 const speaker=$("speaker");

 if(chapter)chapter.textContent=scene.chapter||"MYSTERY JOURNEY";
 if(location)location.textContent=scene.location||"UNKNOWN";
 if(time)time.textContent=scene.time||"";
 if(speaker)speaker.textContent=scene.speaker||"";

 const choices=$("choices");
 if(choices)choices.innerHTML="";

 updateStats();

 typeText(scene.text||"",()=>renderChoices(scene));
 save(false);
}

function renderChoices(scene){
 const box=$("choices");
 if(!box)return;

 box.innerHTML="";

 const choices=Array.isArray(scene.choices)
  ?scene.choices
  :[];

 choices.forEach((choice,index)=>{

  const button=document.createElement("button");
  button.className="choice";
  button.type="button";
  button.textContent=choice.text||"Choisir";

  button.onclick=()=>{
   if(typing){
    finishTyping(scene);
    return;
   }

   choose(scene,choice,index);
  };

  box.appendChild(button);
 });
}

function choose(scene,choice,index){

 game.decisions.push({
  scene:game.scene,
  choice:index,
  time:Date.now()
 });

 if(typeof choice.effect==="function"){
  try{
   choice.effect(game);
  }catch(error){
   console.error("Erreur effet :",error);
  }
 }

 if(choice.clue&&!game.clues.includes(choice.clue))
  game.clues.push(choice.clue);

 if(choice.item&&!game.items.includes(choice.item))
  game.items.push(choice.item);

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

 renderChoices(scene);
}

function endGame(id){

 if(id&&!game.endings.includes(id))
  game.endings.push(id);

 save(false);

 const data={
  good:{
   title:"LA VÉRITÉ",
   icon:"🌅",
   text:"Tu as compris le fonctionnement de Blackwood. Pour la première fois depuis des décennies, le cycle est brisé."
  },
  loop:{
   title:"LE CYCLE",
   icon:"🔄",
   text:"Tu pensais être sorti. Pourtant, la route devant toi mène encore à la maison."
  },
  destroy:{
   title:"LE FEU",
   icon:"🔥",
   text:"Les archives brûlent. Les voix se taisent. Blackwood disparaît dans les flammes."
  },
  guardian:{
   title:"LE GARDIEN",
   icon:"🔒",
   text:"Tu as pris la place du gardien. La maison est désormais silencieuse."
  },
  escape:{
   title:"L'ÉCHAPPÉE",
   icon:"🚗",
   text:"Tu quittes Blackwood avant de comprendre toute la vérité. Puis ton téléphone sonne."
  },
  watched:{
   title:"ILS TE REGARDENT",
   icon:"👁️",
   text:"Tu comprends trop tard que tu n'as jamais vraiment quitté Blackwood."
  },
  mirror_end:{
   title:"LE REFLET",
   icon:"🪞",
   text:"Ton reflet ne t'appartient plus."
  },
  memory_end:{
   title:"L'OUBLI",
   icon:"🧠",
   text:"Tu acceptes d'oublier. Mais quelque chose continue de te suivre."
  },
  house_end:{
   title:"LA PORTE",
   icon:"🚪",
   text:"Tu quittes la maison. Derrière toi, la porte se referme doucement."
  },
  chapter1_escape:{
   title:"TROP TÔT",
   icon:"🏃",
   text:"Tu quittes Blackwood avant de découvrir ce qu'elle cache."
  },
  basement_end:{
   title:"LE SOUS-SOL",
   icon:"⬇️",
   text:"Les portes se ferment autour de toi."
  },
  secret_escape:{
   title:"LE SECRET",
   icon:"🔑",
   text:"Tu refuses d'ouvrir la porte. Peut-être était-ce la meilleure décision."
  },
  upper_end:{
   title:"LA SILHOUETTE",
   icon:"👤",
   text:"Lorsque tu descends l'escalier, elle est déjà derrière toi."
  },
  survivor_end:{
   title:"LE SURVIVANT",
   icon:"🕯️",
   text:"Tu laisses l'inconnu derrière toi."
  },
  house_escape:{
   title:"LA FUITE",
   icon:"🏚️",
   text:"Tu trouves une sortie. Blackwood reste derrière toi."
  },
  prologue_escape:{
   title:"LA FUITE",
   icon:"🚗",
   text:"Tu quittes la route 47. Tu ne sauras jamais ce qui se trouvait dans la maison."
  }
 };

 const info=data[id]||{
  title:"FIN",
  icon:"❓",
  text:"L'histoire se termine ici."
 };

 const gameBox=$("game");
 const ending=$("ending");

 if(gameBox)gameBox.classList.add("hidden");
 if(ending)ending.classList.remove("hidden");

 const icon=$("endingIcon");
 const title=$("endingTitle");
 const text=$("endingText");

 if(icon)icon.textContent=info.icon;
 if(title)title.textContent=info.title;
 if(text)text.textContent=info.text;
}

function restart(){
 if(Save)Save.clear();

 game=fresh();

 const ending=$("ending");
 const gameBox=$("game");

 if(ending)ending.classList.add("hidden");
 if(gameBox)gameBox.classList.remove("hidden");

 showScene("start");
}

function again(){
 game=fresh();

 const ending=$("ending");
 const gameBox=$("game");

 if(ending)ending.classList.add("hidden");
 if(gameBox)gameBox.classList.remove("hidden");

 showScene("start");
}

const volume=$("volume");
const saveBtn=$("saveBtn");
const restartBtn=$("restartBtn");
const againBtn=$("againBtn");
const menuBtn=$("menuBtn");

if(volume)
 volume.addEventListener("input",setVolume);

if(saveBtn)
 saveBtn.addEventListener("click",()=>save(true));

if(restartBtn)
 restartBtn.addEventListener("click",restart);

if(againBtn)
 againBtn.addEventListener("click",again);

if(menuBtn)
 menuBtn.addEventListener("click",()=>{
  save(false);
  window.location.href="index.html";
 });

document.addEventListener("click",()=>{
 const audio=$("music");
 if(audio&&audio.paused)
  audio.play().catch(()=>{});
},{once:true});

music();

if(load()){
 toast("📂 Partie chargée");
 showScene(game.scene||"start");
}else{
 game=fresh();
 showScene("start");
}

});
