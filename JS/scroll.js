const TEXT = document.getElementById("intro_text");
const MOON = document.getElementById("moon");


const TEXT_HEIGHT = TEXT.getBoundingClientRect().height;
const MOON_HEIGHT = MOON.getBoundingClientRect().height;

console.log(TEXT_HEIGHT);
console.log(MOON_HEIGHT);

console.log(TEXT);


window.addEventListener("mousewheel", ()=>{
  if(window.scrollY > TEXT_HEIGHT) {
    TEXT.style.opacity = 0.01;
    TEXT.style.backgroundColor = "none";
  } else {
    TEXT.style.opacity = 1;
    TEXT.style.transition = "1.7s";
  }
});

window.addEventListener("mousewheel", ()=>{
  if(window.scrollY > MOON_HEIGHT) {
    MOON.style.opacity = 0.01;
    MOON.style.backgroundColor = "none";
  } else {
    MOON.style.opacity = 1;
    MOON.style.transition = "1.7s";
  }
});