// Create and style the car element
const car = document.createElement('div');
car.id = 'car';
car.style.cssText = `
    width: 10px;
    height: 10px;
    background-color: blue;
    position: fixed;
    z-index: 9999;
`;
document.body.appendChild(car);

// Initial position and movement variables
let carX = window.innerWidth / 2;
let carY = window.innerHeight / 2;
const carSpeed = 3;
let dx = 0;
let dy = 0;

// Update car's position
function updateCarPosition() {
    carX = Math.max(0, Math.min(carX + dx, window.innerWidth - car.offsetWidth));
    carY = Math.max(0, Math.min(carY + dy, window.innerHeight - car.offsetHeight));
    car.style.left = carX + 'px';
    car.style.top = carY + 'px';
    requestAnimationFrame(updateCarPosition);
}
requestAnimationFrame(updateCarPosition);

// Event listeners for movement control
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowRight':
        case 'd':
            dx = carSpeed;
            break;
        case 'ArrowLeft':
        case 'a':
            dx = -carSpeed;
            break;
        case 'ArrowUp':
        case 'w':
            dy = -carSpeed;
            break;
        case 'ArrowDown':
        case 's':
            dy = carSpeed;
            break;
    }
});

document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowRight':
        case 'd':
        case 'ArrowLeft':
        case 'a':
            dx = 0;
            break;
        case 'ArrowUp':
        case 'w':
        case 'ArrowDown':
        case 's':
            dy = 0;
            break;
    }
});
