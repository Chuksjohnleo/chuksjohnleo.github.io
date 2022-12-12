const nav = document.getElementById('nav');
const projects_btn = document.getElementById('projects');
const contacts_btn = document.getElementById('contacts');
const about_btn = document.getElementById('about');
const nav_divs = document.getElementsByClassName('nav_btn');
const email = document.getElementById('email');
const about_me = document.getElementById('about_me');
const projects = document.getElementById('project');
const home_btn = document.getElementById('home');
const intro = document.querySelectorAll('.intro')[0];
const up = document.getElementById('up');


function click_btn(){
    for(let i=0; i<nav_divs.length;i++) {
        let btn =  nav_divs[i];
        btn.style.borderTop = '0px';
    };
};

for(let i=0; i<nav_divs.length;i++) {
    let btn =  nav_divs[i];
    btn.addEventListener('click',()=>{
        click_btn();
        btn.style.borderTop = '3px solid blue';
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
})
function select_nav_btn(current_btn,btn1,btn2,btn3){
    current_btn.style.borderTop = '3px solid blue';
    btn1.style.borderTop = '0px solid transparent';
    btn2.style.borderTop = '0px solid transparent';
    btn3.style.borderTop = '0px solid transparent';
}

// I prefer the long/hard way here 😅😅😅😂😂
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

const small_screen = window.matchMedia('(max-width:300px)');
const medium_screen = window.matchMedia('(min-width:800px) and (max-width:850px)');
const large_screen = window.matchMedia('(min-width:900px)');

function match_screen(){
    if(small_screen.matches){
        indicator(5500);
    } else if(medium_screen.matches){
        indicator(2500)
    }
    else if(large_screen.matches){
        indicator(3700)
    }else{
        indicator(4500)
    }
}
window.onload =()=>match_screen();
window.onresize =()=>match_screen();
window.onscroll =()=> match_screen();