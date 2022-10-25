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
    }
    else{
        usernameElement.classList.add('invalid-text');
        usernameElement.classList.remove('valid-text');
    }
});

//require the user to enter a password that is 8 or more characters AND contains at least
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
    }
    else {
        //show that text is invalid
        passwordElement.classList.add('invalid-text');
        passwordElement.classList.remove('valid-text');

    }
}
);

