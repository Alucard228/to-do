let addBtn = document.querySelector('#addBtn');
let input = document.querySelector('#taskInput');
let list = document.querySelector('#list');

addBtn.addEventListener('click', function () {
    addTask();
    taskInput.value = '';
});

doneTask();
deleteTask();

function addTask(event) {
    let li = document.createElement("li");
    li.textContent = input.value;
    list.append(li);
    li.classList.add('item');

    let item = document.createElement('item');

    let div = document.createElement('div');
    item.append(div);

    div.className = 'item__btns';

    let i = document.createElement('i');
    i.className = "fa-regular fa-square-check";
    div.append(i);

    let i1 = document.createElement('i1');
    i1.className = "fa-regular fa-trash-can";
    div.append(i1);
}

function doneTask() {
    list.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('fa-square-check')) {
            target.closest('i').classList.toggle('done');
            localStorage.setItem('htmlLS', list.innerHTML);
        }
    })

}

function deleteTask() {
    deleteButtom.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('fa-trash-can')) {
            target.closest('i1').remove();
        }
    })
}