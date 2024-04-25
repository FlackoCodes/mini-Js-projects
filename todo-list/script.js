const inputItem = document.querySelector('input');
const addBtn = document.querySelector('.add-btn');
const itemsDiv = document.querySelector('.todo-list-items');

const date = document.getElementById('date-select');


const dateTodo = document.querySelector('.date');
const tododiv = document.querySelector('.todo-list')

const todoList = ['get the job', 'go to Oda', 'network', 'finish school'];

const renderTodo = () =>{
    let allHtml = ""

    todoList.forEach(element => {
        const todo = element;
        const html = `
        <p>${todo} 
        <button class="del-btns">Delete</button>
        </p>
        `
        allHtml+= html
        tododiv.innerHTML = allHtml;
        console.log(allHtml);

});
}

renderTodo()


const addToList = () =>{
   const todoItem = inputItem.value;
   todoList.push(todoItem);
   inputItem.value = "";
   renderTodo()


}

const delelteElement = () =>{
    const delBtn = document.querySelector('.del-btns');
delBtn.addEventListener('click', ()=> console.log('button clicked'));
}
delelteElement()
addBtn.addEventListener('click', addToList);