// usernameValidator.js
const validateUsername = (username) => {
  if (!username) {
    return 'Username is required';
  } else if (username.length < 6) {
    return 'Username must be at least 6 characters';
  } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
    return 'Username can only contain letters and numbers';
  } else {
    return '';
  }
};

export default validateUsername;
