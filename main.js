 // butttons
 let moveToEditBtn = document.getElementById('editbtn');

 let styleBtn = document.getElementById('stylebtn');

 let addNewElementBtn = document.getElementById('addbtn');

 let saveChangeBtn = document.getElementById('savebtn');

 // areas

 let getDataForEdit = document.getElementById('getdata');

 let editArea = document.getElementById('editdata');

 let areaForEdit = document.getElementById('editarea');

 let getArea = document.querySelector('.editeddata');

 let styleArea = document.getElementById('stylearea');


 // start JS

 // move data for edit

 moveToEditBtn.addEventListener('click', moveData);

 function moveData() {
     areaForEdit.value = getDataForEdit.innerHTML;
     getArea.classList.add('visible');
     editArea.style.display = 'block';
     styleArea.classList.remove('visible');
 }

 // move back edited data to data area

 saveChangeBtn.addEventListener('click', returnData);

 function returnData() {
     getDataForEdit.innerHTML = areaForEdit.value;
     areaForEdit.value = '';
     getArea.classList.remove('visible');
 }

 // get style area visible, edit area hidden

 styleBtn.addEventListener('click', styleData);

 function styleData() {
     styleArea.classList.add('visible');
     editArea.style.display = 'none';
 }

 // set data font-size from radio button

 document.querySelector('.fontsize').addEventListener('click', setFontSize);

 function setFontSize() {
     let fontsize = document.getElementsByName('font');

     for (let i = 0; i < fontsize.length; i++) {
         if (fontsize[i].checked) {

             getDataForEdit.style.fontSize = fontsize[i].value + 'px';

             break;
         }
     }
 }

 // set data font style from select

 document.querySelector('.getfont').addEventListener('change', setFontStyle);

 function setFontStyle() {
     let fontStyle = document.getElementById('getfontfamily').selectedIndex;
     let options = document.getElementById('getfontfamily').options;

     getDataForEdit.style.fontFamily = options[fontStyle].value;

 }

 // set text and background colors

 let textColorBtn = document.getElementById('setfontcolor');

 let backColorBtn = document.getElementById('setbackcolor');

 let colorBox = document.getElementById('colors');

 let currentInject = null;

 textColorBtn.addEventListener('click', function setTextColor() {
     colorBox.style.visibility = 'visible';
     currentInject = 'color';
 });

 backColorBtn.addEventListener('click', function setBackgroundColor() {
     colorBox.style.visibility = 'visible';
     currentInject = 'backgroundColor';
 });

 document.addEventListener('click', (ev) => {
     const target = ev.target;
     if (target.classList.contains('box')) {
         const color = getComputedStyle(target).backgroundColor;
         getDataForEdit.style[currentInject] = color;
         colorBox.style.visibility = 'hidden';
     }
 });


 // set data font weight

 let boldText = document.querySelector('#boldtext');

 boldText.addEventListener('change', function setBold() {
     if (boldText.checked) {
         getDataForEdit.style.fontWeight = boldText.value;
     } else {
         getDataForEdit.style.fontWeight = '';
     }
 });

 // set data font style

 let cursiveText = document.querySelector('#cursivetext');

 cursiveText.addEventListener('change', function setCursive() {
     if (cursiveText.checked) {
         getDataForEdit.style.fontStyle = cursiveText.value;
     } else {
         getDataForEdit.style.fontStyle = '';
     }
 });

 //  show add element area

 let addElementArea = document.querySelector('#addelementarea');

 addNewElementBtn.addEventListener('click', showAddElementArea);

 function showAddElementArea() {
     getDataForEdit.style.display = 'none';
     editArea.style.display = 'none';
     moveToEditBtn.style.display = 'none';
     styleBtn.style.display = 'none';
     addElementArea.style.display = 'block';
 }

 // show add table area and add list area

 document.querySelector('.add__radio').addEventListener('click', showElements);

 function showElements() {
     let addNewElement = document.getElementsByName('addelem');

     for (let i = 0; i < addNewElement.length; i++) {
         if (addNewElement[i].checked && addNewElement[i].value === 'addtable') {

             document.querySelector('.add__table').style.display = 'block';
             document.querySelector('.add__list').style.display = 'none';
         }
         if (addNewElement[i].checked && addNewElement[i].value === 'addlist') {
             document.querySelector('.add__list').style.display = 'block';
             document.querySelector('.add__table').style.display = 'none';
         }
     }
 }

 // add list to databox

 let countOfLi = document.querySelector('#listItem');

 let addListBtn = document.querySelector('#addlistbtn');

 //  get a value of list style 

 let getStyle = document.querySelector('#listType');

 let listStyleType = null;

 getStyle.addEventListener('change', setMarkType);

 function setMarkType(e) {

     let $el = e.target;

     listStyleType = $el.options[$el.selectedIndex].value;
 }

 // create a list with items

 addListBtn.addEventListener('click', addNewList);

 function addNewList() {

     let newList = document.createElement('ul');
     newList.style.listStyle = listStyleType;
     let itemData = 'Item ';

     for (let i = 1; i <= countOfLi.value; i++) {

         let newItem = document.createElement('li');

         newItem.innerHTML = itemData + i;

         newList.appendChild(newItem);

     }

     // add new created list with items to edit area

     areaForEdit.appendChild(newList);
     let newContent = areaForEdit.innerHTML;
     let addNewContent = areaForEdit.value + newContent;
     areaForEdit.value = addNewContent;

     getDataForEdit.style.display = 'block';
     editArea.style.display = 'block';
     moveToEditBtn.style.display = 'inline';
     styleBtn.style.display = 'inline';
     addElementArea.style.display = 'none';
 }