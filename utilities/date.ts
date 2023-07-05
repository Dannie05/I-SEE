let greetings : "good morning"|"good evening"|"good day"|"Welcome";
const date = new Date();
export const year = date.getFullYear();

function formatTime(time) {
  if (time < 12) {
    greetings = "good morning";
  } else if (time > 15) {
    greetings = "good evening";
  } else if (time > 12 || 12) {
    greetings = "good day";
  } else {
    greetings = "Welcome";
  }
  return greetings.toUpperCase();
}
export const Greeting = formatTime(date.getHours());
function formatHour(Hour){
    if (Hour < 10){
        return "0" + Hour
    }
    return Hour 
}
function formatDay(day) {
  switch (day) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;

    default:
      return "Sunday";
  }
}

const monthUpdate = (month) => {
  switch (month) {
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
    case 11:
      return "December";
      break;

    default:
      return "January";
      break;
  }
};

const formatdate = (date) => {
  if (date < 10) {
    return "0" + date;
  } else {
    return date;
  }
};
const today = formatDay(date.getDay());
const toDate = formatdate(date.getDate());
const month = monthUpdate(date.getMonth());
const Hours =formatHour(date.getHours()%12 || 12) ;
const minutes = formatHour(date.getMinutes());
const seconds = formatHour(date.getSeconds()) ;
setTimeout(()=>{
    
  }, 1000)
export const currentTime = `${Hours}:${minutes}: ${seconds}`;
export const currentdate = ` ${month} ${toDate}, ${year}`;
