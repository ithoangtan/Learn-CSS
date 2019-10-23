new WOW().init();

var listItems = document.querySelectorAll(".item");

var arrayColor = ["red", "green", "blue", "aqua", "yellow", "cyan", "white"];

var arrayAnimation = [
  "shake",
  "tada",
  "fadeInLeft",
  "fadeInRight",
  "fadeInDown",
  "fadeInUp",
  "rollIn",
  "rollOut",
  "hinge",
  "flipInX",
  "flipInY"
];

listItems.forEach(function(item) {
  item.classList.add(
    "wow",
    arrayAnimation[Math.floor(Math.random() * arrayAnimation.length)]
  );
  item.style.background =
    "linear-gradient(" +
    arrayColor[Math.floor(Math.random() * arrayColor.length)] +
    "," +
    arrayColor[Math.floor(Math.random() * arrayColor.length)] +
    ")";
  item.setAttribute("data-wow-delay", "0.3s");
});
