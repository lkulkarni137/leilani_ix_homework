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

    createCompleteButton() {
        const completeButton = document.createElement('radio');

        completeButton.setAttribute('class', 'form-check-input');
        completeButton.setAttribute('name', 'flexRadioDefault');
        completeButton.setAttribute('id', 'flexRadioDefault1');
        completeButton.addEventListener('click', () => {
            console.log('Complete button was clicked');
        })

        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn-close');
        deleteButton.addEventListener('click', () => {
            console.log('Delete button was clicked')
        });

        return [completeButton, deleteButton];

    }
}

const ui = new UI()
