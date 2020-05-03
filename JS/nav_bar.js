var nav_icon = document.querySelector('.nav_icon');
var nav = document.querySelector('.nav');

nav.style.right = '-200px';
nav_icon.addEventListener('click', function () {
    if(nav.style.right === '-200px'){
        nav.style.right = '0';
    }
    else{
        nav.style.right = '-200px';
    }
})