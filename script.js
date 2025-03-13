const buttonAdd = document.querySelector(".addtask")
const input = document.querySelector('.inputtask')
const buttonDelete = document.querySelector('.deletetask')

let result = []



function cleaner() {
    input.value = ''
}

function pusherResult(res) {
    if (input.value !== '') {
        result.push(input.value);
    } else { alert('Введите корректное значение!') }
}

function deleterResult() {
    result = [];
}

function createTask() {
    const taskList = document.querySelector('.tasklist');

    let task = document.createElement('div');
    task.className = 'newtask';

    let button = document.createElement('button')
    button.className = 'deletetask';
    button.innerText = '✔';

    button.addEventListener('click', function () {
        taskList.removeChild(task);
    });

    let block = document.createElement('div')
    block.className = 'blocktexttask'

    let text = document.createElement('p')
    text.className = 'tasktext'
    text.innerText = result;

    task.appendChild(button)
    task.appendChild(block)
    block.appendChild(text)
    taskList.appendChild(task);
}

buttonAdd.addEventListener('click', function () {
    pusherResult();
    if (result.length !== 0) {
        createTask(result);
        deleterResult();
        cleaner();
    }
})

document.addEventListener('keyup', event => {
    if (event.code === 'Enter') {
        pusherResult();
        if (result.length !== 0) {
            createTask(result);
            deleterResult();
            cleaner();
        }
    };
});

