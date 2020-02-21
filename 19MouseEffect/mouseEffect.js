document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.createElement("canvas");
  var c = canvas.getContext("2d");

  document.body.appendChild(canvas);
  const mouse = {
    x: undefined,
    y: undefined
  };
  var mouseClick = 0;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colorArray = [
    "255,255,255",
    "242,60,80",
    "255,241,5",
    "233, 217, 217",
    "54, 177, 191",
    "0, 128, 128",
    "255,0,0",
    "0,255,255",
    "0,255,0"
  ];
  document.addEventListener("mousemove", function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  document.addEventListener("click", function() {
    mouseClick += 1;
  });
  function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 3 + 2;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.velocity = {
      x: Math.random() * 6 - 3,
      y: Math.random() * 6 - 3
    };
    this.life = 60;
    this.opacity = 0.9;
  }

  Circle.prototype.draw = function(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = `rgba(${this.color}, ${this.opacity})`;
    c.fill();
    c.closePath();
  };
  Circle.prototype.update = function(c) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.life -= 2;
    this.opacity -= 0.015;
    this.draw(c);
  };
  var circleArray = [];
  function init() {
    for (let i = 0; i < 15; i++) circleArray.push(new Circle(mouse.x, mouse.y));
  }

  function animate() {
    window.requestAnimationFrame(animate);
    init();
    c.fillStyle = "rgba(0,0,0,.1)";
    if (mouseClick % 2 == 0) c.clearRect(0, 0, canvas.width, canvas.height);
    else c.fillRect(0, 0, canvas.width, canvas.height);
    circleArray.forEach(function(i, index) {
      if (i.life <= 0) circleArray.splice(index, 1);
      i.update(c);
    });
    console.log(circleArray.length);
  }

  animate();
});
