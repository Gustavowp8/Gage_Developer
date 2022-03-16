function inicio(){
 location='index.html'
}
function planos(){
  location='planos.html'
}
function sobre(){
  location='sobre.html'
}
function faleConosco(){
  location='faleConosco.html'
}

/*====== Initialize Swiper ======*/

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*====== Initialize Swiper ======*/
  /*========= POPUP ==========*/

function chamaSimples(){
  info.style.display='block'
}

function fechaSimples(){
  info.style.display='none'
}
/*========= POPUP ==========*/


/*======= BASICO ========*/
function chamaBasico(){
  infoB.style.display='block'
}

function fechaBasico(){
  infoB.style.display='none'
}
/*======= BASICO ========*/


/*======= COMPLETO ========*/
function chamaComplet(){
  infoC.style.display='block'
}

function fechaCompleto(){
  infoC.style.display='none'
}
/*======= COMPLETO ========*/

/* ====== FLEX ===========*/
function chamaFlex(){
  infoD.style.display='block'
}

function fechaFlex(){
  infoD.style.display='none'
}
/* ====== FLEX ===========*/

function fechaAvisoAut(){
  tomac.style.display='none'
}
function chamaAvisoAut(){
  tomac.style.display='block'
}
/*=============================*/

function fecharperfilUser(){
  perfilUser.style.display='none'
}
function cahamarperfilUser(){
  perfilUser.style.display='block'
}
/*=====================*/
function verificarPerfilUser(){

  var nome = document.getElementById('tNome').value
  
  alert('Indisponivel no momento')
}

function fecharpMINIS(){
  minisitegage.style.display='none'
}
function chamaMiniPlano(){
  minisitegage.style.display='block'
}
function planosMiniSite(){
  location='planos.html'
}