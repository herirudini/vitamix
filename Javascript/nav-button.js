
/*
function hamButton() {
  let list = document.getElementById("topNav");
    if (list.classList.contains("hide")) {
      list.classList.remove("hide")
    } else {
      list.className = "hide side-nav"
    }
};
*/
const faBars = document.getElementById("hamButton");
const topNav = document.getElementById("topNav");
function hamButton() {
    if (topNav.classList.contains("responsive")) {
      topNav.classList.remove("responsive");
      faBars.classList.add("fa-rotate-90")
      } else {
        topNav.className = "responsive top-bar"
        faBars.classList.remove("fa-rotate-90")
      }}
window.addEventListener("click", e => {
  	if (!topNav.contains(e.target) && topNav.className == "top-bar") {
  		topNav.className = "responsive top-bar";
      faBars.classList.remove("fa-rotate-90")
  		}})
window.addEventListener("scroll", e => {
  	if (!topNav.contains(e.target) && topNav.className == "top-bar") {
  		topNav.className = "responsive top-bar";
      faBars.classList.remove("fa-rotate-90")
  		}})

// let x = document.getElementById("notification");
// setTimeout('x.style.display = "flex"', 10000)
//
// function notifButton() {
//   x.style.display = "none"
// };

/*
window.addEventListener("click",
e = {
  let x = document.querySelector("#sideNav");
  if (!x.contains(tapWindow().target) && x.classList.contains("show")) {
    x.classList.replace("show", "hide")
  }
})
//document.getElementById("go").addEventListener("click", notifButton())


//console.log(lst)
/*
window.addEventListener("click",
function() {
  if (lst.classList.contains ("list")) {
    lst.className = "hide"
  }
})
/*
window.addEventListener("click", e => {
	const x = document.querySelector("#menuList");
	if (!x.contains(e.target) && x.className == "list") {
		x.className.replace("list", "hide");
		}
	})
*/
