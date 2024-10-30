export const errorManagement = (removeClass, addClass ,text) => {
    let errorDiv = document.getElementById('error-toast');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger text-danger-subtle w-50 mx-auto d-flex align-items-center justify-content-between shadow-md rounded-3';
        errorDiv.id = `error-toast`;

        /* inside elements */
        /* error text */
        const spanText = document.createElement('span');
        spanText.id = 'error-text';
        errorDiv.append(spanText);

        /* x-mark */
        const spanIcon = document.createElement('span');
        spanIcon.id='error-div-handler';
        spanIcon.className ='fw-bold'
        spanIcon.innerHTML = `<i class="bi bi-x-lg cp"></i>`;
        errorDiv.append(spanIcon);


        /* set error div position */
        const sectionTitle = document.querySelector('.section-title');
        sectionTitle.insertAdjacentElement('beforebegin', errorDiv);


        /* set error text into this span  */
        errorDiv.classList.remove(removeClass);
        errorDiv.classList.add(addClass);
        spanText.innerText = text || '';

        /* cancel handler */
        document.getElementById('error-div-handler').addEventListener('click', () => {
            errorDiv.classList.remove('d-flex');
            errorDiv.classList.add('d-none');
            spanText.innerText = '';
        })
    }

    errorDiv.classList.remove(removeClass);
    errorDiv.classList.add(addClass);
    document.getElementById('error-text').textContent = text || '';
    
}
