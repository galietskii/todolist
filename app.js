const input = document.querySelector('.text-product'),
    buttonEnter = document.querySelector('.button-add'),
    tasks = document.querySelector('.todo__list-tasks ul'),
    todo = document.querySelector('.tasks');

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
         <input type="checkbox" class="horns" id="item_${i}" name="horns">
        <label for="item_${i}"> ${elem.task}</label>
        </li>
        `;
        tasks.innerHTML = listTask;
    })

}
todo.addEventListener('change', function (e) {
    let idInput = e.target.getAttribute('id');
    let forLabel = todo.querySelector('[for='+ idInput + ']');
    let valueLabel = forLabel.innerHTML;
    console.log(valueLabel)
    arrTasks.forEach(function (elem) {
        if(elem.task === valueLabel) {
            elem.check = !elem.check;
            localStorage.setItem('todo', JSON.stringify(arrTasks));
        }
    });
});
