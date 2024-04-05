document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('meet-and-greet-banner');
    const closeButton = document.getElementById('close-banner-btn');

    // Function to check if today is Monday, Tuesday, or Wednesday
    function isMeetAndGreetDay() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 (Sunday) to 6 (Saturday)
        return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday, Tuesday, or Wednesday
    }

    // Function to show or hide the meet and greet banner
    function toggleMeetAndGreetBanner() {
        banner.style.display = isMeetAndGreetDay() ? 'block' : 'none';
    }

    
    function closeMeetAndGreetBanner() {
        banner.style.display = 'none';
    }

   
    closeButton.addEventListener('click', closeMeetAndGreetBanner);

    
    toggleMeetAndGreetBanner();
});