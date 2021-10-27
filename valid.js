//Validtion Code For Inputs

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];
var welcome = document.querySelector('.welcome');
var username_error = document.getElementById('username_error');
var pass_error = document.getElementById('pass_error');

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', pass_Verify);

function validated() {
	if (username.value.length < 6) {
		username.style.border = "1px solid red";
		username_error.style.display = "block";
		username_error.textContent = 'Username must be atleast 6 character';
		username.focus();
		return false;
	}
	if (password.value.length < 6) {
		password.style.border = "1px solid red";
		pass_error.style.display = "block";
		pass_error.textContent = 'Password must be atleast 6 character';
		password.focus();
		return false;
	}

}
function username_Verify() {
	if (username.value.length >= 8) {
		username.style.border = "1px solid silver";
		username_error.style.display = "none";
		welcome.textContent = `Welcome, ${username.value} you are successfully Login`;
		return true;
	}
}
function pass_Verify() {
	if (password.value.length >= 5) {
		password.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}

