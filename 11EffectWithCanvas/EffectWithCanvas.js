document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.querySelector("canvas");

  var c = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const arrayColors = ["#2BB2FF", "#27E8D4", "#38FF89", "#3EE827", "#C0FF19"];

  var mouse = {
    x: undefined,
    y: undefined
  };
  const maxRadius = 15;
  const minRadius = 2;
  const circleZoom = 50;
  const numberOfCircle = 1000;

  document.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    init();
    animate();
  });

  document.addEventListener("mousemove", event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });

  function Circle(x, y, radius, color) {
    this.x = x; //trục X
    this.y = y; //trục Y
    this.radius = radius; //bán kính
    this.color = color;
    // Vận tốc
    this.velocity = {
      x: Math.random() * 4 - 2,
      y: Math.random() * 4 - 2
    };
  }

  Circle.prototype.draw = function() {
    c.beginPath();

    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fillStyle = this.color;
    c.fill();
    // c.shadowColor = this.color;
    // c.shadowBlur = 5;
    c.closePath();

    //Chữ khi hover
    c.beginPath();
    c.font = "25px source sans pro";
    c.fillStyle = "white";
    c.textAlign = "center";
    // c.shadowColor = "white";
    // c.shadowBlur = 5;
    c.fillText("ithoangtan", mouse.x, mouse.y);
    c.closePath();

    c.restore();
  };

  Circle.prototype.update = function() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    //Phóng ta khi hover, thu nhỏ khi ngoài phạm vi circleZoom
    if (
      mouse.x - this.x < circleZoom &&
      mouse.x - this.x > -circleZoom &&
      mouse.y - this.y < circleZoom &&
      mouse.y - this.y > -circleZoom
    ) {
      if (this.radius < maxRadius) this.radius += 5;
    } else if (this.radius > minRadius) {
      this.radius -= 3;
      this.x += this.velocity.x * 3;
      this.y += this.velocity.y * 3;
    }
    this.draw();
  };

  /* Đảo chiều chuyển động khi đụng phải cạnh của client */
  Circle.prototype.collision = function() {
    if (this.x >= canvas.width || this.x <= 0) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y >= canvas.height || this.y <= 0) {
      this.velocity.y = -this.velocity.y;
    }
  };

  let arrayCircles; //Mảng chứa các circle

  //Khởi tạo các circle và push vào mảng arrayCircles
  function init() {
    arrayCircles = [];
    for (let index = 0; index < numberOfCircle; index++) {
      arrayCircles.push(
        new Circle(createX(), createY(), minRadius, randomColor())
      );
    }
  }

  //Chạy hiệu ứng
  function animate() {
    window.requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);

    arrayCircles.forEach(circle => {
      circle.update();
      circle.collision();
    });
  }

  function createX() {
    return Math.floor(Math.random() * canvas.width);
  }
  function createY() {
    return Math.floor(Math.random() * canvas.height);
  }

  function randomColor() {
    return arrayColors[Math.floor(Math.random() * arrayColors.length)];
  }

  init();
  animate();
});
