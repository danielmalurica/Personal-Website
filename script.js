var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }

  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

var typed = new Typed("#typed", {
  strings: [" ", "a Web Developer", "a Mobile Developer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  sidemenu.style.right = "0px";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

let mybutton = document.getElementById("top-button");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
