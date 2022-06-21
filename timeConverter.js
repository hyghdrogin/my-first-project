const inputValue = document.getElementById('abc');
console.log('first', inputValue)
inputValue.addEventListener('oninput', () => {
    console.log(inputValue.value);
})

// let tInput = document.getElementById('abc');
const submitBtn = document.getElementById('submit')
// //Calculate the time conversion
// let twelveHours;
// // tInput.addEventListener ('input', () => {
// //     twelveHours = parseInt(tInput, 10)
// // })
// let emma = tInput.value
// let time;
submitBtn.addEventListener('click', () => {
    //ediTime(tInput);
    console.log('dada');
    console.log('aaa', inputValue);
});
// twelveHours = parseInt(tInput, 10)
// function ediTime(tInput) {
    
//     time = tInput.split(":");
//     const hour = parseInt(time[0]);
//     const minute = parseInt(time[1]);
//     console.log(tInput);

//     console.log(time);
//     if ( hour >= 13) {
//     return `The time is ${hour} : ${minute} pm.`;
//     }

//     if (hour <= 12) {
//     return `The time is ${hour} : ${minute} am.`;
//     }
// }

