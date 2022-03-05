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