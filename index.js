const main = document.getElementById('main');
const input = document.querySelector('input');


main.addEventListener('click', function(e){
  alert('I was clicked');
})

input.addEventListener('keydown', function(e){
  if(e.which === 71){
    return e.preventDefault();
  }
})
