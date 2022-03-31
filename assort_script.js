var cloth_button = document.getElementById('cloth');
var cloth_elem = document.getElementById('cloth_block');
var shoes_button = document.getElementById('shoe');
var shoes_elem = document.getElementById('shoes_block');
var access_button = document.getElementById('access');
var access_elem = document.getElementById('access_block');
var good = document.getElementById('goods');
var cb = 0;
var sb = 0;
var ab = 0;
var pop_up_window = document.getElementById('pop-up');
var menu = document.getElementById('menu');
var pop_op = false;

pop_up_window.style.display = 'none';


cloth_button.onclick = function () {
    if (cb == 0) {
        cloth_elem.style.display = 'none';
        cb++;
    } else {
        cloth_elem.style.display = 'flex';
        cb--;
    }
    if (cb + ab + sb == 3) {
        good.style.height = '100vh';
    } else if (cb + ab + sb == 2) {
        good.style.height = '150vh';
    } else if (cb + ab + sb == 1) {
        good.style.height = '250vh';
    } else if (cb + ab + sb == 0) {
        good.style.height = '350vh';
    } else {}
}
shoes_button.onclick = function () {
    if (sb == 0) {
        shoes_elem.style.display = 'none';
        sb++;
    } else {
        shoes_elem.style.display = 'flex';
        sb--;
    }
    if (cb + ab + sb == 3) {
        good.style.height = '100vh';
    } else if (cb + ab + sb == 2) {
        good.style.height = '150vh';
    } else if (cb + ab + sb == 1) {
        good.style.height = '250vh';
    } else if (cb + ab + sb == 0) {
        good.style.height = '350vh';
    } else {}
}
access_button.onclick = function () {
    if (ab == 0) {
        access_elem.style.display = 'none';
        ab++;
    } else {
        access_elem.style.display = 'flex';
        ab--;
    }
    if (cb + ab + sb == 3) {
        good.style.height = '100vh';
    } else if (cb + ab + sb == 2) {
        good.style.height = '150vh';
    } else if (cb + ab + sb == 1) {
        good.style.height = '250vh';
    } else if (cb + ab + sb == 0) {
        good.style.height = '350vh';
    } else {}
}

function open_popUp() {
    pop_up_window.style.display = 'block';
    menu.style.display = 'none';
}

function close_popUp() {
    pop_up_window.style.display = 'none';
    menu.style.display = 'block';
}

function order_consult() {
    alert("Order confirmed. Await for call")
}
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const blockId = anchor.getAttribute('href').substr(1);
        document.getElementById(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
}
