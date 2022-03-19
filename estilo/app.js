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
function terappCom(){
  alert('Nosso chat online ainda não esta pronto, por favor clique na guia fale conosco!')
}
function verMinisiteGage(){
  location='https://gustavowp8.github.io/barbearia/'
}

/*====== Fale conosco =======*/

function irFace(){
  var face = confirm('Você deseja ir para a Pagina do Facebook ?')
  if(face == true){
    location='https://www.facebook.com/gustafloja'
  }
}

function irInsta(){
  var insta = confirm('Você deseja ir para a Pagina do Instagram ?')
  if(insta == true){
    location='https://instagram.com/gage_developer?utm_medium=copy_link'
  }
}


function whas(){
  var whast = confirm('Você sera direcionado para o WhatsApp deseja continua ?')
  if(whast == true){
    location='https://wa.me/556135752752?text=Tenho+duvidas%2C+'
  }
}

function emaild(){
 alert('O email GAGE e o gagedeveloper@gmail.com')
}

function msgEnviar(){
  
  var msg = document.getElementById('tMsg').value
  var nome = document.getElementById('tNome').value
  var tele = document.getElementById('tTel').value

  if(msg =='' || nome =='' || tele == ''){
    alert('FALTA DADOS')
  } else{
    var my_text = `Mensagem do usuario Gage %0A %0A  ${msg} %0A %0A Nome: ${nome} %0A %0A Telefone: ${tele}`

  var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
  var chat_id = -1001247274051
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  alert('Mensagem enviada!')
  }
}

function avisodeUsuario(){
  var entrou = 'Houve acesso'
  console.log(entrou)

  var my_text = `Mensagem do site Gage %0A %0A  ${entrou}`

  var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
  var chat_id = -1001247274051
  var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`

  let api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();
}
/*====== Fale conosco =======*/