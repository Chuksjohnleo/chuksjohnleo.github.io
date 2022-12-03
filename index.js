const nav = document.getElementById('nav');
const projects_btn = document.getElementById('projects');
const contacts_btn = document.getElementById('contacts');
const about_btn = document.getElementById('about');
const nav_divs = document.getElementsByClassName('nav_btn');
const email = document.getElementById('email');
const about_me = document.getElementById('about_me');
const projects = document.getElementById('project');

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
        btn.style.borderTop = '3px solid lightblue';
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
})