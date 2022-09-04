const form=document.getElementById('form');
const res=document.getElementById('res');
const txt=document.getElementById('txt');

var n = Math.floor(localStorage.getItem('max') * Math.random());

var tent=1;

var wt = window.innerWidth;
var ht = window.innerHeight;

txt.textContent='Digite um numero de 0 a '+localStorage.getItem('max')+''

if(wt > 400){
  wt=400;
}

res.style.width = ''+wt+'px'

function loop(){
  
    if(res.value == n){
      alert(`
        parabens!!!
        voce ganhou com `+tent+` tentativas
      `)
      //return 0;
      localStorage.clear();
      window.location = '../index.html'
    }else if(res.value > n){
      alert(`
        seu numero foi alto
      `)
      res.value = '';
    }else if(res.value < n){
      alert(`
        seu numero foi baixo
      `)
      res.value = '';
    }
    
    tent++;
}

form.addEventListener('submit',(event) => {
  event.preventDefault();
  loop();
})
