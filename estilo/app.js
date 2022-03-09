function entrar(){
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

function conharApp(){
    location='aplicacao.html'
}
function planonoWhast(){
    alert('Você sera direcionado ao WhatsApp')
    location='https://api.whatsapp.com/send?phone=5561995084318&text=Ol%C3%A1%20Gage%2C'
}

function colaboracao(){
    alert('O colabora abrirá inscrições dia 15/08/2022')
}

function autoElacora(){
    alert('A equipe de automação não está aceitando novos clientes no momento!')
}
function sabermaisDeSite(){
    location='sitesGage.html'
}