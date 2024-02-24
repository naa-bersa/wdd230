 // Retrieve the visit count from localStorage or initialize it if not present
 let visitCount = localStorage.getItem('visitCount');
 if (!visitCount) {
     visitCount = 0;
 } else {
     visitCount = parseInt(visitCount);
 }

 // Display the visit count on the page
 document.getElementById('visitCount').textContent = visitCount;

 // Increment the visit count and update localStorage
 visitCount++;
 localStorage.setItem('visitCount', visitCount);