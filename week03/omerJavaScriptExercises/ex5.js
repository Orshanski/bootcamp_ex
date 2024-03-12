function currentDate() {
  let result = {};
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();
  let dayOfWeek = today.getDay();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  result = (`Today is ${days[dayOfWeek]}, the ${day} of ${months[month]} ${year}`);
  document.getElementById('result').innerHTML = result;
}