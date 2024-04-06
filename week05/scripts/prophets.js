

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.table(data.prophets); // temporary testing of data retrieval
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let placeofBirth = document.createElement("p");
        let birthDate = document.createElement("p");

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `${prophet.birthdate}`;
        placeofBirth.textContent = `${prophet.birthplace}`;

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.fullName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(placeofBirth);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
};