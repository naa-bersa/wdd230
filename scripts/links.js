const baseURL = "https://naabersa.github.io/wdd230/";
const linksURL = "https://naabersa.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data.weeks);
}

function displayLinks(weeks) {
  const activityLinks = document.getElementById("activity-links");

  weeks.forEach(week => {
    const listItem = document.createElement("li");
    const weekHeader = document.createElement("span");
    weekHeader.textContent = week.week + ": ";
    listItem.appendChild(weekHeader);

    week.links.forEach(link => {
      const anchor = document.createElement("a");
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);

      const separator = document.createTextNode(" | ");
      listItem.appendChild(separator);
    });

    // Remove the last separator
    listItem.removeChild(listItem.lastChild);
    activityLinks.appendChild(listItem);
  });
}


getLinks();