const cards = document.querySelectorAll('.card');
let flipped = false, lock = false;
let first, second;

function flipCard() {
  if (lock || this === first) return;
  this.classList.add('flip');

  if (!flipped) {
    flipped = true;
    first = this;
    return;
  }

  second = this;
  checkMatch();
}

function checkMatch() {
  if (first.dataset.name === second.dataset.name) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  first.removeEventListener('click', flipCard);
  second.removeEventListener('click', flipCard);
  reset();
}

function unflipCards() {
  lock = true;
  setTimeout(() => {
    first.classList.remove('flip');
    second.classList.remove('flip');
    reset();
  }, 1000);
}

function reset() {
  [flipped, lock] = [false, false];
  [first, second] = [null, null];
}

cards.forEach(card => card.addEventListener('click', flipCard));
