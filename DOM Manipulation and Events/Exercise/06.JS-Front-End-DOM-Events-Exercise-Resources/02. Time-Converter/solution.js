function attachEventsListeners() {

    const inputDays = document.getElementById("days");
    const inputHours = document.getElementById("hours");
    const inputMinutes = document.getElementById("minutes");
    const inputSeconds = document.getElementById("seconds");

    const dayButton = document.getElementById("daysBtn");
    const hourButton = document.getElementById("hoursBtn");
    const minButton = document.getElementById("minutesBtn");
    const secButton = document.getElementById("secondsBtn");

    dayButton.addEventListener("click", convertDay);
    hourButton.addEventListener("click", convertHour);
    minButton.addEventListener("click", convertMin);
    secButton.addEventListener("click", convertSec);

    function convertDay() {
      inputHours.value = inputDays.value * 24;
      inputMinutes.value = inputHours.value * 60;
      inputSeconds.value = inputMinutes.value * 60;
    }    

    function convertHour() {
      inputDays.value = inputHours.value / 24;
      inputMinutes.value = inputHours.value * 60;
      inputSeconds.value = inputMinutes.value * 60;
    } 

    function convertMin() {
      inputSeconds.value = inputMinutes.value * 60;
      inputHours.value = inputMinutes.value / 60;
      inputDays.value = inputHours.value / 24;
    } 

    function convertSec() {
        inputMinutes.value = inputSeconds.value / 60;
        inputHours.value = inputMinutes.value / 60;
        inputDays.value = inputHours.value / 24;
    } 

}