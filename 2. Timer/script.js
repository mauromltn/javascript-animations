const input = document.getElementById("timeInput");
const clear = document.getElementById("clear");
const reset = document.getElementById("reset");
const stop = document.getElementById("stop");
const start = document.getElementById("start");

let countdown = null;  //Variable for setInterval
let remainingTime = input.value;  //Variable to store the initial time

start.addEventListener("click", () => {
    if (countdown !== null) return;

    let time = parseInt(input.value);  //Get the value of the input as an integer

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number");
        return;
    }

    clearInterval(countdown);  //Clear the previous countdown in case there is one
    remainingTime = time;  //Store the initial time

    countdown = setInterval(() => {
        time--;
        input.value = time;

        if (time <= 0) {
            clearInterval(countdown);  //Stop the countdown
            alert("Time's up!");
            countdown = null;  //Reset the countdown
        }
    }, 1000);  //Run the function every 1000ms
});

stop.addEventListener("click", () => {
    clearInterval(countdown);
    countdown = null;
});

reset.addEventListener("click", () => {
    clearInterval(countdown);
    input.value = remainingTime;
    countdown = null;
});

clear.addEventListener("click", () => {
    clearInterval(countdown);
    input.value = "";
});