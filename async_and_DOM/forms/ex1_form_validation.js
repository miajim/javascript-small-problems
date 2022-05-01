document.addEventListener('DOMContentLoaded', () => {
  const VALIDATION_MESSAGES = {
    "first_name": '',
    "last_name": '',
    'email': 'Please enter a valid email.',
    'password': 'Password must be at least 10 characters long.',
    "phone_number": 'Please enter a valid Phone Number.'
  }

  let form = document.querySelector('form');

  function formatId(id) {
    return id.split('_').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  form.addEventListener('blur', function(event) {
    event.preventDefault();
    let input = event.target;
    if (input.tagName === 'INPUT') {
      let inputError = document.querySelector(`#${input.id} + span.error_message`);
      if (input.validity.valueMissing) {
        inputError.textContent = `${formatId(input.id)} is a required field.`
        input.classList = 'invalid_field';
      } else if (!input.checkValidity()) {
        // inputError.textContent = input.validationMessage;
        inputError.textContent = VALIDATION_MESSAGES[input.id];
        input.classList = 'invalid_field';
      } 
    }
  }, true);

  form.addEventListener('focus', function(event) {
    event.preventDefault();
    let input = event.target;
    if (input.tagName === 'INPUT') {
      let inputError = document.querySelector(`#${input.id} + span.error_message`);
      input.classList = '';
      if (inputError.textContent) { inputError.textContent = ''; }
    }
  }, true);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    let formErrors = document.querySelector('p.form_errors');
    let inputElements = form.querySelectorAll('input.invalid_field');
    if (inputElements.length > 0) {
      formErrors.textContent = 'Fix errors before submitting this form.'
    } else {
      formErrors.textContent = '';
      alert('Form was successfully submitted.');
    }
  });
});