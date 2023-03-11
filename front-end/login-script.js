const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  if (username === 'hacktues' && password === 'hacktues123456') {
    document.getElementById("validLabel").innerHTML = "Login successful!";
    document.getElementById("validLabel").style.color = "green";
  } else {
    document.getElementById("validLabel").innerHTML = "Invalid username or password!";
    document.getElementById("validLabel").style.color = "red";
  }
});


