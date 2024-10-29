
export const cancelIconVisibility = (input, cancelIcon) => {
    if (!input.value.trim()){
        cancelIcon.classList.add('d-none');
    } else {
        cancelIcon.classList.remove('d-none');
    }
};
 