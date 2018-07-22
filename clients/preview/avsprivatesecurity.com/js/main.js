//  hide/show title bar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("title-bar").style.top = "0";
  } else {
    document.getElementById("title-bar").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}
