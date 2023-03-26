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

// Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyC6CXetvbuvprz6eRNAeV10OViyNn2xhYw",
  authDomain: "mywebsite-c1a8a.firebaseapp.com",
  projectId: "mywebsite-c1a8a",
  storageBucket: "mywebsite-c1a8a.appspot.com",
  messagingSenderId: "174452972257",
  appId: "1:174452972257:web:3fa0e0f3a01b55cfa1f5a0",
  measurementId: "G-R0CD4CHGTP",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA",
});
