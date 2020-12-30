function msToTime(s) {
  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;
  var days = hrs / 24;

  if (days >= 1) {
    return days + " Days and" + hrs + " Hours ago";
  } else if (hrs >= 1) {
    return hrs + " Hours and " + mins + "  Minutes ago";
  } else if (mins >= 1) {
    return mins + " Minutes ago";
  } else if (secs >= 1) {
    return secs + " Seconds ago";
  } else {
    return ms + " Mili Seconds ago";
  }
}

export default msToTime;
