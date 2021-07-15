function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 01

function createNumberDays() {
  
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  const daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    const numbers = dezDaysList[index];
    const numberList = document.createElement('li');
    
    if (numbers === 24 | numbers === 31) {
      numberList.className = 'day holiday';
      numberList.innerHTML = numbers;
      daysList.appendChild(numberList);
    } else if (numbers === 4 | numbers === 11 | numbers === 18) {
      numberList.className = 'day friday';
      numberList.innerHTML = numbers;
      daysList.appendChild(numberList);
    } else if (numbers === 25) {
      numberList.className = 'day holiday friday';
      numberList.innerHTML = numbers;
      daysList.appendChild(numberList);
    } else {
      numberList.innerHTML = numbers;
      numberList.className = 'day';
      daysList.appendChild(numberList);
    }
  }
}

createNumberDays();

// Exercício 02

function createButtonHoliday(value) {
  const buttonContainer = document.querySelector('.buttons-container');
  const newButton = document.createElement('button');
  newButton.innerHTML = value;
  newButton.id = 'btn-holiday';
  buttonContainer.appendChild(newButton);
}

createButtonHoliday('Feriados');

// Exercício 03

function clickCollorButton() {
  const holidayButton = document.querySelector('#btn-holiday');
  const getHolidays = document.querySelectorAll('.holiday')
  const oldColor = 'rgb(238,238,238)';
  const newColor = 'orange';

  holidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === newColor) {
        getHolidays[index].style.backgroundColor = oldColor; 
      } else {
        getHolidays[index].style.backgroundColor = newColor;
      }
    }
  })
};

clickCollorButton();
