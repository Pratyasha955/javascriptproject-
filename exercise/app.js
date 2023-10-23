// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  
    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
      // alert('Please enter all fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    } else {
      // Create a user object
      const userData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
      };
  
      // Convert the object to a string and store it
      localStorage.setItem('users', JSON.stringify(userData));
  
  
      // Create a new list item with user details
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(`${userData.name}: ${userData.email}: ${userData.phone}`));
  
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);
  
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
      phoneInput.value = '';
    }
  
  }