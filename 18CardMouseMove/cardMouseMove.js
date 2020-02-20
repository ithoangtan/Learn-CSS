let card = document.querySelector(".card");

let maxY = 20; //20deg
let maxX = 20; //25deg
let pX = 0;
let pY = 0;

function interact(e) {
  pX = e.offsetX / this.offsetWidth;
  pY = e.offsetY / this.offsetHeight;
  this.style.transform = `rotateY(${
    pX > 0.5 ? "-" + pX * maxY : (1 - pX) * maxY
  }deg) rotateX(${pY > 0.5 ? pY * maxX : "-" + (1 - pY) * maxX}deg)`;
}
card.addEventListener("mousemove", interact);
