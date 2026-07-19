// ?m=1 remove hs code start.. 
var uri = window.location.toString();
if (uri.indexOf("%3D","%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D","%3D%3D") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1","&m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1","?m=1") > 0) {
var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
window.history.replaceState({}, document.title, clean_uri);
}
  // ?m=1 remove hs code end.. 

function toggleText() {
  const wrapper = document.getElementById("textWrapper");
  const btn = document.getElementById("toggleBtn");

  wrapper.classList.toggle("expanded");
  wrapper.classList.toggle("collapsed");

  if (wrapper.classList.contains("expanded")) {
    btn.innerHTML = "Show Less";
  } else {
    btn.innerHTML = "Show More";
  }
}

// show more btn js end 

