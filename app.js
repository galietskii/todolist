const input = document.querySelector('.text-product'),
    buttonEnter = document.querySelector('.button-add'),
    tasks = document.querySelector('.todo__list-tasks ul');

let arrTasks = [];
if(localStorage.getItem('todo')) {
    arrTasks = JSON.parse(localStorage.getItem('todo'));
    taskList();
}
buttonEnter.addEventListener('click', function () {
       const newTodo = {
            task: input.value,
            check: false,
        }
    arrTasks.push(newTodo)
    taskList();
       localStorage.setItem('todo', JSON.stringify(arrTasks));
});

function taskList() {
    let listTask = '';
    arrTasks.forEach(function (elem, i) {
        listTask += `
        <li>
         <input type="checkbox" class="horns" name="horns">
        <span>${i}:</span> ${elem.task}
        </li>
        `;
    })
    tasks.innerHTML = listTask;
}
