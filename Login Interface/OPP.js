class LoginForm {
    constructor(emailField, passwordField, btn) {
      this.emailField = emailField;
      this.passwordField = passwordField;
      this.btn = btn;
      this.btn.onclick = () => this.submit();
    }
  
    submit() {
      if (this.emailField.value.trim() === "" || this.passwordField.value === "") {
        alert("Fill in all fields");
      } else if (this.passwordField.value.length <= 8) {
        alert("Your password should be more than 8 characters long");
      } else if (this.emailField.value.includes("@") && this.emailField.value.includes(".")) {
        alert("Successful login");
      } else {
        alert("Please enter a valid email address");
      }
    }
  }
  
  const emailField = document.getElementById("email-field");
  const passwordField = document.getElementById("password-field");
  const btn = document.querySelector("button");
  
  const loginForm = new LoginForm(emailField, passwordField, btn);
