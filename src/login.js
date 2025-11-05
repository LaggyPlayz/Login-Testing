function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUsername(username) {
  return typeof username === "string" && username.length >= 3;
}

function validatePassword(password) {
  return typeof password === "string" && password.length >= 8;
}

function login(email, username, password) {
  if (!validateEmail(email)) return "Invalid email";
  if (!validateUsername(username)) return "Invalid username";
  if (!validatePassword(password)) return "Invalid password";
  return "Login successful";
}

module.exports = { validateEmail, validateUsername, validatePassword, login };
