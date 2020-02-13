document.addEventListener("DOMContentLoaded", function() {
  var body = document.body;

  var arrayColor = ["#FFF", "blue", "#000", "yellow", "aqua"];
  setInterval(createStar, 55);
  function createStar() {
    var right = 0;
    var top = 0;
    var star = document.createElement("div");

    star.classList.add("star");

    body.appendChild(star);

    setInterval(runStar, 40);
    right = Math.floor(Math.random() * screen.width);
    top = Math.floor(Math.random() * screen.height);
    star.style.top = top + "px";
    star.style.backgroundColor = arrayColor[Math.floor(Math.random() * 5)];
    star.style.width = star.style.height =
      Math.floor(Math.random() * 15) + "px";
    function runStar() {
      if (right >= screen.width * 5) star.remove();
      if (screen.width > 1368) right += 180;
      else if (screen.width > 768) right += 140;
      else right += 80;
      star.style.right = right + "px";
    }
  }
});
