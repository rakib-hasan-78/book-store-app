
import { cancelIconVisibility } from './cancelIcon.js';

export const inputUtilitiesHandlers = () => {
    
    const containers = document.querySelectorAll('#main-form .input-group');
    [...containers].forEach(container=>{
        const spanIcon = container.querySelector('span i');
        const input = container.querySelector('input');
        const cancelIcon = container.querySelector('.x-icon');
    
        input.addEventListener('focus', (e)=>{
            spanIcon.classList.add('text-primary');
        });
        
        /* when input is blur */
        input.addEventListener('blur', (e)=>{
            spanIcon.classList.remove('text-primary');
        });
    
        /* cancel icon visibility */
        input.addEventListener('input', (e)=>{
            cancelIconVisibility(input, cancelIcon);
        });

        /* cancel icon handler */

        cancelIcon.addEventListener('click', ()=>{
            input.value = '';
            cancelIcon.classList.add('d-none');
        });
    
    });
};