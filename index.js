const menuBtns = document.querySelectorAll(".menu-btn");
const menu = document.getElementById("menu-bar");
const scrollToTopBtn = document.getElementById("scroll-to-top");
const themeBtns = document.querySelectorAll(".theme-btn");
const header = document.querySelector("header");
const moonIcon = `<svg width="20" height="20" fill="none" viewBox="0 0 24 24">
<path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;
const sunIcon = `
         <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
         </svg>`;
const rootHTML = document.documentElement;

function setTheme() {
  if (rootHTML.classList.contains("dark")) {
    rootHTML.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setThemeIcon(sunIcon);
  } else {
    rootHTML.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setThemeIcon(moonIcon);
  }
}

function setThemeIcon(icon) {
  themeBtns.forEach((btn) => {
    btn.innerHTML = icon;
  });
}

if (localStorage.theme) {
  if (localStorage.theme === "dark") {
    setThemeIcon(moonIcon);
    rootHTML.classList.remove("light");
    if (!rootHTML.classList.contains("dark")) rootHTML.classList.add("dark");
  } else {
    setThemeIcon(sunIcon);
    rootHTML.classList.remove("dark");
  }
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  setThemeIcon(moonIcon);
  rootHTML.classList.remove("light");
  if (!rootHTML.classList.contains("dark")) rootHTML.classList.add("dark");
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  }
});

window.addEventListener("click", (event) => {
  const targetNode = event.target;
  if (
    header &&
    !(targetNode === header || header.contains(targetNode)) &&
    !targetNode.closest("#menu-btn")
  ) {
    if (!menu.classList.contains("hidden")) {
      menu.classList.add("hidden");
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 1024) {
    scrollToTopBtn.classList.replace("hidden", "flex");
  } else {
    scrollToTopBtn.classList.replace("flex", "hidden");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

themeBtns.forEach((themeBtn) => {
  themeBtn.addEventListener("click", () => {
    setTheme();
  });
});
