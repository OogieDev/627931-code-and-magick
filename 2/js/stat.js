'use strict';

window.renderStatistics = function (ctx, names, times) {
  // список констант
  var HISTOGRAM_HEIGHT = 150;
  var BAR_WIDTH = 40;
  var BETWEEN_SPACE = 50;
  var INITIAL_X = 210;
  var INITIAL_Y = 250;
  var LINE_HEIGHT = 15;
  // shadow
  ctx.save();
  ctx.translate(125, 10);
  ctx.scale(0.9, 1);
  ctx.beginPath();
  ctx.moveTo(22.5, 273.0);
  ctx.bezierCurveTo(22.5, 260.0, 12.0, 221.5, 12.0, 208.5);
  ctx.bezierCurveTo(15.5, 204.0, 19.0, 199.5, 22.5, 195.0);
  ctx.bezierCurveTo(17.5, 188.0, 12.5, 181.0, 7.5, 174.0);
  ctx.bezierCurveTo(5.0, 119.6, 2.5, 65.1, 0.0, 10.6);
  ctx.bezierCurveTo(186.5, 11.6, 370.0, -0.9, 556.5, 0.1);
  ctx.bezierCurveTo(558.5, 9.1, 563.5, 31.6, 565.5, 40.6);
  ctx.bezierCurveTo(558.0, 42.6, 550.5, 44.6, 543.0, 46.6);
  ctx.bezierCurveTo(548.5, 51.1, 554.0, 55.6, 559.5, 60.1);
  ctx.bezierCurveTo(558.5, 124.6, 538.0, 209.4, 537.0, 273.9);
  ctx.bezierCurveTo(441.0, 274.9, 85.4, 277.4, 22.5, 273.0);
  ctx.closePath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fill();
  // main window
  ctx.translate(-10, -10);
  ctx.beginPath();
  ctx.moveTo(22.5, 273.0);
  ctx.bezierCurveTo(22.5, 260.0, 12.0, 221.5, 12.0, 208.5);
  ctx.bezierCurveTo(15.5, 204.0, 19.0, 199.5, 22.5, 195.0);
  ctx.bezierCurveTo(17.5, 188.0, 12.5, 181.0, 7.5, 174.0);
  ctx.bezierCurveTo(5.0, 119.6, 2.5, 65.1, 0.0, 10.6);
  ctx.bezierCurveTo(186.5, 11.6, 370.0, -0.9, 556.5, 0.1);
  ctx.bezierCurveTo(558.5, 9.1, 563.5, 31.6, 565.5, 40.6);
  ctx.bezierCurveTo(558.0, 42.6, 550.5, 44.6, 543.0, 46.6);
  ctx.bezierCurveTo(548.5, 51.1, 554.0, 55.6, 559.5, 60.1);
  ctx.bezierCurveTo(558.5, 124.6, 538.0, 209.4, 537.0, 273.9);
  ctx.bezierCurveTo(441.0, 274.9, 85.4, 277.4, 22.5, 273.0);
  ctx.closePath();
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fill();
  // star 1
  ctx.translate(-70, 70);
  ctx.scale(1.1, 1);
  ctx.beginPath();
  ctx.moveTo(23.3, 27.0);
  ctx.lineTo(14.4, 22.5);
  ctx.lineTo(5.7, 27.3);
  ctx.lineTo(7.2, 17.4);
  ctx.lineTo(0.0, 10.6);
  ctx.lineTo(9.8, 9.0);
  ctx.lineTo(14.1, 0.0);
  ctx.lineTo(18.6, 8.9);
  ctx.lineTo(28.5, 10.1);
  ctx.lineTo(21.5, 17.2);
  ctx.lineTo(23.3, 27.0);
  ctx.closePath();
  ctx.fillStyle = 'rgb(248, 229, 53)';
  ctx.fill();
  // star 2
  ctx.translate(40, 80);
  ctx.scale(0.5, 0.5);
  ctx.beginPath();
  ctx.moveTo(23.3, 27.0);
  ctx.lineTo(14.4, 22.5);
  ctx.lineTo(5.7, 27.3);
  ctx.lineTo(7.2, 17.4);
  ctx.lineTo(0.0, 10.6);
  ctx.lineTo(9.8, 9.0);
  ctx.lineTo(14.1, 0.0);
  ctx.lineTo(18.6, 8.9);
  ctx.lineTo(28.5, 10.1);
  ctx.lineTo(21.5, 17.2);
  ctx.lineTo(23.3, 27.0);
  ctx.closePath();
  ctx.fillStyle = 'rgb(248, 229, 53)';
  ctx.fill();
  // star 3
  ctx.translate(1130, -180);
  ctx.beginPath();
  ctx.moveTo(23.3, 27.0);
  ctx.lineTo(14.4, 22.5);
  ctx.lineTo(5.7, 27.3);
  ctx.lineTo(7.2, 17.4);
  ctx.lineTo(0.0, 10.6);
  ctx.lineTo(9.8, 9.0);
  ctx.lineTo(14.1, 0.0);
  ctx.lineTo(18.6, 8.9);
  ctx.lineTo(28.5, 10.1);
  ctx.lineTo(21.5, 17.2);
  ctx.lineTo(23.3, 27.0);
  ctx.closePath();
  ctx.fillStyle = 'rgb(248, 229, 53)';
  ctx.fill();
  // основной текст
  ctx.restore();
  ctx.font = '16px PT Mono';
  ctx.textAlign = 'center';
  ctx.fillText('Ура вы победили!', 350, 40);
  ctx.fillText('Список результатов:', 350, 60);
  // сортировка массивов times и names от лучшего к худшему
  for (var i = 0; i <= times.length - 2; i++) {
    var minTime = times[i];
    for (var j = i + 1; j <= times.length - 1; j++) {
      if (times[j] < minTime) {
        minTime = times[j];
        var swapTime = times [i];
        times [i] = minTime;
        times[j] = swapTime;

        var minName = names[j];
        var swapName = names[i];
        names[i] = minName;
        names[j] = swapName;
      }
    }
  }
  // округляем times[i] до целого
  for (i = 0; i < times.length; i++) {
    times[i] = Math.round(times[i]);
  }
  // создаем рандомный цвет
  var getRandomColor = function () {
    return 'hsl(240, ' + (Math.floor(Math.random() * 100) + '%') + ', 50%)';
  };
  // рисуем гистограмму
  ctx.restore();
  for (i = 0; i < times.length; i++) {
    if (i === names.indexOf('Вы')) {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(INITIAL_X + BAR_WIDTH * i + BETWEEN_SPACE * i, INITIAL_Y - HISTOGRAM_HEIGHT * times[i] / times[times.length - 1], BAR_WIDTH, HISTOGRAM_HEIGHT * times[i] / times[times.length - 1]);
      ctx.fillStyle = 'black';
      ctx.fillText(times[i], INITIAL_X + BAR_WIDTH * i + BETWEEN_SPACE * i + BAR_WIDTH / 2, INITIAL_Y - HISTOGRAM_HEIGHT * times[i] / times[times.length - 1] - LINE_HEIGHT);
      ctx.fillText(names[i], INITIAL_X + BAR_WIDTH * i + BETWEEN_SPACE * i + BAR_WIDTH / 2, INITIAL_Y + LINE_HEIGHT);
    } else {
      ctx.fillStyle = getRandomColor();
      ctx.fillRect(INITIAL_X + BAR_WIDTH * i + BETWEEN_SPACE * i, INITIAL_Y - HISTOGRAM_HEIGHT * times[i] / times[times.length - 1], BAR_WIDTH, HISTOGRAM_HEIGHT * times[i] / times[times.length - 1]);
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], INITIAL_X + BAR_WIDTH * i + BETWEEN_SPACE * i + BAR_WIDTH / 2, INITIAL_Y + LINE_HEIGHT);
      ctx.fillText(times[i], INITIAL_X + BAR_WIDTH * i + BETWEEN_SPACE * i + BAR_WIDTH / 2, INITIAL_Y - HISTOGRAM_HEIGHT * times[i] / times[times.length - 1] - LINE_HEIGHT);
    }
  }
  // закрывающие скобки главной функции
};


