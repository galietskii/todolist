const input = document.querySelector('.text-product'),
    buttonEnter = document.querySelector('.button-add'),
    tasks = document.querySelector('.todo__list-tasks');

const arrTasks = [];
buttonEnter.addEventListener('click', function () {
       const newTodo = {
            task: input.value,
            checked: false,
        }
    arrTasks.push(newTodo)
    
})
