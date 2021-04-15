const sideNav = document.getElementById("sideNav");
function sideButton() {
    if (sideNav.classList.contains("responsive")) {
      sideNav.classList.remove("responsive")
      } else {
        sideNav.className = "responsive side-nav"
      }}
window.addEventListener("click", e => {
  	if (!sideNav.contains(e.target) && sideNav.className == "side-nav") {
  		sideNav.className = "responsive side-nav";
  		}})
window.addEventListener("scroll", e => {
  	if (!sideNav.contains(e.target) && sideNav.className == "side-nav") {
  		sideNav.className = "responsive side-nav";
  		}})
