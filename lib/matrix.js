var generateMatrix = require('./maketrix');

module.exports = function(stage, arena){

    var z = 0;
    var a
    , dots = []
    ;


    for(a = 1; a <= 360; a++){
	var dot = document.createElement('div');
	dot.classList.add('dot');
	var el = document.createElement('div');
	el.appendChild(dot);
	dots.push(el);
	el.classList.add('maketrix-object');
	el.id = 'dot' + a;
	arena.appendChild(el);
	el.coords = [a * 2, a * 2, 90];
	el.style['-webkit-transform'] = generateMatrix(a * 10, a, 0, 0, 1)
    }

    setInterval(function(){
      arena.style['-webkit-transform'] = generateMatrix(0, z+=2, z / 3, 0, 1);
    }, 20);

}

