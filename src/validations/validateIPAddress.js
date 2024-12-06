// ipAddressValidator.js
const validateIPAddress = (ipAddress) => {
  if (!ipAddress) {
    return 'IP address is required';
  }

  // Regular expression for validating IP address
  const ipAddressRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/;

  if (!ipAddressRegex.test(ipAddress)) {
    return 'Invalid IP address format';
  }

  return '';
};

export default validateIPAddress;