let rotateX;
let rotateZ;

const resetView = () => {
  rotateX = 70;
  rotateZ = 0;

  updateView();
};

const rotateView = (event) => {
  let x = 0;
  let y = 0;
  if (event.type === "mousemove") {
    x = event.clientX;
    y = event.clientY;
  }
  if (event.type === "touchmove") {
    x = event.touches[0].clientX;
    y = event.touches[0].clientY;
  }
  const { left, top, width, height } = document.body.getBoundingClientRect();

  rotateX = 80 - 20 * ((y - top) / height);
  rotateZ = 10 - 20 * ((x - left) / width);

  updateView();
};

const updateView = () => {
  document.body.style.setProperty("--rotateX", rotateX + "deg");
  document.body.style.setProperty("--rotateZ", rotateZ + "deg");
};

resetView();

const replayAnimations = () => {
  document.getAnimations().forEach((anim) => {
    anim.finish();
    anim.play();
  });
};

document.documentElement.addEventListener("mouseleave", resetView);
document.documentElement.addEventListener("mousemove", rotateView);
document.documentElement.addEventListener("touchmove", rotateView);
document.documentElement.addEventListener("click", replayAnimations);
