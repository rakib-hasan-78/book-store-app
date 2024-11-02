
import { closeFunction } from './functions.js';
export const dataUpdatedModal = (task, tasks) => {
    const body = document.querySelector('body');
    // Add backdrop for modal
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    body.append(backdrop);

    const basicModal = document.createElement('div');
    basicModal.className = 'modal fade show d-flex align-items-center justify-content-center w-100  mx-auto';
    basicModal.innerHTML = `
        <div class=" modal-dialog w-100 mx-auto">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="updated-title" class="col-form-label">Book's Title:</label>
                                <input type="text" class="form-control" id="updated-title">
                            </div>
                            <div class="mb-3">
                               <label for="updated-author" class="col-form-label">Author's Name:</label>
                               <input type="text" class="form-control" id="updated-author">
                            </div>
                            <div class="mb-3">
                               <label for="updated-isbn" class="col-form-label">ISBN NO:</label>
                               <input type="text" class="form-control" id="updated-isbn">
                            </div>
                        </form>
                </div>

                <div class="modal-footer d-flex flex-row align-items-center justify-content-center">
                <button type="button" class="btn btn-primary btn-update">Yes</button>
                <button type="button" class="btn btn-secondary btn-cancel">Close</button>
                </div>

            </div>
        </div>
        `
    body.append(basicModal);
    // Close modal on button click
    let cancel = basicModal.querySelector('.btn-close');
    closeFunction(cancel, backdrop, basicModal);
    
    
    // Additional close button for the modal
    let cancelBtn = basicModal.querySelector('.btn-cancel');
    closeFunction(cancelBtn, backdrop, basicModal);

    
    const updatedTitle = document.getElementById('updated-title');
    const updatedAuthor = document.getElementById('updated-author');
    const updatedISBN = document.getElementById('updated-isbn');
    const updatedBtn = basicModal.querySelector('.btn-update');

    updatedTitle.value = task.title;
    updatedAuthor.value = task.author;
    updatedISBN.value = task.isbn;
    // Update task in `tasks` array on button click

    updatedBtn.addEventListener('click', () => {
        
        // Retrieve new values from inputs
        const newTitle = updatedTitle.value.trim();
        const newAuthor = updatedAuthor.value.trim();
        const newISBN = updatedISBN.value.trim();
        
        // Find task by ID and update properties
        let matchID = tasks.find((t) => t.id === task.id);
        if (matchID) {

            // Update the displayed data in the table, assuming there’s a way to find and update the correct row
            const titleCell = document.querySelector(`tr[id="${task.id}"] td:nth-child(3)`);
            const authorCell = document.querySelector(`tr[id="${task.id}"] td:nth-child(4)`);
            const isbnCell = document.querySelector(`tr[id="${task.id}"] td:nth-child(5)`);

            if (titleCell) titleCell.textContent = newTitle;
            if (authorCell) authorCell.textContent = newAuthor;
            if (isbnCell) isbnCell.textContent = newISBN;
        }

        // Close the modal
        body.removeChild(basicModal);
        body.removeChild(backdrop);
    });
    
}
