// Function to set the value of the timestamp input field
function setTimestamp() {
    var timestampField = document.getElementById('timestamp');
    var now = new Date();
    timestampField.value = now.toISOString(); // Set the value to current date and time
}

// Call the function when the page loads
window.onload = function() {
    setTimestamp();
};