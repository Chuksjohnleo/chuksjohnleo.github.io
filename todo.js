const activity = document.getElementById('activity');
const time = document.getElementById('time');
const date = document.getElementById('date');
const container = document.getElementById('container');
const boundary = document.getElementById('boundary');

const todos = document.getElementById('todos');
 

let todoarray = JSON.parse(localStorage.getItem('todos'));


 function loadTodo(){
    todos.innerHTML = '';
    todoarray.forEach(todo=>{
        let p = document.createElement('p');
        
           p.innerHTML =
           `
        <article class='article'>
          <div class='activity' ><em>ACTIVITY:</em> ${todo.todo_}</div>
          <div><em>TIME:</em>   ${todo.set_time}</div>
          <div><em>DATE:</em>  ${todo.set_date}</div>
          <div class='remove_btn'><span>Remove</span><div>
        </article>  
          `
          todos.appendChild(p);
       })
       remove_todo();
 }

let new_entry = {
    todo_:'',
    set_time:'',
    set_date:''
}


function add_to_entries(){
   new_entry.todo_ = activity.value;
   new_entry.set_time = time.value;
   new_entry.set_date = date.value;
   todoarray.push(new_entry);
   localStorage.setItem('todos',JSON.stringify(todoarray));

   let p2 = document.createElement('p');
   p2.innerHTML =
   `
<article class='article' >
    <div class='activity' ><em>ACTIVITY:</em> ${new_entry.todo_}</div>
    <div><em>TIME:</em>    ${new_entry.set_time}</div>
    <div><em>DATE:</em>   ${new_entry.set_date}</div>
    <div class='remove_btn'><div id='btn' ><span class='span_btn'>Remove</span></div></div>
</article>
    `
    todos.appendChild(p2);
    boundary.scrollIntoView();
    remove_todo();
};
const add = document.getElementById('add');
add.addEventListener('click',()=>{
    container.style.display = 'flex';
})
function done(){
    container.style.display = '';
}
function remove_todo(){
    let remove_btn = todos.querySelectorAll('span');
    let todo_p = todos.querySelectorAll('p')
    remove_btn.forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
                todoarray.splice(i,1);
                todo_p[i].remove();
                localStorage.setItem('todos',JSON.stringify(todoarray));
                loadTodo();
        });
    });
    
};
window.onload =()=>{
    if(localStorage.getItem('todos')){
      return  loadTodo();
    };
    todoarray = [];
}

   
