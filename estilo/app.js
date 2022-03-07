function entrar(){
    alert('Em manutenção!')
    location='pagina01.html'
}

function fechaEntra(){
    fer.style.display='none'
}
function abirAviso(){
    fer.style.display='block'
}

function continuaPro(){
    location='Login_v1/index.html';
}

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);

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

/*==== Aplicativos =====*/
var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*==== Aplicativos =====*/