// Start Nav Bar
$('.navbuttons').click(function(){
    $(this).toggleClass('crossxs');
});
// End Nav Bar

// Start Count Down 
// Set the target time for the discount countdown (e.g., 24 hours from now)
const targetTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now

// Update the countdown every second
const countdown = setInterval(() => {
  // Get the current time
  const now = new Date().getTime();

  // Calculate the time difference between the target time and now
  const timeDifference = targetTime - now;

  // If the countdown is over, stop the timer
  if (timeDifference <= 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Offer expired!";
    return;
  }

  // Calculate hours, minutes, and seconds
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("hours").innerText = String(hours).padStart(2, "0");
  document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
  document.getElementById("seconds").innerText = String(seconds).padStart(2, "0");
}, 1000); // Update every second
// End Count Down