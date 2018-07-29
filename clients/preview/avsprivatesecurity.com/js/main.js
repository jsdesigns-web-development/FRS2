var getPath = function () {
  let pathName = window.location.pathname;
  let pathArray = pathName.split('/');

  return pathArray[pathArray.length-1];
};

if ( getPath() == "index.html" && sessionStorage.getItem("currentPath") == "index.html") {
  window.scrollTo(0, 375);
}

//  hide/show title bar on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("title-bar").style.top = "0";
    document.getElementById("title-bar-mobile").style.top = "0";

  } else {
    document.getElementById("title-bar").style.top = "-60px";
    document.getElementById("title-bar-mobile").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
}

function goHome() {
  let thisPath = getPath();
  sessionStorage.setItem("currentPath", thisPath);
  window.location.assign("./index.html");
}
