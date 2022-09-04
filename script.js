const form=document.getElementById('form');
const valor=document.getElementById('difc');
const dif=document.getElementById('dif');
const esc=document.getElementById('esc');
const enviar=document.getElementById('enviar')

var wt = window.innerWidth;
var ht = window.innerHeight;

var max;
var res;

if(wt > 400){
  wt=400;
}

if(ht > 100 && ht < 600){
  dif.style.margin = '-25px 0px'
  
  valor.addEventListener('focus', () => {
    form.style.background = 'transparent'
    esc.style.color = 'transparent'
    esc.style.background = 'transparent'
    dif.style.margin = '-10px 0px'
    valor.style.top = '25px';
    enviar.style.top = '25px'
  })
  
  valor.addEventListener('focusout', () => {
    esc.style.color = '#202020'
    valor.style.top = '-25px'
    valor.style.margin = '10px 0px'
    enviar.style.top = '-25px'
  })
}

valor.style.width = ''+wt+'px';

dif.style.width = ''+wt+'px'
dif.style.fontSize = ''+wt / 15+'px'

const esdif=() => {
  if(valor.value == 1){
    max=10;
  }else if(valor.value == 2){
    max=100;
  }else if(valor.value == 3){
    max=1000;
  }else if(valor.value == 4) {
    max=10000;
  }else{
    alert('numero invalido');
    valor.value = ''
    return 101;
  }
}

form.addEventListener('submit',(event) => {
  event.preventDefault();
  res=esdif();
  localStorage.setItem('max',max);
  if(res != 101){
    window.location='./joguego/index.html'
  }
});
