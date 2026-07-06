const frases = [

"Você merece o mesmo carinho que oferece aos outros. 💖",

"Pequenos cuidados diários fazem grandes diferenças. 🌸",

"Respire fundo. Você está fazendo o seu melhor. 🌷",

"Descansar também é ser produtivo. ✨",

"Você é importante. Cuide de si com amor. 💗",

"Cada dia é uma nova oportunidade para florescer. 🌼",

"Seu bem-estar deve ser uma prioridade. 💕"

];

function novaFrase(){

const frase = document.getElementById("frase");

const indice = Math.floor(Math.random()*frases.length);

frase.innerHTML = frases[indice];

}

function mostrarMensagem(){

alert("🌸 Lembre-se: cuidar de você é um gesto de amor-próprio!");

}

// ======= GOSTEI =======

let totalLikes = 0;
let totalDislikes = 0;

function curtir(){

const botao = document.getElementById("likeBtn");

botao.classList.toggle("ativo");

if(botao.classList.contains("ativo")){
totalLikes++;
}else{
totalLikes--;
}

document.getElementById("likes").innerHTML = totalLikes;

}

// ======= DESLIKE =======

function descurtir(){

const botao = document.getElementById("dislikeBtn");

botao.classList.toggle("ativo");

if(botao.classList.contains("ativo")){
totalDislikes++;
}else{
totalDislikes--;
}

document.getElementById("dislikes").innerHTML = totalDislikes;

}

// ======= COMENTÁRIOS =======

function adicionarComentario(){

const campo = document.getElementById("comentario");

const texto = campo.value.trim();

if(texto===""){

alert("Digite um comentário.");

return;

}

const lista = document.getElementById("listaComentarios");

const novo = document.createElement("li");

const data = new Date();

novo.innerHTML =
"<strong>👤 Visitante</strong><br>" +
texto +
"<br><small>🕒 " +
data.toLocaleString() +
"</small>";

lista.prepend(novo);

campo.value="";

}
