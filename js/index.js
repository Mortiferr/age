function currentDate() {
  $("#time").text(Date()); // create a var for date();
}
console.log(Date()); // logs the current date
setInterval(currentDate, 1000);