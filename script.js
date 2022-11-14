let toDoList = document.querySelector('.toDoList');
let bttn = document.querySelector('.action');
let downIcon = document.querySelector('.downIcon');
downIcon.addEventListener('click', sortArrayReverseFunction);
let upIcon = document.querySelector('.upIcon');
upIcon.addEventListener('click', sortArrayFunction);

const newInput = ()=>{
    const liInput = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('listLi');
    toDoList.append(div);
    const input = document.createElement('input');
    input.type = 'text';
    input.classList.add('toDoListInput');
    input.placeholder = 'Nəsə yazın';
    div.append(input);
    const inputRemoveDiv = document.createElement('div');
    inputRemoveDiv.classList.add('removeInput');
    div.append(inputRemoveDiv);
    const newimg = document.createElement('img');
    newimg.src = "/image/remove.svg";
    inputRemoveDiv.append(newimg);
    inputRemoveDiv.addEventListener('click',()=>{
        input.value = '';
    })
    input.addEventListener('keypress', (event)=>{
        if(event.key === 'Enter'){
            if(input.value != ''){
                const list = document.createElement('div');
                list.classList.add('listMain');
                toDoList.append(list);
                const toDoListInput = document.createElement('input');
                toDoListInput.type = 'text';
                toDoListInput.name = 'Name';
                toDoListInput.setAttribute('value',input.value);
                toDoListInput.classList.add('todo');
                toDoListInput.value = input.value;
                toDoListInput.readOnly=true;
                list.append(toDoListInput);
                const listRemoveDiv = document.createElement('div');
                listRemoveDiv.classList.add('remove');
                list.append(listRemoveDiv);
                listRemoveDiv.append(newimg);
                div.remove();
                listRemoveDiv.addEventListener('click',()=>{
                    list.remove();
                    const conclusive = document.querySelector('.listLi');
                    const count = document.querySelectorAll('.listMain');
                    let a = 0;
                    count.forEach(()=>{
                        a++;
                    })
                    if(a == 0){
                        if(conclusive == null){
                            newInput();
                        }
                    }
                })
                toDoList.scrollTop = toDoList.scrollHeight;
            }
        }
    })
    toDoList.scrollTop = toDoList.scrollHeight;
}
newInput();
bttn.addEventListener('click',newInput);

let sortArray = [];
//Sorting
function sortArrayFunction() {
  let li = document.querySelectorAll('.listMain');
  sortArray = [];
  li.forEach(item => {
    sortArray.push(item.innerHTML);
  })

  sortArray.sort();

  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = sortArray[i];
  }
  
  let downIcon = document.querySelector('.downIcon');
  downIcon.style.display='flex';
  upIcon.style.display='none';
}

//Sorting reverse
function sortArrayReverseFunction() {
  upIcon.style.display='flex';
  downIcon.style.display='none';
  li=document.querySelectorAll('.listMain');
  sortArray=[];
  li.forEach(element => {
  sortArray.push(element.innerHTML);
})
sortArray.sort().reverse();
  for (let i = 0; i < li.length; i++) {
    li[i].innerHTML = sortArray[i];
  }
}

//drag and drop
new Sortable(toDoList, {
  animation: 350
});