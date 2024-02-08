const input = document. querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

 function displayList(item) {
      const li = document.createElement('li');
      const deleteButton = document.createElement('button');
  
      li.textContent = item;
      deleteButton.textContent = '❌';
      // deleteButton.classList.add('delete');

      deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
      });


      li.appendChild(deleteButton);

      list.appendChild(li);
};

chaptersArray.forEach((chapter) => {
 displayList(chapter);
});

function deleteChapter(chapter) {
  // step 1
  chapter = chapter.slice(0, chapter.length - 1);

  // step 2
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // step 3
  setChapterList();
}
 
function getChapterList(){
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray))
}


button.addEventListener('click', (e) => {
  e.preventDefault();

    if (input.value) {
      displayList(input.value);
      chaptersArray.push(input.value);
      setChapterList()
    

      input.value = '';
      input.focus();

    } else{
        input.focus();
    }





});