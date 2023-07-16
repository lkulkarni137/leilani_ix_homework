const guessButton = document.getElementById('guess-btn');
const guessInput = document.getElementById('guess-input');
const message = document.getElementById('message');
const description = document.getElementById('movie-description');
const hint = document.getElementById('hint');
const hintButton = document.getElementById('hint-btn');
const error = document.getElementById('error');

const movies = [
  {
    title: 'Harry Potter',
    explanation: 'This movie is about a dude with a stick...',
    hint: "It's Magic",
  },
  {
    title: 'Just Go With It',
    explanation: 'This movie is about people who go on holiday...',
    hint: 'Adam, Drew and Jennifer',
  },
  {
    title: 'Never Back Down',
    explanation: 'This movie is about two guys with daddy issues who beat each other up...',
    hint: 'Kanye West - Stronger',
  },
  {
    title: 'Spongebob Squarepants',
    explanation: 'This movie is about a rectangle...',
    hint: "It's a cartoon",
  },
  {
    title: '50 First Dates',
    explanation: 'This movie is about a chick, she has the worst memory...',
    hint: '50 times...',
  },
  { title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow' },
  {
    title: 'Spiderman',
    explanation:
      'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...',
    hint: 'Peta-Paka',
  },
  {
    title: 'The Wolf Of Wall Street',
    explanation: "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: 'AWOOooooooooooo goes the...',
  },
  {
    title: 'Inception',
    explanation: 'In this movie everyone is like sleeping all the time...',
    hint: 'Dreams...',
  },
  {
    title: 'Peter Pan',
    explanation: 'In this movie some kids die and an angel escorts them to heaven...',
    hint: 'Always flying, cuz he neverlands',
  },
  {
    title: 'The Lord Of The Rings',
    explanation: 'In this movie some small guys go for a walk...',
    hint: 'You will not vacate past this exact position',
  },
];

const num = Math.floor(Math.random() * (movies.length));
let guesses = 3;

description.innerHTML = movies[num].explanation;

hintButton.addEventListener('click', function () {
  hint.innerHTML = movies[num].hint;
});

guessButton.addEventListener('click', function () {
  const rightMovie = movies[num].title;
  let guess = guessInput.value;

  if (guess === '') {
    error.style.color = 'red';
    error.textContent = 'Try again.';
    erase(() => {
      error.remove();
    }, 2500);
  } else if (guess.toUpperCase() === rightMovie.toUpperCase()) {
    message.textContent = `${guess} is the corrrect, yay!!`;
    guessButton.innerHTML = 'Next question: ';
    guessButton.addEventListener('click', () => {
      window.location.reload();
    });
  } else {
    guesses -= 1;
    message.textContent = `${guess} is not correct :( You have ${guesses} guesses left.`;
  }

  if (guesses == 0) {
    message.textContent = `No more guesses left :( the correct answer was ${rightMovie}.`;
    guessButton.innerHTML = 'Next question: ';
    guessButton.addEventListener('click', () => {
      window.location.reload();
    });
  }
});