// passwordValidator.js
const validatePassword = (password) => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters';
  } else if (!/\d/.test(password)) {
    return 'Password must contain at least one number';
  } else if (!/[!@#$%^&*]/.test(password)) {
    return 'Password must contain at least one special character';
  } else {
    return '';
  }
};

export default validatePassword;