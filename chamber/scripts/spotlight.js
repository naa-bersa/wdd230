// Fetch JSON data source of members
async function fetchMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        return data.members;
    } catch (error) {
        console.error('Error fetching members:', error);
        return [];
    }
}

// Function to filter members with silver or gold membership levels
function filterQualifiedMembers(members) {
    return members.filter(member => member.membershipLevel === 'Silver' || member.membershipLevel === 'Gold');
}

// Function to randomly select two to three qualified members
function selectRandomMembers(qualifiedMembers) {
    const numMembers = Math.min(Math.floor(Math.random() * 2) + 2, qualifiedMembers.length); // Randomly select 2 to 3 members
    const randomMembers = [];
    const shuffledMembers = qualifiedMembers.sort(() => Math.random() - 0.5); // Shuffle the array

    for (let i = 0; i < numMembers; i++) {
        randomMembers.push(shuffledMembers[i]);
    }

    return randomMembers;
}

// Function to display spotlight advertisements on the home page
function displaySpotlightAdvertisements(members) {
    const spotlightContainer = document.querySelector('.spotlight-advertisements');
    const qualifiedMembers = filterQualifiedMembers(members);
    const randomMembers = selectRandomMembers(qualifiedMembers);

    // Populate HTML with member information
    randomMembers.forEach(member => {
        const advertisement = document.createElement('div');
        advertisement.classList.add('advertisement');
        advertisement.innerHTML = `
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <a href="${member.website}" target="_blank"> Website</a>
            <img src="${member.image}" alt="Member Image">
            <!-- Add additional member details as needed -->
        `;
        spotlightContainer.appendChild(advertisement);
    });
}

// Fetch members data and display spotlight advertisements on page load
document.addEventListener('DOMContentLoaded', async () => {
    const members = await fetchMembers();
    displaySpotlightAdvertisements(members);
});