// Function to get the current date in the format yyyy-mm-dd
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Function to calculate the difference in days between two dates
function calculateDaysDifference(date1, date2) {
  const diffInTime = new Date(date2) - new Date(date1);
  return Math.round(diffInTime / (1000 * 3600 * 24));
}

// Function to display appropriate message based on visit history
function displayMessage() {
  const lastVisitDate = localStorage.getItem('lastVisitDate');
  const currentDate = getCurrentDate();

  if (!lastVisitDate) {
    // First visit
    document.querySelector('.sidebar').innerHTML += '<p>Welcome! Let us know if you have any questions.</p>';
  } else {
    const daysDifference = calculateDaysDifference(lastVisitDate, currentDate);
    if (daysDifference === 0) {
      // Visited today
      document.querySelector('.sidebar').innerHTML += '<p>Back so soon! Awesome!</p>';
    } else {
      // Visited before
      const plural = daysDifference === 1 ? '' : 's';
      document.querySelector('.sidebar').innerHTML += `<p>You last visited ${daysDifference} day${plural} ago.</p>`;
    }
  }

  // Update last visit date in localStorage
  localStorage.setItem('lastVisitDate', currentDate);
}

// Call displayMessage when the page loads
displayMessage();