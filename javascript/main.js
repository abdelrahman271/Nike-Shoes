let bar = document.querySelector('.fa-bars');
let nav = document.getElementById('ul');

bar.onclick = function() {
    if (nav.style.display === 'none') {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
};


let clickableImages = document.querySelectorAll('.clickable');
let show = document.getElementById('img-show');

clickableImages.forEach(function(click) {
    click.onclick = function() {
        show.src = this.src;
    }
});


let form = document.getElementById('form')
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let usernameError = document.getElementById('username-error');
let passwordError = document.getElementById('password-error');

form.addEventListener('submit',function(event){   
    let valid = true;
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (username === '') {
        valid = false;
        usernameError.innerHTML = 'Username is required';
        usernameError.style.display = 'block';
        usernameError.style.color='#c72092';

    } 
    else if (username.length < 3) {
        valid = false;
        usernameError.innerHTML = 'Username must be at least 3 characters';
        usernameError.style.display = 'block';
        usernameError.style.color='#c72092';
        console.log(usernameInput.value)
    }

    if (password === '') {
        valid = false;
        passwordError.innerHTML = 'Password is required';
        passwordError.style.display = 'block';
        passwordError.style.color='#c72092';
    } 
    else if (password.length < 6) {
        valid = false;
        passwordError.innerHTML = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        passwordError.style.color='#c72092';

    }

    if (!valid) {
        event.preventDefault();
    }
});





let arrow = document.getElementById('btn');
window.onscroll = function() {
    if (window.scrollY >= 500) {
    arrow.style.display = 'block';
    } else {
    arrow.style.display = 'none';
    }
}


arrow.onclick= function(){
    scroll({
    left:0,
    top:0,
    behavior:"smooth"
    })
}
