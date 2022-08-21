const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');

const buton = document.querySelector('button');



buton.addEventListener('click', () => {

    const item = document.createElement("div");
    item.setAttribute("class", 'item');
    const items = document.querySelector('.container');
    items.appendChild(item);



    let hours = hour.value;
    let minutes = minute.value;
    let seconds = 00;

    setInterval(() => {

        if (seconds > 0) {
            seconds--;
            item.innerText = hours + ":" + minutes + ":" + seconds;

        }
        if (seconds === 0) {
            seconds = 60;
            minutes--;
        }

        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        if (hours <= 0) {
            hours = "00";
        }


    }, 1000);
});