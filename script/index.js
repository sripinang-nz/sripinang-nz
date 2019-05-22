var Para1 = document.querySelector("#Topbox-Backing");
var Para2 = document.querySelector("#Topbox-Container");
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
window.addEventListener("DOMContentLoaded", scrollLoop, false);
var xScrollPosition;
var yScrollPosition;
function scrollLoop() {
  xScrollPosition = window.scrollX;
  yScrollPosition = window.scrollY;
  setTranslate(0, yScrollPosition * -0.2, Para1);
  setTranslate(0, yScrollPosition * 0.5, Para2);
  requestAnimationFrame(scrollLoop);
}

document.getElementById('Bar-Title').style.LineHeight = '1000px';


document.querySelector('#Navbar').style.backgroundColor = NavColour;
document.querySelector('#Topbox-Header').innerHTML = TopboxHeader;