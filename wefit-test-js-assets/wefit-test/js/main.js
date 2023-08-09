/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const verticalBtnGroup = document.querySelector(
  '.btn-group-vertical'
);

verticalBtnGroup.classList.remove('btn-group-vertical');
verticalBtnGroup.classList.add('btn-group');

verticalBtnGroup.setAttribute(
  'aria-label',
  'Horizontal button group'
);

const btnSecondaryElements = document.querySelectorAll(
  '.btn.btn-secondary'
);

btnSecondaryElements.forEach((element) => {
  element.style.marginRight = '10px';
  element.style.borderRadius = '5px';
});

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
const jumbotronElement = document.querySelector('.jumbotron');
jumbotronElement.style.textAlign = 'end';
jumbotronElement.style.backgroundColor = 'var(--gray)';
jumbotronElement.style.color = 'var(--white)';

const buttonElement = document.querySelector('.btn-primary');
buttonElement.classList.remove('btn-primary');
buttonElement.classList.add('btn-success');

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const colLgElement = document.querySelectorAll('.col-lg-3');
colLgElement[0].style.order = 1;
colLgElement[1].style.order = 3;
colLgElement[2].style.order = 2;
colLgElement[3].style.order = 0;

const animalBtn = colLgElement[0].querySelector('.btn-primary');
animalBtn.classList.remove('btn-primary');
animalBtn.classList.add('btn-success');

/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const listGroup = document.querySelector('.list-group');

const fourthItem = document.createElement('li');
fourthItem.classList.add('list-group-item');
fourthItem.textContent = 'Quarto item';

const fifthItem = document.createElement('li');
fifthItem.classList.add('list-group-item');
fifthItem.textContent = 'Quinto item';

listGroup.appendChild(fourthItem);
listGroup.appendChild(fifthItem);

const listItems = listGroup.querySelectorAll('.list-group-item');
listItems.forEach((item, index) => {
  if (index === 3) {
    item.classList.add('active');
  } else {
    item.classList.remove('active');
  }
});
