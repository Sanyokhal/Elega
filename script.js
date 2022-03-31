AOS.init();

function al_but() {
    alert("Button clicked")
}

function redir() {
    location.href = 'assortment.html';
}

//-------------------------------------
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
