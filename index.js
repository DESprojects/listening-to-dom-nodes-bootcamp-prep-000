const main = document.getElementById('main');
const input = document.querySelector('input');
let divs = document.querySelectorAll('div');

main.addEventListener('click', function(e){
  alert('I was clicked');
})

input.addEventListener('keydown', function(e){
  if(e.which === 71){
    return e.preventDefault();
  }
})

function bubble(e) {
  e.stopPropagation();
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for(let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for(let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', capture, true);
}
