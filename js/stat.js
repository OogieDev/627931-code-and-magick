'use strict';

var INITIAL_X = 100;
var INITIAL_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_GAP = 10;
var BAR_Y = 255;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_MARGIN = 50;
var TEXT_MARGIN = 15;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};


var getMaxElement = function (array) {
  var maxElement = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};


var getRandomColor = function () {
  return 'hsl(240, ' + (Math.floor(Math.random() * 100) + '%') + ', 50%)';
};


window.renderStatistics = function (ctx, names, times) {

  for (var i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);
  }

  renderCloud(ctx, INITIAL_X + CLOUD_GAP, INITIAL_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, INITIAL_X, INITIAL_Y, 'white');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', INITIAL_X + TEXT_MARGIN, INITIAL_Y + TEXT_MARGIN * 2);
  ctx.fillText('Список результатов', INITIAL_X + TEXT_MARGIN, INITIAL_Y + TEXT_MARGIN * 3);

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      (ctx.fillStyle = 'rgba(255, 0, 0, 1)');
    } else {
      (ctx.fillStyle = getRandomColor());
    }
    ctx.fillRect(INITIAL_X + BAR_MARGIN + (BAR_WIDTH + BAR_MARGIN) * i, BAR_Y - BAR_HEIGHT * times[i] / maxTime, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], INITIAL_X + (BAR_WIDTH + BAR_MARGIN) * i + BAR_MARGIN, BAR_Y + TEXT_MARGIN);
    ctx.fillText(times[i], INITIAL_X + (BAR_WIDTH + BAR_MARGIN) * i + BAR_MARGIN, BAR_Y - BAR_HEIGHT * times[i] / maxTime - TEXT_MARGIN / 2);
  }
};
