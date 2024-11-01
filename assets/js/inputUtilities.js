
import { cancelIconVisibility } from './cancelIcon.js';

export const inputUtilitiesHandlers = () => {
    
    const containers = document.querySelectorAll('#main-form .input-group');
    [...containers].map(container=>{
        const spanIcon = container.querySelector('span i');
        const input = container.querySelector('input');
        const cancelIcon = container.querySelector('.x-icon');

        if (input) {
            
            input.addEventListener('focus', (e)=>{
                if (!input.value && spanIcon) {
                    spanIcon.classList.add('text-primary');
                }
            });
            
            /* when input is blur */
            input.addEventListener('blur', (e)=>{
                if (document.activeElement !== input && spanIcon) {
                    if (!input.value) {
                        spanIcon.classList.remove('text-primary');
                    }
                }
            });
        
            /* cancel icon visibility */
            input.addEventListener('input', (e)=>{
                cancelIconVisibility(input, cancelIcon);
            });
        }
    

        /* cancel icon handler */

        if (cancelIcon) {
            
            cancelIcon.addEventListener('click', ()=>{
                input.value = '';
                input.classList.remove('is-valid', 'is-invalid');
                spanIcon.classList.remove('text-danger', 'text-success');
                spanIcon.classList.add('text-primary')
                cancelIcon.classList.add('d-none');
            });
        }

    
    });
};