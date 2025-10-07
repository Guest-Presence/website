//==== Dynamic Greeting =====
const headerText = document.querySelector("header p");

function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 12) greeting = "Good morning";
  else if (hour < 18) greeting = "Good afternoon";
  else greeting = "Good evening";

  headerText.innerText = `${greeting}, I'm Wayne Kelly - Creator | Developer | Visionary`;
}

updateGreeting();

//==== Smooth Scroll =====
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//==== Reveal on Scroll =====
const sections = document.querySelectorAll(".section");

function reveal() {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      sec.classList.add("show");
    }
  });
}
window.addEventListener("scroll", reveal);
reveal();

//==== Contact Form =====
const form = document.getElementById("contactForm");
const response = document.getElementById("formResponse");
form.onsubmit = (e) => {
  e.preventDefault();
  response.innerText = `Thanks, ${
    document.getElementById("name").value
  }! Your message has been sent (simulated).`;
  form.reset();
};

//==== Live Clock =====
const clock = document.getElementById("clock");
function updateClock() {
  const now = new Date();
  clock.innerText = `Local time: ${now.toLocaleTimeString()}`;
}
setInterval(updateClock, 1000);
updateClock();
