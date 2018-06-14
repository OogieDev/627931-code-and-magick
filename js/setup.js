'use strict';


var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', ' Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_NUMBER = 4;


var setup = document.querySelector('.setup').classList.remove('hidden');

var setupSimilar = document.querySelector('.setup-similar').classList.remove('hidden');


// выбор случайного элемента
var getRandomValueFromArray = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};


// создание объекта мага
var getWizard = function () {
  return {
    name: getRandomValueFromArray(NAMES) + ' ' + getRandomValueFromArray(SURNAMES),
    coatColor: getRandomValueFromArray(COAT_COLORS),
    eyesColor: getRandomValueFromArray(EYES_COLORS)
  };
};


var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
console.log(similarWizardTemplate);

// создание уникального мага

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};


var fragment = document.createDocumentFragment();

for (var i = 0; i < WIZARD_NUMBER; i++) {
  fragment.appendChild(renderWizard(getWizard()));
}


similarListElement.appendChild(fragment);
