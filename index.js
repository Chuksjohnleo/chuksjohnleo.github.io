const nav = document.getElementById('nav');
const projects_btn = document.getElementById('projects');
const contacts_btn = document.getElementById('contacts');
const about_btn = document.getElementById('about');
const nav_divs = nav.querySelectorAll('.nav-btn');
const email = document.getElementById('email');
const about_me = document.getElementById('about_me');
const projects = document.getElementById('project');
const home_btn = document.getElementById('home');
const intro = document.getElementById('intro-div');
const up = document.getElementById('up');
const topbar = document.getElementById('topbar');
const small_screen = window.matchMedia('(max-width:300px)');
const medium_screen =  window.matchMedia('(min-width:820px)');
const ipad_screen = window.matchMedia('(min-width:800px) and (max-width:850px)');
const large_screen = window.matchMedia('(min-width:900px)');
const year = document.getElementById('year');
const changerBg = document.getElementById('changer-bg');

// setInterval(()=>{
//    if(changerBg.src.includes('images/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg')) {
//     console.log(changerBg.src.length,changerBg.src )
//     changerBg.src = 'images/code.png';
//     return
//   }
//   changerBg.src = 'images/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg';
// },1000)

let currentSectionNavBtn;

let date = new Date();
year.innerHTML = date.getFullYear();

let clickCount = 0;
const open_menu = ()=>{
     clickCount++;
     topbar.classList.toggle('change');
     nav.classList.toggle('open');
    //  if(!topbar.className.includes('change')){
        if(clickCount%2 === 0){
          topbar.classList.add('opt-bouncer');
          return
        }
        topbar.classList.remove('opt-bouncer');
};

function click_btn(){
    for(let i=0; i<nav_divs.length;i++) {
        let btn =  nav_divs[i];
        btn.style.borderTop = '0px';
        btn.style.borderLeft = '0px';
        btn.style.background = 'transparent';
    };
};


nav_divs.forEach((nav_div)=>{
    nav_div.addEventListener('click',open_menu);
});

function highlightTheClickedBtn(btn){
    click_btn();
    if(medium_screen.matches){
        btn.style.borderTop = '3px solid blue';
        btn.style.background = 'lightblue'
    }else{
        btn.style.borderLeft = '3px solid blue';
        btn.style.background = 'lightblue';
    }
}

for(let i=0; i<nav_divs.length;i++) {
    let btn =  nav_divs[i];
    btn.addEventListener('click',()=>{
        highlightTheClickedBtn(btn);
        currentSectionNavBtn = btn;
    });
};
   
contacts_btn.addEventListener('click',()=>{
    email.scrollIntoView();
});

about_btn.addEventListener('click',()=>{
    about_me.scrollIntoView();
});

projects_btn.addEventListener('click',()=>{
    projects.scrollIntoView();
});

home_btn.addEventListener('click',()=>{
    intro.scrollIntoView();
})
up.addEventListener('click',()=>{
    intro.scrollIntoView();//redundant, yeaaa 😅😂😂
});

function select_nav_btn(current_btn,btn1,btn2,btn3){

if(medium_screen.matches){
    for(i=0;i<nav_divs.length;i++){
        nav_divs[i].style.background = 'transparent';
    };
    //for loop can settle the following but I choose not to.
    current_btn.style.borderLeft = '0px solid transparent';
    btn1.style.borderLeft = '0px solid transparent';
    btn2.style.borderLeft = '0px solid transparent';
    btn3.style.borderLeft = '0px solid transparent';
    current_btn.style.borderTop = '3px solid blue';
    current_btn.style.background = 'lightblue'
    btn1.style.borderTop = '0px solid transparent';
    btn2.style.borderTop = '0px solid transparent';
    btn3.style.borderTop = '0px solid transparent';
}else{ 
    for(let i=0;i<nav_divs.length;i++){
        nav_divs[i].style.background = 'transparent'
    };
    current_btn.style.background = 'lightblue'
    current_btn.style.borderTop = '0px solid transparent';
    btn1.style.borderTop = '0px solid transparent';
    btn2.style.borderTop = '0px solid transparent';
    btn3.style.borderTop = '0px solid transparent';
    current_btn.style.borderLeft = '3px solid blue';
    btn1.style.borderLeft = '0px solid transparent';
    btn2.style.borderLeft = '0px solid transparent';
    btn3.style.borderLeft = '0px solid transparent';
}
}

