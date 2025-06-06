var typed = new Typed("#element", {
  strings: [
    "Full Stack Developer",
    "UI/UX Designer",
    "&amp; Android/ios Developer.",
  ],
  typeSpeed: 50,
});

const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

function openTab(tabName) {
  for (const tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (const tabcontent of tabContents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

const sideMenu = document.querySelector("#side-menu");

function closeMenu() {
  sideMenu.style.right = "-200px";
}

function openMenu() {
  sideMenu.style.right = "0";
}

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwzxjkgnpDya-zte39_gB9Q_AWu94C70wwgb29V25EhmD73cEIYhQijqcmSxoNA8zat/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
