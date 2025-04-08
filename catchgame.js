const tulip = document.getElementById('tulip');
let score = 0;

function moveTulip() {
  const x = Math.random() * 80 + '%';
  const y = Math.random() * 80 + '%';
  tulip.style.left = x;
  tulip.style.top = y;
}

tulip.addEventListener('click', () => {
  score++;
  moveTulip();
  if (score >= 5) {
    alert("You caught all the tulips! Time for the final surprise!");
    window.location.href = "tulip.html";
  }
});

setInterval(moveTulip, 1500);
