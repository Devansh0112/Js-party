const timeInput = document.querySelector("#inputTime");
const timer = document.querySelector("#timer");
const timerButton = document.querySelector("#timer-button");
const reset = document.querySelector("#reset");

const startTimer = () => {
  let timeValue = timeInput.value;
  if (timeValue !== "") {
    timeInput.style.display = "none";
    timerButton.style.display = "none";
    let interval = setInterval(() => {
      if (timeValue === 1) {
        clearInterval(interval);
        reset.style.display = "block";
      }
      timeValue -= 1;
      timer.innerHTML = timeValue;
    }, 1000);
    timer.innerHTML = timeValue;
    timer.style.display = "block";
  } else {
    timeInput.style.borderColor = "red";
  }
};

const resetPage = () => {
    reset.style.display = 'none';
    timer.style.display = 'none';
    timeInput.style.display = 'block';
    timerButton.style.display = 'block';
};
