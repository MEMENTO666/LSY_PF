const TEXT = document.getElementById("intro_text");
const TEXT_HEIGHT = TEXT.getBoundingClientRect().height;

console.log(TEXT_HEIGHT);

console.log(TEXT);


window.addEventListener("mousewheel", ()=>{
  if(window.scrollY > TEXT_HEIGHT) {
    TEXT.style.opacity = 0.01;
    TEXT.style.backgroundColor = "none";
  } else {
    TEXT.style.opacity = 1;
    TEXT.style.transition = "1.5s";
  }
});
