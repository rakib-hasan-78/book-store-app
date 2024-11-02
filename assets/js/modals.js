import { closeFunction } from "./functions.js";
import { dataUpdatedModal } from "./updatemodal.js";

export const basicModal = (task, tasks) => {
    const body = document.querySelector('body');
    // Add backdrop for modal
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    body.append(backdrop);
    
    const basicModal = document.createElement('div');
    basicModal.className = 'modal fade show d-flex align-items-center justify-content-center w-100  mx-auto';
    basicModal.innerHTML = `
        <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="fw-bloder">Are  you sure about it ?</p>
                </div>
                <div class="modal-footer d-flex flex-row align-items-center justify-content-center">
                <button type="button" class="btn btn-primary btn-open">Yes</button>
                <button type="button" class="btn btn-secondary btn-cancel">Close</button>
                </div>
            </div>
        </div>
    `;
    body.append(basicModal);

    // Close modal on button click
    let cancel = basicModal.querySelector('.btn-close');
    closeFunction(cancel, backdrop, basicModal);


    // Additional close button for the modal
    let cancelBtn = basicModal.querySelector('.btn-cancel');
    closeFunction(cancelBtn, backdrop, basicModal);

    // Opening editing Modal--->

    let openingEditModal = basicModal.querySelector('.btn-open');
    openingEditModal.addEventListener('click', (e)=>{
        e.preventDefault();
        body.removeChild(basicModal);
        body.removeChild(backdrop);

        dataUpdatedModal(task, tasks);
        
    })

};

export const removeModal = (tasks) => {

    const body = document.querySelector('body');
    // Add backdrop for modal
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    body.append(backdrop);

    const newElement = document.createElement('div');
    newElement.className = ' modal fade show d-flex align-items-center justify-content-center w-100  mx-auto';
    newElement.innerHTML = `
        <div class="modal-dialog w-100 mx-auto">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="fw-bloder">Are  you sure about it ?</p>
                </div>
                <div class="modal-footer d-flex flex-row align-items-center justify-content-center">
                <button type="button" class="btn btn-primary btn-open">Yes</button>
                <button type="button" class="btn btn-secondary btn-cancel">Close</button>
                </div>
            </div>
        </div>
    `
    body.append(newElement);

    // Close modal on button click
    let cancel = newElement.querySelector('.btn-close');
    closeFunction(cancel, backdrop, newElement);
    
    
    // Additional close button for the modal
    let cancelBtn = newElement.querySelector('.btn-cancel');
    closeFunction(cancelBtn, backdrop, newElement);
}

/* modal-dialog modal-dialog-centered */