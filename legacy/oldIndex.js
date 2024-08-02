const nav = document.getElementById("nav");
const projects_btn = document.getElementById("projects");
const contacts_btn = document.getElementById("contacts");
const about_btn = document.getElementById("about");
const nav_divs = nav.querySelectorAll(".nav-btn");
const email = document.getElementById("email");
const about_me = document.getElementById("about_me");
const projects = document.getElementById("project");
const home_btn = document.getElementById("home");
const intro = document.getElementById("intro-div");
const up = document.getElementById("up");
const theme_selector = document.getElementById("theme_selector");
const topbar = document.getElementById("topbar");
const small_screen = window.matchMedia("(max-width:300px)");
const medium_screen = window.matchMedia("(min-width:820px)");
const ipad_screen = window.matchMedia(
  "(min-width:800px) and (max-width:850px)"
);
const large_screen = window.matchMedia("(min-width:900px)");
const year = document.getElementById("year");
const changerBg = document.getElementById("changer-bg");

// setInterval(()=>{
//    if(changerBg.src.includes('images/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg')) {
//     console.log(changerBg.src.length,changerBg.src )
//     changerBg.src = 'images/code.png';
//     return
//   }
//   changerBg.src = 'images/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg';
// },1000)

function choose_theme(){
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        //Use sun to indicate the theme
        theme_selector.innerHTML = `
           <svg width="30px" height="30px" viewBox="0 0 24 24" fill="lightblue">
            <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="lightblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>`
    }else{
        document.documentElement.classList.add('dark');
        theme_selector.innerHTML = `
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="lightblue">
          <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="lightblue" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    }
    /* <!-- sun -->
      <!-- <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
        <path d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> -->
      <!-- moon -->
      <!-- <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none">
        <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg> --> */
}

theme_selector.addEventListener('click',choose_theme)

let currentSectionNavBtn;

let date = new Date();
year.innerHTML = date.getFullYear();

let clickCount = 0;
const open_menu = () => {
  clickCount++;
  topbar.classList.toggle("change");
  nav.classList.toggle("open");
  //  if(!topbar.className.includes('change')){
  if (clickCount % 2 === 0) {
    topbar.classList.add("opt-bouncer");
    return;
  }
  topbar.classList.remove("opt-bouncer");
};

function click_btn() {
  for (let i = 0; i < nav_divs.length; i++) {
    let btn = nav_divs[i];
    btn.classList.remove('hightlighted-nav');
  }
}

nav_divs.forEach((nav_div) => {
  nav_div.addEventListener("click", open_menu);
});

function highlightTheClickedBtn(btn) {
  click_btn();
  if (medium_screen.matches) {
    btn.classList.add("hightlighted-nav");
  } else {
    btn.classList.add("hightlighted-nav");
  }
}

for (let i = 0; i < nav_divs.length; i++) {
  let btn = nav_divs[i];
  btn.addEventListener("click", () => {
    highlightTheClickedBtn(btn);
    currentSectionNavBtn = btn;
  });
}

contacts_btn.addEventListener("click", () => {
  email.scrollIntoView();
});

about_btn.addEventListener("click", () => {
  about_me.scrollIntoView();
});

projects_btn.addEventListener("click", () => {
  projects.scrollIntoView();
});

home_btn.addEventListener("click", () => {
  intro.scrollIntoView();
});
up.addEventListener("click", () => {
  intro.scrollIntoView(); //redundant, yeaaa 😅😂😂
});

function select_nav_btn(current_btn, other_btns) {
  other_btns.forEach((btn) => btn.classList.remove("hightlighted-nav"));
  current_btn.classList.add("hightlighted-nav");
}

// I prefer the long/hard way here 😅😅😅😂😂
//Use intersection observer API, the following is very redundant,
//I left for the sake of memories. though it helps as you can see.
function indicator(a) {
  if (window.scrollY >= 400 && window.scrollY < 1100) {
    //select_nav_btn(about_btn, home_btn,projects_btn,contacts_btn)

    contacts_btn.style.borderTop = "0px solid transparent";
    about_btn.style.borderTop = "3px solid grey";
    projects_btn.style.borderTop = "0px solid transparent";
    home_btn.style.borderTop = "0px solid transparent";
  } else if (window.scrollY >= 1100 && window.scrollY < a) {
    // select_nav_btn(projects_btn, home_btn, about_btn,contacts_btn)
    about_btn.style.borderTop = "0px solid transparent";
    projects_btn.style.borderTop = "3px solid grey";
    contacts_btn.style.borderTop = "0px solid transparent";
    home_btn.style.borderTop = "0px solid tranparent";
  } else if (window.scrollY >= a) {
    //select_nav_btn(contacts_btn, home_btn,projects_btn,about_btn)
    projects_btn.style.borderTop = "0px solid transparent";
    about_btn.style.borderTop = "0px solid transparent";
    contacts_btn.style.borderTop = "3px solid grey";
    home_btn.style.borderTop = "0px solid transparent";
  } else {
    //select_nav_btn(home_btn,projects_btn,about_btn,contacts_btn)
    projects_btn.style.borderTop = "0px solid transparent";
    about_btn.style.borderTop = "0px solid transparent";
    contacts_btn.style.borderTop = "0px solid transparent";
    home_btn.style.borderTop = "3px solid grey";
  }
}

function match_screen() {
  if (small_screen.matches) {
    indicator(5500);
  } else if (ipad_screen.matches) {
    indicator(2500);
  } else if (large_screen.matches) {
    indicator(3700);
  } else {
    indicator(4500);
  }
}

//intersection observer does this best
//window.onload =()=>match_screen();
window.onresize = () => {
  if (currentSectionNavBtn) highlightTheClickedBtn(currentSectionNavBtn);
};
window.onclick = (e) => {
  if (
    !e.target.closest("nav") &&
    !e.target.closest(".menu") &&
    nav.className.includes("open")
  ) {
    open_menu();
  }
};

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry=>{
//     entry.isIntersecting && !entry.target.classList.contains('viewed-section')?entry.target.classList.add('viewed-section'):entry.target.classList.remove('viewed-section');
//   });
  if (entries[0].isIntersecting) {
    if (entries[0].target.className === "intro") {
      currentSectionNavBtn = home_btn;
      select_nav_btn(home_btn, [projects_btn, about_btn, contacts_btn]);
    } else if (entries[0].target.id === "about_me") {
      currentSectionNavBtn = about_btn;
      select_nav_btn(about_btn, [projects_btn, home_btn, contacts_btn]);
    } else if (entries[0].target.className === "projects") {
      currentSectionNavBtn = projects_btn;
      select_nav_btn(projects_btn, [home_btn, about_btn, contacts_btn]);
    } else if (entries[0].target.className === "contact") {
      currentSectionNavBtn = contacts_btn;
      select_nav_btn(contacts_btn, [projects_btn, about_btn, home_btn]);
    }
  }
});

sections.forEach((section) => {
  observer.observe(section);
});

function siter() {
  fetch("https://chuksjohnleo.github.io")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const title = doc.querySelector("head title").textContent;
      const ogImage = doc
        .querySelector('head meta[property="og:image"]')
        .getAttribute("content");
      const description = doc
        .querySelector('head meta[name="Description"]')
        .getAttribute("content");
      const ogt = doc
        .querySelector('head meta[name="og:title"]')
        .getAttribute("content");

      // const ogTitle = doc.querySelector('head meta[property="og:title"]').getAttribute('content');
      console.log(title, ogImage, description, ogt); //,ogTitle);
    })
    .catch((error) => console.error(error));
}
