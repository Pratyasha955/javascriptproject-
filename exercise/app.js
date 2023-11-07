// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Function to fetch and display data from the cloud
function fetchAndDisplayData() {
  axios
    .get('https://crudcrud.com/api/2f34aae9522f41b3b31b1b1d146233eb/appoinmentstore')
    .then((res) => {
      const usersData = res.data;
      for (const email in usersData) {
        const userData = usersData[email];
        addUserToList(userData);
      }
    })
    .catch((err) => console.log(err));
}

// Call the function to fetch and display data when the page loads
fetchAndDisplayData();

// Listen for form submit
myForm.addEventListener('submit', onSubmit);
// Delete event
userList.addEventListener('click', removeItem);
// Delete event
userList.addEventListener('click', editItem);


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

    axios
    .post('https://crudcrud.com/api/2f34aae9522f41b3b31b1b1d146233eb/appoinmentstore',userData )
    .then((res) => {
      console.log(res);
      addUserToList(userData);
    })
    .catch(err => console.log(err));


    // // Convert the object to a string and store it
    // localStorage.setItem(emailInput.value, JSON.stringify(userData));

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }

}

function addUserToList(userData) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${userData.name}: ${userData.email}: ${userData.phone}`));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete';
  li.appendChild(deleteButton);

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.className = 'edit';
  li.appendChild(editButton);

  userList.appendChild(li);
}

// Remove item
function removeItem(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Are You Sure?')) {
      var li = e.target.parentElement;
      userList.removeChild(li);

      // Get the email from the list item's text content
      const email = li.textContent.split(':')[1].trim();

      // Remove the corresponding data from localStorage
      localStorage.removeItem(email);
    }
  }
}

// Remove item
function editItem(e) {
  if (e.target.classList.contains('edit')) {
    var li = e.target.parentElement;
    userList.removeChild(li);
    // Get the email from the list item's text content
    const email = li.textContent.split(':')[1].trim();
     
     // Call the function to populate input fields
     dataFromLocalStorage(email);

    // Remove the corresponding data from localStorage
    localStorage.removeItem(email);
  }
}

// // Function to populate input fields with data from local storage
// function dataFromLocalStorage(email) {
//   const userData = JSON.parse(localStorage.getItem(email));
//   if (userData) {
//     nameInput.value = userData.name;
//     emailInput.value = userData.email;
//     phoneInput.value = userData.phone;
//   }
// }
