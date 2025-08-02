window.addEventListener('DOMContentLoaded', () => {        
      // Get the current count from localStorage (or use 0 if it's the first time)
      let reviewCount = localStorage.getItem('reviewCount');

      // Convert to number and increment, or start at 1 if not yet set
      reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;

      // Save the updated count back to localStorage
      localStorage.setItem('reviewCount', reviewCount);

      // Optional: Display the number of reviews submitted
      document.getElementById('counter').textContent = reviewCount;
    });
  </script>
</head>
<body>
  <h1>Thank you for your review!</h1>
  <p>You have submitted <span id="counter">0</span> review(s) so far.</p>
</body>
</html>
