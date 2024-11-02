export const closeFunction = (closeBtn, childOne, childTwo) => {
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const body = document.querySelector('body');
            if (childOne) body.removeChild(childOne);
            if (childTwo) body.removeChild(childTwo);
        });
    }
}
