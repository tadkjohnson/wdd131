// window.addEventListener('DOMContentLoaded', () => {
//   // Get the current count from localStorage (or use 0 if it's the first time)
//   let reviewCount = localStorage.getItem('reviewCount');

//   // Convert to number and increment, or start at 1 if not yet set
//   reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

//   // Save the updated count back to localStorage
//   localStorage.setItem('reviewCount', reviewCount);

//   // Optional: Display the number of reviews submitted
//   document.getElementById('counter').textContent = reviewCount;
// });

document.addEventListener("DOMContentLoaded", () => {
  const count = localStorage.getItem("reviewCount");
  const counterDisplay = document.getElementById("reviewCounter");

  if (counterDisplay) {
    if (count) {
      counterDisplay.textContent = `You have  ${count} reviews completed. (hope they are good!)`;
    } else {
      counterDisplay.textContent = "You need to submit a review, as there isn't any.";
    }
  }
});