// I prefer the long/hard way here 😅😅😅😂😂
//Use intersection observer API, the following is very redundant,
//I left for the sake of memories. though it helps as you can see.
function indicator(a){
    if(window.scrollY >= 400 && window.scrollY < 1100){//select_nav_btn(about_btn, home_btn,projects_btn,contacts_btn)
        
        contacts_btn.style.borderTop = '0px solid transparent'
        about_btn.style.borderTop = '3px solid blue'
        projects_btn.style.borderTop = '0px solid transparent'
        home_btn.style.borderTop = '0px solid transparent';
    }else if(window.scrollY >= 1100 && window.scrollY < a){// select_nav_btn(projects_btn, home_btn, about_btn,contacts_btn)
        about_btn.style.borderTop = '0px solid transparent';
        projects_btn.style.borderTop = '3px solid blue';
        contacts_btn.style.borderTop = '0px solid transparent';
        home_btn.style.borderTop = '0px solid tranparent';
    }else if(window.scrollY >= a){//select_nav_btn(contacts_btn, home_btn,projects_btn,about_btn)
        projects_btn.style.borderTop = '0px solid transparent';
        about_btn.style.borderTop = '0px solid transparent';
        contacts_btn.style.borderTop = '3px solid blue';
        home_btn.style.borderTop = '0px solid transparent';
    }else{//select_nav_btn(home_btn,projects_btn,about_btn,contacts_btn)
        projects_btn.style.borderTop = '0px solid transparent';
        about_btn.style.borderTop = '0px solid transparent';
        contacts_btn.style.borderTop = '0px solid transparent';
        home_btn.style.borderTop = '3px solid blue';
    }
}


function match_screen(){
    if(small_screen.matches){
        indicator(5500);
    } else if(ipad_screen.matches){
        indicator(2500)
    }
    else if(large_screen.matches){
        indicator(3700)
    }else{
        indicator(4500)
    }
}

//intersection observer does this best
//window.onload =()=>match_screen();
window.onresize =()=>{
  if(currentSectionNavBtn)  highlightTheClickedBtn(currentSectionNavBtn);
};
window.onclick =(e)=>{
    if(!e.target.closest('nav') 
       && !e.target.closest('.menu') 
       && nav.className.includes('open')){
        open_menu()
    }
};

const sections = document.querySelectorAll('section')
const observer = new IntersectionObserver(entries=>{
if(entries[0].isIntersecting){
               if(entries[0].target.className === 'intro'){
                currentSectionNavBtn = home_btn;
                select_nav_btn(home_btn,projects_btn,about_btn,contacts_btn)
                 }else  if(entries[0].target.id === 'about_me'){
                    currentSectionNavBtn = about_btn;
                    select_nav_btn(about_btn,projects_btn,home_btn,contacts_btn)
                 }else  if(entries[0].target.className === 'projects'){
                    currentSectionNavBtn = projects_btn;
                    select_nav_btn(projects_btn,home_btn,about_btn,contacts_btn)
                  }else  if(entries[0].target.className === 'contact'){   
                    currentSectionNavBtn = contacts_btn;
                    select_nav_btn(contacts_btn,projects_btn,about_btn,home_btn)
                 }

        }
});

sections.forEach(section=>{
    observer.observe(section);
})


function siter(){
fetch('https://chuksjohnleo.github.io')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const title = doc.querySelector('head title').textContent;
    const ogImage = doc.querySelector('head meta[property="og:image"]').getAttribute('content');
    const description = doc.querySelector('head meta[name="Description"]').getAttribute('content');
    const ogt = doc.querySelector('head meta[name="og:title"]').getAttribute('content');
  
    // const ogTitle = doc.querySelector('head meta[property="og:title"]').getAttribute('content');
    console.log(title, ogImage,description,ogt)//,ogTitle);
  })
  .catch(error => console.error(error));
}