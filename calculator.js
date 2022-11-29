var input = document.getElementById('ip')
var input2 = document.getElementById('ip2');
//var btn = document.querySelectorAll('bt');
function ans(){
   input2.value = input.value;
   input.value = ""
}
function clean(){
input2.value = ''
}
function del(){
var a = input2.value;
b = a.toString().slice(0,-1);
input2.value = b;
// console.log(b)
}
 function maths(){
   input.value = eval(input2.value);
   //eval() is a dangerous function, don't use for a serious app/site
 }

 function CalScreen(bta){
 return input2.value += bta;}
   var btn = document.getElementsByClassName('bt')
   for(let i = 0;i<btn.length;i++){
      var btnvalue= btn[i].value;
     // function CalScreen(){
     // input2.value += btn[i].value;}
 btn[i].addEventListener('click',CalScreen.bind(this,btnvalue))
}
   
