const pieces = document.querySelectorAll('.puzzle-piece');
let selected = null;

pieces.forEach(piece => {
  piece.addEventListener('click', () => {
    if (!selected) {
      selected = piece;
      piece.classList.add('selected');
    } else {
      swap(selected, piece);
      selected.classList.remove('selected');
      selected = null;
    }
  });
});

function swap(a, b) {
  const temp = a.style.order;
  a.style.order = b.style.order;
  b.style.order = temp;
  checkComplete();
}

function checkComplete() {
  const correct = [...pieces].every((p, i) => +p.style.order === i);
  if (correct) {
    alert("You completed the puzzle! Next surprise awaits!");
    window.location.href = "game3-catch.html";
  }
}
