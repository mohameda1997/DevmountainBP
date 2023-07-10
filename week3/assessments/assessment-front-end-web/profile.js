let colorBtn = document.querySelector('#color');
let placeBtn = document.querySelector('#place');
let ritualBtn = document.querySelector('#ritual');

const color = () => {
    alert("Red");
};

const place = () => {
    alert("Basketball Court");
};

const ritual = () => {
    alert("Clapping 3x");
};

colorBtn.addEventListener('click', color);
placeBtn.addEventListener('click', place);
ritualBtn.addEventListener('click', ritual);

