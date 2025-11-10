// ~ ======> HTML Elements
var spaceShip = document.querySelector('.spaceShip');
var chickenContainer = document.querySelector('.chickenContainer');
var sound = document.querySelector('audio');

// ! ======> App variables
var leftPosition;
var topPosition;

// & ======> Functions
for(var i=0; i<100; i++) {
    chickenContainer.innerHTML +=`
        <img src="./assets/imgs/chicken.png" class="chicken" alt="">
    `;
}

// ^ ======> Events
document.addEventListener('mousemove', function(e) {
    spaceShip.style.transition = '';
    spaceShip.style.left = `${e.clientX}px`;
    spaceShip.style.top = `${e.clientY}px`;

    leftPosition = e.clientX;
    topPosition = e.clientY;
});

document.addEventListener('keydown', function(e) {
    spaceShip.style.transition = 'left 500ms, top 500ms';
    switch(e.code) {
        case 'ArrowRight':
            leftPosition += 50;
            spaceShip.style.left = `${leftPosition}px`;
            break;
        case 'ArrowLeft':
            leftPosition -= 50;
            spaceShip.style.left = `${leftPosition}px`;
            break;
        case 'ArrowUp':
            topPosition -= 50;
            spaceShip.style.top = `${topPosition}px`;
            break;
        case 'ArrowDown':
            topPosition += 50;
            spaceShip.style.top = `${topPosition}px`;
            break;
        case 'Space':
            sound.play();
            break;
    }
});

document.addEventListener('click', function(){
    sound.play();
});