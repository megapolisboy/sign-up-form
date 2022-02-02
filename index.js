const passwordField = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.getElementById('error');

const manageError = () => {
  if (passwordField.value === confirmPassword.value) {
    passwordField.classList.remove('error');
    confirmPassword.classList.remove('error');
    error.classList.add('invisible');
  } else {
    console.log(false);
    passwordField.classList.add('error');
    confirmPassword.classList.add('error');
    error.classList.remove('invisible');
  }
};

passwordField.addEventListener('change', manageError);
confirmPassword.addEventListener('change', manageError);
