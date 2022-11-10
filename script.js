let toDoList = document.querySelector('.toDoList');
toDoList.addEventListener('keyup', newItem);

let bttn = document.querySelector('.buttonMain');
bttn.addEventListener('click', newInput);

let downIcon = document.querySelector('.downIcon');
downIcon.addEventListener('click', sortArrayFunc);

let upIcon = document.querySelector('.upIcon');
upIcon.addEventListener('click', sortArrayReverseFunction);

let input = document.querySelector('#inputMain');
document.getElementById("inputMain").focus();

let list = document.querySelector('.list');

function newItem(enter) {

  if (enter.keyCode == 13 && list.style.display != 'none') {
      let line = document.createElement('li');
      line.className = 'list_item item';
      line.setAttribute('draggable', true);
      line.innerHTML = `${input.value}<ion-icon name="close-outline" class="close"></ion-icon>`;

      //Add etmek
      let listMain = document.querySelector('#listMain');
      listMain.appendChild(line);

      input.value = '';
      list.style.display = 'none';
      toDoList.style.paddingBottom = " 0.536vw";
      
      //delete
      deleteItem();

      //drag function
      dragAreaFunc();

      if (listMain.children.length >= 4) {
        toDoList.scrollTop = toDoList.scrollHeight;
      }
  }
}

function newInput(e) {
  list.style.display = 'flex';
  document.getElementById("inputMain").focus();
}

function deleteItem() {

  const close = document.querySelectorAll('.close');

  close.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.className.includes('close')) {

        e.target.parentElement.remove();

        if (listMain.childElementCount == 0) {
          list.style.display = 'flex';
        }
      }
    });
  });

}
let listLi;
let sortArray = [];
function sortArrayFunc() {
  listLi = document.querySelectorAll('li');
  sortArray = [];
  listLi.forEach(item => {
    sortArray.push(item.innerHTML);
  })
  sortArray.sort();

  for (let i = 0; i < (listLi.length); i++) {
    listLi[i].innerHTML = sortArray[i];
  }

  //delete
  deleteItem();
  let upIcon = document.querySelector('.upIcon');
  downIcon.style.display='none';
  upIcon.style.display='flex';

  //drag function
  dragAreaFunc();
}

function sortArrayReverseFunction() {
  upIcon.style.display='none';
  downIcon.style.display='block';

  listLi=document.querySelectorAll('li');
  sortArray=[];
  listLi.forEach(element => {
  sortArray.push(element.innerHTML);
})
sortArray.sort().reverse();

  for (let i = 0; i < (listLi.length) ; i++) {
    listLi[i].innerHTML = sortArray[i];

  //delete
    deleteItem();
  }
  //drag function
   dragAreaFunc();
}

function dragAreaFunc() {
  const drag = document.querySelector('.wrapper');
  new Sortable(drag, {
    animation: 350
  })
}