function calcAge(birthDate) {
  const BirthDate = new Date(birthDate);
  const currentDate = new Date();

  const yearsOld = currentDate.getFullYear() - BirthDate.getFullYear();
  const monthsOld = currentDate.getMonth() - BirthDate.getMonth();
  const DaysOld = currentDate.getDate() - BirthDate.getDate();

  return `${yearsOld} Years ${monthsOld} Months ${DaysOld} Days Old`;
}

// Countdown Timer to a Specific Date
function getTimeRemaining(date) {
  const timeGap = new Date(date).getTime() - new Date().getTime();

  const days = Math.floor(timeGap / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeGap % (1000 * 60)) / 1000);

  return {
    timeGap,
    days,
    hours,
    minutes,
    seconds,
  };
}

function CountdownTimer(date) {
  const timeinterval = setInterval(() => {
    const t = getTimeRemaining(date);
    console.log(
      `${t.days} Days : ${t.hours} Hours : ${t.minutes} Minutes : ${t.seconds} Seconds Left`
    );

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
}

// Display the Day of the Week for a Given Date

function displayDay(date) {
  const givenDate = new Date(date);
  const day = givenDate.getDay();

  let dayName;

  switch (day) {
    case 1:
      dayName = "Monday";
      break;

    case 2:
      dayName = "Tuesday";
      break;

    case 3:
      dayName = "Wednesday";
      break;

    case 4:
      dayName = "Thursday";
      break;

    case 5:
      dayName = "Friday";
      break;

    case 6:
      dayName = "Saturday";
      break;

    case 0:
      dayName = "Sunday";
      break;

    default:
      dayName = "Not a Valid Date";
      break;
  }

  console.log(dayName);
}


