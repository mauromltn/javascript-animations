const input = document.getElementById("timeInput");
const button = document.getElementById("startBtn");

let countdown = 0;  //Variable for setInterval

button.addEventListener("click", () => {
    let time = parseInt(input.value);  //Get the value of the input as an integer

    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number");
        return;
    }

    clearInterval(countdown);  //Clear the previous countdown in case there is one

    countdown = setInterval(() => {
        time--;
        input.value = time;

        if (time <= 0) {
            clearInterval(countdown);  //Stop the countdown
            alert("Time's up!");
        }
    }, 1000);  //Run the function every 1000ms
});