// Start Nav Bar
$('.navbuttons').click(function(){
    $(this).toggleClass('crossxs');
});

const searchInput = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');

// Show the clear button when typing
searchInput.addEventListener('input', () => {
  clearBtn.style.display = searchInput.value ? 'block'  : 'none';
});

// Clear input field when the clear button is clicked
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  clearBtn.style.display = 'none';
  searchInput.focus();
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


// Start Show More
const showMore = document.querySelector('.show-more');
showMore.addEventListener('click',function(){
  document.location.href = "./pages/showmore.html";
})

//dropdown 

document.addEventListener('DOMContentLoaded', function () {
  const dropdownLink = document.querySelector('.dropdown > a');
  const arrowIcon = dropdownLink.querySelector('.uparrow');
  const dropdown = dropdownLink.closest('.dropdown');  // Get the parent dropdown div

  // Toggle the icon between down and up
  function toggleArrow() {
      if (arrowIcon.classList.contains('fa-angle-down')) {
          arrowIcon.classList.remove('fa-angle-down');
          arrowIcon.classList.add('fa-angle-up');
      } else {
          arrowIcon.classList.remove('fa-angle-up');
          arrowIcon.classList.add('fa-angle-down');
      }
  }

  // Toggle the icon when clicking inside the dropdown link
  dropdownLink.addEventListener('click', function (e) {
      e.stopPropagation();  
      toggleArrow();
  });

  // Toggle the icon when clicking outside of the dropdown
  document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {  // Check if click is outside the dropdown
          // If the icon is down, change to up, if it's up, change to down
          if (arrowIcon.classList.contains('fa-angle-down')) {
              toggleArrow();  // Change to up
          } else if (arrowIcon.classList.contains('fa-angle-up')) {
              toggleArrow();  // Change to down
          }
      }
  });
});


