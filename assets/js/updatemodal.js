
import { closeFunction } from './functions.js';
export const dataUpdatedModal = () => {
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
                                <label for="recipient-name" class="col-form-label">Recipient:</label>
                                <input type="text" class="form-control" id="recipient-name">
                            </div>
                            <div class="mb-3">
                                <label for="message-text" class="col-form-label">Message:</label>
                                <textarea class="form-control" id="message-text"></textarea>
                            </div>
                        </form>
                </div>

                <div class="modal-footer d-flex flex-row align-items-center justify-content-center">
                <button type="button" class="btn btn-primary">Yes</button>
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
}