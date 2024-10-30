import { inputUtilitiesHandlers } from "./inputUtilities.js";

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

    })

  });   
};

inputValidation();

