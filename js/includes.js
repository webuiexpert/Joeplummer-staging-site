function setupMenuToggle() {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("myLinks");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });
}

// Your include logic here
document.addEventListener("DOMContentLoaded", function () {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(async el => {
    const file = el.getAttribute("data-include");
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;

    if (file.includes("header.html")) {
      setupMenuToggle();
    }
  });
});
