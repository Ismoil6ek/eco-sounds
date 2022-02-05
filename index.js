const img = document.querySelector('.main-wrapper')

const bird0 = document.querySelector('.bird-0')
const bird1 = document.querySelector('.bird-1')
const bird2 = document.querySelector('.bird-2')
const bird3 = document.querySelector('.bird-3')
const bird4 = document.querySelector('.bird-4')
const bird5 = document.querySelector('.bird-5')

const play = document.querySelector('.play-button')
const pause = document.querySelector('.pause-button')

const b0 = document.getElementById("b0")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
var current = b0;

bird0.addEventListener('click', () => {
    img.style.backgroundImage = "url('assets/img/forest.jpg')";
    current.pause();
    b0.play();
    current = b0;
    play.style.display = "none";
    pause.style.display = "block";
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})
bird1.addEventListener('click', () => {
    img.style.backgroundImage = "url('assets/img/solovey.jpg')";
    current.pause();
    b1.play();
    current = b1;
    play.style.display = "none";
    pause.style.display = "block";
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})
bird2.addEventListener('click', () => {
    img.style.backgroundImage = "url('assets/img/drozd.jpg')";
    current.pause();
    b2.play();
    current = b2;
    play.style.display = "none";
    pause.style.display = "block";
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})
bird3.addEventListener('click', () => {
    img.style.backgroundImage = "url('assets/img/zarynka.jpg')";
    current.pause();
    b3.play();
    current = b3;
    play.style.display = "none";
    pause.style.display = "block";
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})
bird4.addEventListener('click', () => {
    img.style.backgroundImage = "url('assets/img/javoronok.jpg')";
    current.pause();
    b4.play();
    current = b4;
    play.style.display = "none";
    pause.style.display = "block";
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})
bird5.addEventListener('click', () => {
    img.style.backgroundImage = "url('assets/img/slavka.jpg')";
    current.pause();
    b5.play();
    current = b5;
    play.style.display = "none";
    pause.style.display = "block";
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})

play.addEventListener('click', () => {
    play.style.display = "none";
    pause.style.display = "block";
    if (current == undefined) {
        b0.play();
        current = b0;
    }
    current.play();
})
pause.addEventListener('click', () => {
    pause.style.display = "none";
    play.style.display = "block";
    current.pause();
})
var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("nav-item");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

const firstlogo = document.querySelector('.firstlogo')
const secondlogo = document.querySelector('.secondlogo')

firstlogo.addEventListener('click', () => {
    firstlogo.style.display = "none"
    secondlogo.style.display = "block"
})
secondlogo.addEventListener('click', () => {
    secondlogo.style.display = "none"
    firstlogo.style.display = "block"
})