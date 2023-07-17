const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

button.addEventListener('click', (e) => {
  const randomNumber = Math.round(Math.random() * 10);
  output.classList.add('alert');
  output.innerHTML = '';

  if (input.value == randomNumber) {
    output.classList.add('alert-success');
    output.innerHTML = 'Correct! The number is ' + randomNumber;
  } else if (input.value > 10 || input.value < 0) {
    output.classList.add('alert-danger');
    output.innerHTML = 'Needs to be a number from 0 - 10. Try again.'
  }
  
  else {
    output.classList.add('alert-danger');
    output.innerHTML = 'Nope :( the correct number is ' + randomNumber;
  }
});