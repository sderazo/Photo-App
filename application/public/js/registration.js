// require the user to enter a username that is 3 or more alphanumeric characters AND start
// with A-Z or a-z
document.getElementById('username').addEventListener('input', 
function(ev) {
    let alpha = /^[A-Za-z]+$/;
    let usernameElement = ev.target;
    let username = usernameElement.value;
    if(username.length > 3 && (username.charAt(0).match(alpha))) {
        usernameElement.classList.add('valid-text');
        usernameElement.classList.remove('invalid-text');
        usernameElement.setCustomValidity("");
        return true;
    }
    else{
        usernameElement.classList.add('invalid-text');
        usernameElement.classList.remove('valid-text');
        usernameElement.setCustomValidity("Enter a username that begins with a character and is 3 or more alphanumeric characters in length")
        return false;
    }
});

// require the user to enter a password that is 8 or more characters AND contains at least
// 1 upper case letter AND 1 number and 1 of the following special characters:
document.getElementById('password').addEventListener('input',
function pW(et) {
    // declare upperCase, num, specChar variables
    let upperCase = /[A-Z]/;
    let num = /[0-9]/;
    let specChar = /[/*-+!@#$^&~[\]]/;

    // declare passwordElement and password variables
    let passwordElement = et.target;
    let password = passwordElement.value;
    // if password length is >= 8 AND has at least 1 upperCase AND 1 num AND 1 of specChar
    if(password.length > 8 && (password.match(upperCase && num && specChar))) {
    // / * - + ! @ # $ ^ & ~ [ ]
        //show that text is valid
        passwordElement.classList.add('valid-text');
        passwordElement.classList.remove('invalid-text');  
        passwordElement.setCustomValidity("");  
        return true;
    }
    else {
        //show that text is invalid
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');
        passwordElement.setCustomValidity("Enter a password that is 8 or more characters AND contains at least 1 upper case letter AND 1 number and 1 of the following special characters: / * - + ! @ # $ ^ & ~ [ ]");
        return false;

    }
});

// require that the password and confirm password inputs are the same
// write similar function header
document.getElementById('confirmpassword').addEventListener('input',
function pW(ev) {
    let confirmpasswordElement = ev.target;
    let confirmpassword = confirmpasswordElement.value;

    let password = document.getElementById('password').value;
    //let valid = document.getElementById('submit').addEventListener('click');
    //let confirmpassword = document.getElementById('confirmpassword').value;
    // if confirmpassword == password
    if (confirmpassword == password) {
        // display a green border
        confirmpasswordElement.classList.add('valid-text');
        confirmpasswordElement.classList.remove('invalid-text'); 
        confirmpasswordElement.setCustomValidity("");
        return true;
        //return true;
    }
    else {
        // display a red border around confirm password
        // pop up box idea: Passwords do not match
        confirmpasswordElement.classList.add('invalid-text');
        confirmpasswordElement.classList.remove('valid-text'); 
        //return false;
        confirmpasswordElement.setCustomValidity("Passwords do not match");
        return false;
    }

} );

//document.getElementById('submit').addEventListener('click', 
// write a function
// function check