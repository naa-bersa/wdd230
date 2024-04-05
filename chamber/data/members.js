const gridButton = document.getElementById('grid-button');
const listButton = document.getElementById('list-button');
const memberContainer = document.getElementById('member-container');

// Fetch and parse JSON data
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

// Display members as cards
// Display members as cards
function displayMembersAsGrid(members) {
    memberContainer.innerHTML = '';
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');
  
      // Create elements for each member detail
      const name = document.createElement('h2');
      name.textContent = member.name;
      const address = document.createElement('p');
      address.textContent = 'Address: ' + member.address;
      const phone = document.createElement('p');
      phone.textContent = 'Phone: ' + member.phone;
      const website = document.createElement('p');
      website.textContent = 'Website: ' + member.website;
      const membershipLevel = document.createElement('p');
      membershipLevel.textContent = 'Membership Level: ' + member.membershipLevel;
  
      // Image element
      const image = document.createElement('img');
      image.src = member.image; // Assuming images are stored in 'images/' folder
      image.alt = member.name;
  
      // Append all elements to card
      card.appendChild(name);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(membershipLevel);
      card.appendChild(image);
  
      // Append card to memberContainer
      memberContainer.appendChild(card);
    });
}

// Display members as list items
function displayMembersAsList(members) {
    memberContainer.innerHTML = '';
    const list = document.createElement('ul');
    list.classList.add('member-list'); // Optional: Add a class to style the list
  
    members.forEach(member => {
      const listItem = document.createElement('li');
  
      // Create elements for each member detail
      const name = document.createElement('h2');
      name.textContent = member.name;
      const address = document.createElement('p');
      address.textContent = 'Address: ' + member.address;
      const phone = document.createElement('p');
      phone.textContent = 'Phone: ' + member.phone;
      const website = document.createElement('p');
      website.textContent = 'Website: ' + member.website;
      const membershipLevel = document.createElement('p');
      membershipLevel.textContent = 'Membership Level: ' + member.membershipLevel;
  
      // Image element
      const image = document.createElement('img');
      image.src = member.image; // Assuming images are stored in 'images/' folder
      image.alt = member.name;
  
      // Append all elements to list item
      listItem.appendChild(name);
      listItem.appendChild(address);
      listItem.appendChild(phone);
      listItem.appendChild(website);
      listItem.appendChild(membershipLevel);
      listItem.appendChild(image);
  
      // Append list item to list
      list.appendChild(listItem);
    });
  
    // Append list to memberContainer
    memberContainer.appendChild(list);
  }
  
  // Toggle between grid and list views
  gridButton.addEventListener('click', async () => {
    const members = await fetchMembers();
    displayMembersAsGrid(members);
  });
  
  listButton.addEventListener('click', async () => {
    const members = await fetchMembers();
    displayMembersAsList(members);
  });
  
  // Fetch members on page load
  fetchMembers().then(members => displayMembersAsGrid(members)); //

// Fetch members on page load
fetchMembers();