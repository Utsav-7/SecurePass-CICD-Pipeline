// Generate a random password
function generatePassword() {
  var length = document.getElementById('length').value;
  var includeLetters = document.getElementById('includeLetters').checked;
  var includeNumbers = document.getElementById('includeNumbers').checked;
  var includeSpecialChars = document.getElementById('includeSpecialChars').checked;

  var charset = "";
  if (includeLetters) {
    charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumbers) {
    charset += "0123456789";
  }
  if (includeSpecialChars) {
    charset += "!@#$%^&*()_-+=<>?/{}~";
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById('generated-password').value = password;
  document.getElementById('password_strength').value = calculatePasswordStrength(password);
}

// Calculate password strength
function calculatePasswordStrength(password) {
  var password_strength = 0;
  if (password.match(/[a-z]+/)) {
    password_strength += 25;
  }
  if (password.match(/[A-Z]+/)) 
  {
    password_strength += 25;
  }
  if (password.match(/[0-9]+/)) {
    password_strength += 25;
  }
  if (password.match(/[^a-zA-Z0-9]+/)) {
    password_strength += 25;
  }

  return password_strength  ;
}
