    //   step 1
const todoList=[{name:'make dinner',
dueDate:'2023-7-22'},{
 name:'do the laundry',
 dueDate:'2023-7-22'},{
 name: 'buy groceries',
 dueDate:'2023-7-22'}];

function renderTodoList(){
let todoListHTML='';

for(let i=0;i<todoList.length;i++){
    const todoObject=todoList[i];
    // const name=todoObject.name;
    // const dueDate=todoObject.dueDate;
         // destructuring
    const{name,dueDate}=todoObject;
    // generate html using javascript
    const html=`
    <div>${name}</div>
    <div>${dueDate}</div>
      <button onclick="
      todoList.splice(${i},1);
      renderTodoList();
      " class="delete-todo-button">Delete</button>`;
    todoListHTML+=html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list').innerHTML=
todoListHTML;
}
    renderTodoList();

function addTodo(){
const inputElement= document.querySelector('.js-name-input');
const name=inputElement.value;
const dateInputElement=document.querySelector
('.js-due-date-input');
const dueDate=dateInputElement.value;

todoList.push({name,dueDate});
console.log(todoList);

        // step 2
inputElement.value='';
renderTodoList();

}

const myGirlfriends=['amaka','sabbathina','favour','victoria'];
for (let i=0;i<myGirlfriends.length;i++){
    const babes=myGirlfriends[i];
    console.log(babes);
}




    
    
