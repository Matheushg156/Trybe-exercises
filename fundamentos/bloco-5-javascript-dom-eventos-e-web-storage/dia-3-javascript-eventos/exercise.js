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

// Exercício 04

function createButtonfriday(dayValue) {
  const buttonContainer = document.querySelector('.buttons-container');
  const buttonFriday = document.createElement('button');
  buttonFriday.innerHTML = dayValue;
  buttonFriday.id = 'btn-friday';
  buttonContainer.appendChild(buttonFriday);
}

createButtonfriday('Friday');

// Exercício 05

function modifyTextButton() {
  const fridayButton = document.querySelector('#btn-friday');
  const getfridays = document.getElementsByClassName('friday');
  const newText = 'Mufasa it is friday';

  fridayButton.addEventListener('click', function() {
    for (let index = 0; index < getfridays.length; index += 1) {
      let originalText = parseInt(getfridays[index].previousElementSibling.innerText) + 1;
      if (getfridays[index].innerHTML !== newText) {
        getfridays[index].innerHTML = newText; 
      } else {
        getfridays[index].innerHTML = originalText;
      }
    }
  })
};

modifyTextButton();

// Exercício 06

function dayMouseOver() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

dayMouseOver();

function dayMouseOut() {
  const days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};


dayMouseOut();

// Exercício 07

function addTask(task) {
  const getMyTasks = document.querySelector('.my-tasks');
  const taskName = document.createElement('span');

  taskName.innerHTML = task;
  getMyTasks.appendChild(taskName);
}

addTask('Estudar: Lógica.'); 

// Exercício 08

function colorTask(color) {
  const getMyTasks = document.querySelector('.my-tasks');
  const legend = document.createElement('div');

  legend.className = 'task';
  legend.style.backgroundColor = color;
  getMyTasks.appendChild(legend);
}

colorTask('yellow');

// Exercício 09

function selectTask() {
  const getLegend = document.getElementsByClassName('task selected');
  const myLegend = document.querySelector('.task');

  myLegend.addEventListener('click', function(event) {
    if (getLegend.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

selectTask();

// Exercício 10

function coloredDay() {
  const taskSelectedLegend = document.getElementsByClassName('task selected');
  const getDays = document.querySelector('#days');
  const taskLegend = document.querySelector('.task');
  const taskColorLegend = taskLegend.style.backgroundColor;

  getDays.addEventListener('click', function(event) {
    const selectColor = event.target.style.color;
    if (taskSelectedLegend.length > 0 && selectColor !== taskColorLegend) {
      const color = taskSelectedLegend[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (selectColor === taskColorLegend && taskSelectedLegend.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

coloredDay();
