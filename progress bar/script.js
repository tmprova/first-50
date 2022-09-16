const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentProgress = 1;

next.addEventListener("click", () => {
  currentProgress++;
  if (currentProgress > circles.length) {
    currentProgress = circles.length;
  }
  console.log(currentProgress);
  update();
});
prev.addEventListener("click", () => {
  currentProgress--;
  if (currentProgress < 1) {
    currentProgress = 1;
  }
  console.log(currentProgress);
  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentProgress) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentProgress === 1) {
    prev.disabled = true;
  } else if (currentProgress === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
