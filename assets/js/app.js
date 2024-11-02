import { btnToUndoHandler, completeBtnHandlers, editBtnHandler, removeBtnHandler } from "./btnHandlers.js";
import { CustomError } from "./customError.js";
import { errorManagement } from "./errorDiv.js";
import { inputUtilitiesHandlers } from "./inputUtilities.js";
import { inputValidation } from "./inputValidation.js";
import { isbnPattern, namePattern } from "./regex.js";

inputUtilitiesHandlers();
inputValidation();

const addToSubmit = () => {
  // grabbing elements 
  const tableFrame = document.getElementById('table-book-lists');
  const form = document.getElementById('main-form');
  let allValid = true;
  let tableSight;
  let tasks = [];
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const containers = document.querySelectorAll('#main-form .input-group');
    [...containers].forEach(container=>{
      const input = container.querySelector('input');
      let isValid = false;
      let error = null;
      try {
        if(input.name=== 'title') {
          ({isValid , error}= namePattern(input.value.trim(), 'Title'));
          if (!isValid)  throw new CustomError(error);
        } else if (input.name === 'author') {
          ({isValid, error} = namePattern(input.value.trim(), 'Author Name'));
          if (!isValid) throw new CustomError(error);
        } else if (input.name === 'isbn') {
          ({isValid, error} = isbnPattern(input.value.trim()));
          if(!isValid) throw new CustomError(error);
        }
      } catch (error) {
        allValid = false;
        errorManagement('d-none', 'd-flex', `${error.message}`);
      }
    });
    if (allValid) {
      let tbody = document.querySelector('tbody');
      const bookTitle = document.getElementById('book-name');
      const bookAuthor = document.getElementById('book-writer');
      const isbnNumber = document.getElementById('isbn-number');
      // to check if table is visible---->
      if(tableSight);
      else{
        tableSight = tableFrame.classList.remove('d-none'); 
    }

    let newTask = {
      id:`${new Date().getTime()}`,
      title: bookTitle.value.trim(),
      author: bookAuthor.value.trim(),
      isbn: isbnNumber.value.trim(),
      completed: false,
      buttons : {
        completed: `<button  class="btn btn-success success-btn">Done</button>`,
        edit: `<button  class="btn btn-warning edit-btn">Edit</button>`,
        undo: `<button  class="btn btn-info undo-btn" disabled >Undo</button>`,
        remove: `<button  class="btn btn-danger remove-btn">Remove</button>`,
      } 
    }
    tasks.push(newTask);
    tbody.innerHTML = '';
    [...tasks].forEach((task , index)=>{
      let row = document.createElement('tr');
      row.setAttribute('id', task.id);
      row.innerHTML = `
      <td>${index <9 ? '0'+(index + 1) : index + 1}</td>
      <td>${task.id}</td>
      <td>${task.title}</td>
      <td>${task.author}</td>
      <td>${task.isbn}</td>
      <td>${task.buttons.completed}</td>
      <td>${task.buttons.edit}</td>
      <td>${task.buttons.undo}</td>
      <td>${task.buttons.remove}</td>
      `
      tbody.append(row);
    })

    form.reset();
    bookTitle.classList.remove('is-valid','is-invalid');
    bookAuthor.classList.remove('is-valid','is-invalid');
    isbnNumber.classList.remove('is-valid','is-invalid');
    const xIcons = document.querySelectorAll('.x-icon');
    [...xIcons].forEach(xIcon=>xIcon.classList.add('d-none'));
    const icons = document.querySelectorAll('.icon');
    [...icons].forEach(icon=>icon.classList.remove('text-success'));
    
  }
    completeBtnHandlers(tasks); 
    btnToUndoHandler(tasks);
    editBtnHandler(tasks);
    removeBtnHandler(tasks);
  });
  
}
addToSubmit();