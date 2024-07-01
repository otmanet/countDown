const getCountDownId = document.getElementById("countDownId");
const button = document.querySelector("button");
var initialTimer = 0;
var countDownMillisecond = 6000000;
var refCountDown;
function countDownId() {
  refCountDown = setInterval(() => {
    initialTimer += 1000;
    const distance = countDownMillisecond - initialTimer;
    CalculateCountDown(distance);
    if (initialTimer == countDownMillisecond) {
      getCountDownId.innerHTML = "Resend";
      clearInterval(refCountDown);
    }
  }, 1000);
}

function CalculateCountDown(dist) {
  var days = Math.floor(dist / (1000 * 60 * 60 * 24));
  var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((dist % (1000 * 60)) / 1000);
  var CountDownTimer =
    (days < 10 ? "0" + days : days) +
    ":" +
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  getCountDownId.innerHTML = CountDownTimer;
}
button.addEventListener("click", (event) => {
  clearInterval(refCountDown);
  initialTimer = 0;
  countDownMillisecond = 6000000;
  CalculateCountDown(countDownMillisecond);
  countDownId();
});
countDownId();
