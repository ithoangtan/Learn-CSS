document.addEventListener("DOMContentLoaded", function() {
  let canvas = document.querySelector("canvas");
  let c = canvas.getContext("2d");

  document.body.appendChild(canvas);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  function Fierwork() {
    this.radius = 10;
    this.x = canvas.width / 2;
    this.y = canvas.height + this.radius;
    this.color = "#fff";
    this.velocity = {
      x: Math.random() * 6 - 3,
      y: Math.random() * 3 + 3
    };
    this.maxY = (Math.random() * canvas.height) / 4;
    this.life = false;
  }
  Fierwork.prototype.draw = function(c) {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };

  Fierwork.prototype.update = function(c) {
    this.y -= this.velocity.y;
    this.x += this.velocity.x;

    if (this.y <= this.maxY) this.life = true;

    this.draw(c);
  };

  let FierworkArray = [];

  function init() {
    if (FierworkArray.length < 20) FierworkArray.push(new Fierwork());
  }

  function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,0.1)";
    c.fillRect(0, 0, canvas.width, canvas.height);
    FierworkArray.forEach(function(fw, index) {
      fw.update(c);
      if (fw.life) FierworkArray.splice(index, 1);
    });
    init();
  }

  animate();
});
