const countdown = () => {
  const countDate = new Date("Aug 27, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const remTime = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const remDays = Math.floor(remTime / day);
  const remHours = Math.floor((remTime % day) / hour);
  const remMinutes = Math.floor((remTime % hour) / minute);
  const remSeconds = Math.floor((remTime % minute) / second);

  document.querySelector("#day").innerText = remDays > 0 ? remDays : 0;
  document.querySelector("#hour").innerText = remHours > 0 ? remHours : 0;
  document.querySelector("#minute").innerText = remMinutes > 0 ? remMinutes : 0;
  document.querySelector("#second").innerText = remSeconds > 0 ? remSeconds : 0;
};

setInterval(countdown, 500);