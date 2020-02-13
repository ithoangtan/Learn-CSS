document.addEventListener("DOMContentLoaded", function() {
  var processBar = document.querySelectorAll(".process-bar");

  const time = 3000;

  processBar.forEach(function(i) {
    let label = i.children[0];
    let line = i.children[1];
    let count = 0;

    let dataCount = label.getAttribute("data-count");

    let lineCount = line.children[0];

    // let value = line.style.width.substr(0, line.style.width.lenght - 2) / 100;

    let runTime = caculateTime(time * (dataCount / 100), dataCount);

    let animationLineCount = setInterval(function() {
      if (count < dataCount) {
        count++;
        label.innerHTML = count + "%";
        lineCount.style.width = count + "%";

        if (count <= 25) {
          lineCount.style.backgroundColor = "rgb(255, 144, 144)";
        } else if (count <= 50) {
          lineCount.style.backgroundColor = "rgb(251, 144, 255)";
        } else if (count <= 75) {
          lineCount.style.backgroundColor = "rgb(144, 255, 255)";
        } else if (count <= 100) {
          lineCount.style.backgroundColor = "rgb(157, 255, 144)";
        }
      }
    }, runTime);
  });

  function caculateTime(time, dataCount) {
    return time / dataCount;
  }
});
