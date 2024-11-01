export const basicModal = () => {
    const body = document.querySelector('body');
    // Add backdrop for modal
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    body.append(backdrop);
    
    const basicModal = document.createElement('div');
    basicModal.className = 'modal fade show d-flex align-items-center justify-content-center';
    basicModal.style.display = 'block';
    basicModal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Book</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>Edit the book details here.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    `;
    body.append(basicModal);

    // Close modal on button click
    basicModal.querySelector('.btn-close').addEventListener('click', () => {
        body.removeChild(backdrop);
        body.removeChild(basicModal);
    });
};
