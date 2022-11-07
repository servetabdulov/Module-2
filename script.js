let listMain = document.querySelector('#listMain');
let input = document.querySelector('#inputMain');
let toDoList = document.querySelector('.toDoList');
let bttn = document.querySelector('.buttonMain');
let downIcon = document.querySelector('.downIcon');
let upIcon = document.querySelector('.upIcon');




  toDoList.addEventListener('keyup', addNewItem);
  bttn.addEventListener('click', addNewInput);
  downIcon.addEventListener('click', sortArrayFunc);
  upIcon.addEventListener('click', sortArrayReverseFunc);


document.getElementById("inputMain").focus();
let list = document.querySelector('.list');
function addNewItem(a) {

  if (a.keyCode == 13 && list.style.display != 'none') {
      // list create olur
      let line = document.createElement('li');
      line.className = 'list_item item';
      line.setAttribute('draggable', true);
      line.innerHTML = `${input.value}<ion-icon name="close-outline" class="close"></ion-icon>`;

      //list add olur
      listMain.appendChild(line);

      //clear input 
      input.value = "";

      //first style
      list.style.display = 'none';
      toDoList.style.paddingBottom = " 0.536vw";
      console.log(list.style.display);

      deleteItem();
      //delete  funksiyasi

      //drag item funksiyası
      dragAreaFunc();
     
     
      if (listMain.children.length >= 4) {
        toDoList.scrollTop = toDoList.scrollHeight;
      }
 //scroll yaradılması
      
    
  }
}

function addNewInput(e) {
  list.style.display = 'flex';
  // downIcon.style.opacity = '.3';

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
let sortArray = [];
function sortArrayFunc() {
  // downIcon.style.opacity = '1';
  let li = document.querySelectorAll('li');
  sortArray = [];
  li.forEach(item => {
    sortArray.push(item.innerHTML);
  })

  //sorting massiv
  sortArray.sort();

  for (let i = 0; i < (li.length); i++) {
    li[i].innerHTML = sortArray[i];
  }

  //delete funksiyası
  deleteItem();
  let upIcon = document.querySelector('.upIcon');
downIcon.style.display='none';
upIcon.style.display='flex';

  //drag funksiyası
  dragAreaFunc();

}

function sortArrayReverseFunc() {

upIcon.style.display='none';
downIcon.style.display='block';
// downIcon.style.opacity='233232';
li=document.querySelectorAll('li');
sortArray=[];
li.forEach(element => {
sortArray.push(element.innerHTML);
})
//sorting massiv
sortArray.sort().reverse();

  //sorting html
  for (let i = 0; i < (li.length) ; i++) {
    li[i].innerHTML = sortArray[i];
  }
  //drag funksiyası
   dragAreaFunc();
}

function dragAreaFunc() {
  const drag = document.querySelector('.wrapper');
  new Sortable(drag, {
    animation: 350
  })
}