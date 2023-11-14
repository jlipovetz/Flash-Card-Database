const signupFormHandler = async (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#first-name-signup").value.trim();
  const lastName = document.querySelector("#last-name-signup").value.trim();
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (firstName && lastName && username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

      // go to home page after signing up
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
  else
    alert("All fields are required.");
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
