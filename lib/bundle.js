var es = require('event-stream')
  , thru = require('through')
  , gridMap = require('./grid-map')
  , matrix = require('./matrix')
  ;

module.exports = function(radius, perspective){

  var wx = window.innerWidth
    , wy = window.innerHeight
    , bcode = '-webkit-'
  ;

  var style = document.createElement('style')
    , stage = document.createElement('div')
    , arena = document.createElement('div')
  ; 

  stage.classList.add('maketrix-stage');
  arena.classList.add('maketrix-arena');
  arena.id = 'mx-arena';
  stage.id = 'mx-stage';
  stage.appendChild(arena)
  document.body.appendChild(stage);

  style.textContent = CSS(radius, perspective, bcode);
  style.id = 'maketrix-style';
  document.body.appendChild(style);
  style = Array.prototype.slice.call(document.styleSheets)
	  .reduce(function(acc, e){ 
	    if(e.ownerNode.id == 'maketrix-style') return e}, []);

  matrix(stage, arena);

//  return {stage: stage, arena: arena, stylesheet: style}

}(700, 700)

function CSS(radius, perspective, bcode){
    var css = '' +
	'.maketrix-stage {' +
	'  width: 1px;' +
	'  height: 1px;' + 
	'  margin: 300px auto;' +
	'  '+bcode+'perspective: '+perspective+'px;}' +
	'.maketrix-arena{'+
	'  width: 1px;' +
	'  height: 1px;' +
	'  '+bcode+'transform-style: preserve-3d;' +
	'  '+bcode+'transform-origin: 50% 50% -'+radius+'px;}' + 
	'.maketrix-object{' +
	'  position:absolute;' +
	'  '+bcode+'transform-origin: 50% 50% -'+radius+'px;}'
    return css
}
