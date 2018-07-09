const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  cards[i].style.position = "fixed";
}

const cardHeight = window.innerHeight;
document.body.style.height = cardHeight * cards.length;

function layout() {
  const scrollY = window.scrollY;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.top = Math.max(0, cardHeight * i - scrollY);
  }
}

layout();

window.addEventListener("scroll", function() {
  layout();
});
