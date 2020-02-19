document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector("canvas");
  var c = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  function Snow() {
    this.radius = Math.random() * 5;
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = -this.radius;
    this.color = "#ffffff";
    this.velocity = {
      x: Math.random() * 4 - 2,
      y: Math.random() * 3 + 2
    };
  }
  Snow.prototype.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.shadowColor = this.color;
    c.shadowBlur = 30;
    c.fill();
    c.closePath();
  };
  Snow.prototype.update = function() {
    this.y += this.velocity.y;
    this.x += this.velocity.x;
    if (this.y >= canvas.height - this.radius) this.velocity.y = 0;
    this.draw(c);
  };

  let arraySnow = [];
  function init() {
    arraySnow.push(new Snow());
  }

  function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    arraySnow.forEach(function(snow) {
      snow.update(c);
    });
    if (arraySnow.length > 350) arraySnow.splice(0, 100);
    init();
  }
  animate();
});
