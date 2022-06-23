const inputValue = document.getElementById('abc');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result').innerHTML;
let text;

function ediTime() {
    let hours = 0;
    let mins = 0;
    let time = ""
    let twelveHours = inputValue.value;
    time = twelveHours.split(":");
    hours = parseInt(time[0]);
    mins = parseInt(time[1]);
    
    if ( hours >= 13) {
        return `${hours - 12}:${mins} pm.`;
    }
    if (hours <= 12) {
        return `${hours}:${mins} am.`;
    }
}


submitBtn.addEventListener('click', () => {
    document.getElementById('result').innerHTML = ediTime(inputValue);
});



