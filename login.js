

function login() {
    
    const usernameInput = document.getElementById('uname');
    const passwordInput = document.getElementById('psw');
    const username = usernameInput.value;
    const password = passwordInput.value;



    if (username === 'Junavy' && password === '2006') {

        window.location.href = 'web.html';
    } else {
        alert('Invalid username or password.');
    }
}
