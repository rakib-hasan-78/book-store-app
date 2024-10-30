import { errorManagement } from "./errorDiv.js";
import { inputUtilitiesHandlers } from "./inputUtilities.js";
import { isbnPattern, namePattern } from "./regex.js";
import { CustomError } from './customError.js';

const form = document.getElementById('main-form');

inputUtilitiesHandlers();

/* 1st grab containers */
/* 2nd input validation */
/* 3rd invalid msg for errors */
/* 4th table will appeared if no table exist */
/* 5th btn handler---> all valid will add data to the table */

const inputValidation = () => {
  const containers = document.querySelectorAll('#main-form .input-group');
  [...containers].map(container=>{

    const spanIcon = container.querySelector('span i');
    const input = container.querySelector('input');
    const cancelIcon = container.querySelector('.x-icon');

    input.addEventListener('input', (e)=>{
        try {
            let validation;
            if (e.target.name==='title') {
                validation = namePattern(e.target.value, 'Title');
            } 
            if (e.target.name==='author') {
                validation = namePattern(e.target.value, 'Author Name')
            }
            if (e.target.name === 'isbn') {
              validation = isbnPattern(e.target.value);
            }
            let {isValid , error} = validation;
            if (isValid) {
                spanIcon.classList.remove( 'text-primary' ,'text-danger');
                spanIcon.classList.add('text-success');
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
                errorManagement('d-flex', 'd-none', '');

            } else if (e.target.value === '') {
                spanIcon.classList.remove('text-primary', 'text-success');
                spanIcon.classList.add('text-danger');
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');

                throw new CustomError(error);

            } else {

              spanIcon.classList.remove('text-primary', 'text-success');
              spanIcon.classList.add('text-danger');
              input.classList.remove('is-valid');
              input.classList.add('is-invalid');

              throw new CustomError(error);
            }
        } catch (error) {

          errorManagement('d-none', 'd-flex', `${error.message}`);
            
        }
    });

  });   
};

inputValidation();

