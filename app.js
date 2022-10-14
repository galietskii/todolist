const input = document.querySelector('.text-product'),
    buttonEnter = document.querySelector('.button-add'),
    tasks = document.querySelector('.todo__list-tasks ul');

const arrTasks = [];
buttonEnter.addEventListener('click', function () {
       const newTodo = {
            task: input.value,
            checked: false,
        }
    arrTasks.push(newTodo)
    taskList();
})
function taskList() {
    let listTask;
    arrTasks.forEach(function (elem, i) {
        listTask += `
        <li>${elem.task}</li>
        `;
    })
    tasks.innerHTML = listTask;
}