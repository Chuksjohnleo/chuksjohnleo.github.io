sidebar = document.getElementById('sidebar');
const logs = document.getElementById('logs');

const to_top = document.getElementsByClassName('to_top')[0];
//the scroll tab

function topY() {
  logs.scrollIntoView();
  to_top.style.display = 'none';
}
window.onscroll = () => {
  if (window.scrollY > 1000) {
    to_top.style.display = 'block';
  } else {
    to_top.style.display = 'none';
  }
}

//the sidebar
function options() {
  /* sidebar.style.width = '30%' */
  sidebar.classList.add('sidebar-mobile');
  document.getElementById('opt').textContent = '';
}

function back() {
  /*   sidebar.style.width = '' */
  sidebar.classList.remove('sidebar-mobile');
  document.getElementById('opt').textContent = '≡';
}
//drawdown menus at the sidebar
function drawDown() {
  var abc = document.getElementById('tools');
  abc.classList.toggle('drawUpandDown');
  if (document.getElementById('upD').textContent === '►') {
    document.getElementById('upD').textContent = '▼'
  } else {
    document.getElementById('upD').textContent = '►'
  }
}
var art1 = document.getElementsByClassName('art');
var arts = document.getElementById('arts');
const officia = document.getElementById('officia')
//the searchbar
function searcher() {
  var a = arts.value.toUpperCase();
  for (i = 0; i < art1.length; i++) {
    var h1 = art1[i].getElementsByClassName('ah')[0];
    var filterer = h1.textContent || h1.innerText;
    if (filterer.toUpperCase().indexOf(a) > -1) {
      art1[i].style.display = '';
    } else {
      art1[i].style.display = 'none';
    }
  }
}
const view = document.getElementById('scrol');
const home = document.getElementById('home');

const images = document.getElementsByClassName('showcase');
const dots = document.getElementsByClassName('dot');
let currentImage = 0;
function hideImage() {
  for (i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
    dots[i].style.background = 'grey';
  }
}
images[currentImage].style.display = 'inline';
dots[currentImage].style.background = 'blue';
const imageSlider = setInterval(() => {
  hideImage();
  if (currentImage < images.length - 1) {
    currentImage++;
    images[currentImage].style.display = 'inline';
    dots[currentImage].style.background = 'blue';
  } else {
    currentImage = 0;
    images[currentImage].style.display = 'inline';
    dots[currentImage].style.background = 'blue';
  }
}, 4000);
//in case I need it as a function
function slider() {
  setInterval(() => {
    hideImage();
    if (currentImage < images.length - 1) {
      currentImage++;
      images[currentImage].style.display = 'inline';
      dots[currentImage].style.background = 'blue';
    } else {
      currentImage = 0;
      images[currentImage].style.display = 'inline';
      dots[currentImage].style.background = 'blue';
    }
  }, 3000)
}



function myEmail() {
  document.getElementById('social').scrollIntoView();
}
