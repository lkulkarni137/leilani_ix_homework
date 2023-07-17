class Task {
    constructor(task) {
        this.task = task;
    }
}

class UI {
    constructor() {
        this.button = document.getElementById('button-addon2');
        this.taskans = document.getElementById('task-input');

        this.button.addEventListener('submit', (e) => this.onFormSubmit(e));

        this.tasks = [];

        this.renderTaskList();
    }

    onFormSubmit(e) {
        e.preventDefault();

        if (this.taskans.value == '') {
            return;
        }

        const task = new Task (this.taskans.value);
        this.tasks.push(task);
        this.renderTaskList();

        this.taskans.value = '';
    }

    renderTaskList() {
        this.tableBody.innerHTML = '';

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const tr = this.createTaskListRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    createTaskListRow(task) {
        const tr = document.createElement('tr');

        const tdTask = document.createElement('td');
        const tdComplete = document.createElement('td');
        const tdActions = document.createElement('td');

        tdTask.innerHTML = task.taskans;

        tr.appendChild(tdTask);
        tr.appendChild(tdComplete);
        tr.appendChild(tdActions);

        return tr;
    }

    createCompleteButton(task) {
        const completeButton = document.createElement('radio');

        completeButton.setAttribute('class', 'form-check-input');
        completeButton.setAttribute('name', 'flexRadioDefault');
        completeButton.setAttribute('id', 'flexRadioDefault1');

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn-close');
        deleteButton.addEventListener('click', () => {
            this.onDeleteTaskClicked(task);
        });

        return [completeButton, deleteButton];

    }

    onDeleteButtonClicked(task) {
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }

    loadTasksToLocalStorage() {
        const json = localStorage.getItem('tasks');
        if (json) {
            const taskArr = JSON.parsel(json);
            this.tasks = taskArr.map((task) => Task.fromJSON(task));
        }
    }
}

const ui = new UI()
