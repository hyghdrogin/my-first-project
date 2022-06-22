const inputValue = document.getElementById('abc').value;
const submitBtn = document.getElementById('submit');
let twelveHours;

inputValue.addEventListener ('input', () => {
    twelveHours = parseInt(inputValue, 10)
});

let time;

twelveHours = parseInt(inputValue, 10)
function ediTime(inputValue) {
    time = inputValue.split(":");
    const hour = parseInt(time[0]);
    const minute = parseInt(time[1]);
    
    if ( hour >= 13) {
        return `The time is ${hour} : ${minute} pm.`;
    }
    if (hour <= 12) {
        return `The time is ${hour} : ${minute} am.`;
    }
}

submitBtn.addEventListener('click', () => {
    ediTime(inputValue);
});
