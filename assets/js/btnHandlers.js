import { basicModal, removeModal } from './modals.js';
export const completeBtnHandlers = (tasks) => {
    /* complete button  */
    const rows = document.querySelectorAll('tbody tr');

    [...rows].forEach(row=>{

        const completedBtn = row.querySelector('.success-btn');
        const editedBtn = row.querySelector('.edit-btn');
        const undoBtn = row.querySelector('.undo-btn');

        let rowId = row.getAttribute('id');

        completedBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let task = tasks.find(task=>task.id === rowId);
              
            if (task) {
                task.completed = !task.completed;
                const bookHeading = row.querySelector('td:nth-child(3)');
                const bookWriter = row.querySelector('td:nth-child(4)');
    
                if (task.completed) {
    
                  bookHeading.classList.add('text-decoration-line-through');
                  bookWriter.classList.add('text-decoration-line-through');
                  editedBtn.setAttribute('disabled', true);
                  completedBtn.setAttribute('disabled', true);
                  undoBtn.removeAttribute('disabled');
                } else {
    
                  bookHeading.classList.remove('text-decoration-line-through');
                  bookWriter.classList.remove('text-decoration-line-through');
                  editedBtn.setAttribute('disabled', false);
                  completedBtn.setAttribute('disabled', false);
    
                }
            }
        });
    });
};

export const btnToUndoHandler = (tasks) => {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row=>{
        const completedBtn = row.querySelector('.success-btn');
        const editedBtn = row.querySelector('.edit-btn');
        const undoBtn = row.querySelector('.undo-btn');
        let rowId = row.getAttribute('id');
        let task = tasks.find(task=>task.id===rowId);

        undoBtn.addEventListener('click' , (e)=>{
            e.preventDefault();

            if (task && task.completed) {
                task.completed = false;
                const bookHeading = row.querySelector('td:nth-child(3)');
                const bookWriter = row.querySelector('td:nth-child(4)');

                /* removing line through */

                bookHeading.classList.remove('text-decoration-line-through');
                bookWriter.classList.remove('text-decoration-line-through');
                editedBtn.removeAttribute('disabled');
                completedBtn.removeAttribute('disabled');
                undoBtn.setAttribute('disabled',true); 
            }
        })
    })
}

/* edit button handler */

export const editBtnHandler = (tasks) => {
    const rows = document.querySelectorAll('tbody tr');
    [...rows].map(row=>{
        const editBtn = row.querySelector('.edit-btn');
        editBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            let rowId = row.getAttribute('id');
            let task = tasks.find(task=>task.id===rowId);
            if (task) {
                basicModal(task, tasks);
            }
        })
    })
}
/* remove button handler */
export const removeBtnHandler = (tasks) => {
    const rows = document.querySelectorAll('tbody tr');
    [...rows].map(row=>{
        const removeBtn = row.querySelector('.remove-btn');
        let rowId = row.getAttribute('id');
        let task = tasks.find(task => task.id === rowId);

        removeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            removeModal(tasks, task, row);
        });
    })
}