'use strict';


var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', ' Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_AMOUNT = 4;


var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');


// выбор случайного элемента
var getRandomEl = function(array) {
  var randomEl = array[Math.floor(Math.random() * array.length)];
  return randomEl;
};


// создание объекта мага
var getWizard = function () {
var wizard = {
 name: getRandomEl(NAMES) + ' ' + getRandomEl(SURNAMES),
 coatColor: getRandomEl(COAT_COLOR),
 eyesColor: getRandomEl(EYES_COLOR)
}
return wizard;
};


var similarListElement = document.querySelector('setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//создание уникального мага
var renderWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARDS_AMOUNT; i++) {
fragment.appendChild(renderWizard(getWizard()));
console.log(fragment);
}


similarListElement.appendChild(fragment);

