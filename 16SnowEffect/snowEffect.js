document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector("canvas");
  var c = canvas.getContext("2d");

  document.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  function Snow() {
    this.x = 100;
    this.y = 10;
    this.radius = 5;
    this.color = "#ffffff";
  }
  Snow.prototype.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  };
  function init() {
    let x = new Snow();
    x.draw(c);
  }
  init();
});
