const currentDay = document.getElementById("currentDay");
const currentTime = document.getElementById("currentTime");

const now = new Date();

const day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(now);

let options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZoneName: "short",
};

options.fractionalSecondDigits = 3;

const time = new Intl.DateTimeFormat("en-US", options).format(now);

currentDay.innerHTML = day;

currentTime.innerHTML = time;
