const getDateFormat = (date_to_convert) => {
  //todo - fix the shitty dates
  var date = new Date(date_to_convert);

  const day_int = date.getDay();
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const day = days[day_int];

  const date_int = date.getDate();
  const nth = function (d) {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const m = date.getMonth();
  const month = months[m];

  const year = date.getFullYear();

  const date_output = `${day} ${date_int + nth(date_int)} ${month} ${year}`;
  //returns in the format "Saturday 8th January 2021"
  return date_output;
};

export default getDateFormat;
