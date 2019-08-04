var image = document.getElementById('preset-image');

var tipAmount = document.getElementById('preset-tip-amount');

var tipAmount_rotate_container = document.getElementById('rotate-container');

var tipAmount_translate_x = document.getElementById('tip-amount-translate-x');

var tipAmount_translate_y = document.getElementById('tip-amount-translate-y');

var tipAmount_transform_rotate = document.getElementById('transform-rotate-tip-amount');

var tipAmount_fontSize = document.getElementById('font-size-tip-amount');

//var tipAmount_lineHeight = document.getElementById('line-height-tip-amount');

var tipAmount_translate_x_container = document.getElementById('translate-x');

var tipAmount_translate_y_container = document.getElementById('translate-y');

var tipAmount_pos_top_left = document.getElementById('amount-pos-top-left');
var tipAmount_pos_top_center = document.getElementById('amount-pos-top-center');
var tipAmount_pos_top_right = document.getElementById('amount-pos-top-right');
var tipAmount_pos_center_left = document.getElementById('amount-pos-center-left');
var tipAmount_pos_center_center = document.getElementById('amount-pos-center-center');
var tipAmount_pos_center_right = document.getElementById('amount-pos-center-right');
var tipAmount_pos_bottom_left = document.getElementById('amount-pos-bottom-left');
var tipAmount_pos_bottom_center = document.getElementById('amount-pos-bottom-center');
var tipAmount_pos_bottom_right = document.getElementById('amount-pos-bottom-right');

function transform_horiz() {
	tipAmount.style.transform = 'translate(x, y)';
}

function font_size() {
	tipAmount.style.fontSize = this.value + 'px';
}

function rotate() {
	tipAmount_rotate_container.style.transform = 'rotateZ(' + this.value + 'deg)';
}

function line_height() {
	tipAmount.style.lineHeight = this.value +'px';
}

function translate_x(){
	tipAmount_translate_x_container.style.transform = 'translateX(' + this.value + 'px)';
}

function translate_y(){
	tipAmount_translate_y_container.style.transform = 'translateY(' + this.value + 'px)';
}

function amount_pos_flex(horiz, vert, parentElem){
	if(horiz == 'left'){
		if(vert == 'top'){
			return function(){
				parentElem.style.justifyContent = 'flex-start';
				parentElem.style.alignItems = 'flex-start';
			}
		}
		else if(vert == 'center'){
			return function() {
				parentElem.style.justifyContent = 'flex-start';
				parentElem.style.alignItems = 'center';
			}
		}
		else if(vert == 'bottom'){
			return function(){
				parentElem.style.justifyContent = 'flex-start';
				parentElem.style.alignItems = 'flex-end';
			}
		}
	}
	else if(horiz == 'center'){
		if(vert == 'top'){
			return function(){
				parentElem.style.justifyContent = 'center';
				parentElem.style.alignItems = 'flex-start';
			}
		}
		else if(vert == 'center'){
			return function() {
				parentElem.style.justifyContent = 'center';
				parentElem.style.alignItems = 'center';
			}
		}
		else if(vert == 'bottom'){
			return function(){
				parentElem.style.justifyContent = 'center';
				parentElem.style.alignItems = 'flex-end';
			}
		}
	}
	else if(horiz == 'right'){
		if(vert == 'top'){
			return function(){
				parentElem.style.justifyContent = 'flex-end';
				parentElem.style.alignItems = 'flex-start';
			}
		}
		else if(vert == 'center'){
			return function() {
				parentElem.style.justifyContent = 'flex-end';
				parentElem.style.alignItems = 'center';
			}
		}
		else if(vert == 'bottom'){
			return function(){
				parentElem.style.justifyContent = 'flex-end';
				parentElem.style.alignItems = 'flex-end';
			}
		}
	}
}

function amount_pos(row, col, elem) {
	if(row == 1){
		if(col == 1){
			return function() {
				elem.style.top = '0%';
				elem.style.left = '0%';
			}
		}
		else if(col == 2) {
			return function() {
				var elemWidth = parseInt( window.getComputedStyle(elem, null).getPropertyValue('width') );

				console.log(elemWidth);
				console.log(typeof(elemWidth));
				elem.style.top = '0%';
				//elem.style.left = 'calc(50%' + '-' + elemWidth + ')';
				elem.style.left = `calc(50% - ${elemWidth / 2}px)`;
				//elem.style.left = '60%';
				//console.log(elem.style.top);
				
			}
		}
		else if(col == 3) {
			return function() {
				elem.style.top = '0%';
				elem.style.left = '100%';
			}
		}
	}

	else if(row == 2){
		if(col == 1){
			return function() {
				elem.style.top = '50%';
				elem.style.left = '0%';
			}
		}	
		else if(col == 2){
			return function() {
				elem.style.top = '50%';
				elem.style.left = '50%';
			}
		}
		else if(col == 3){
			return function() {
				elem.style.top = '50%';
				elem.style.left = '100%';
			}
		}
	}
	else if(row == 3){
		if(col == 1){
			return function() {
				elem.style.top = '100%';
				elem.style.left = '0%';
			}
		}
		else if(col == 2){
			return function() {
				elem.style.top = '100%';
				elem.style.left = '50%';
			}
		}
		else if(col == 3){
			return function() {
				elem.style.top = '100%';
				elem.style.left = '100%';
			}
		}
	}
}

tipAmount_transform_rotate.addEventListener('input', rotate);

tipAmount_fontSize.addEventListener('input', font_size);

//tipAmount_lineHeight.addEventListener('input', line_height);

tipAmount_translate_x.addEventListener('input', translate_x);

tipAmount_translate_y.addEventListener('input', translate_y);

tipAmount_pos_top_left.addEventListener('change', amount_pos_flex('left','top', image));
tipAmount_pos_top_center.addEventListener('change', amount_pos_flex('center','top', image));
tipAmount_pos_top_right.addEventListener('change', amount_pos_flex('right','top', image));
tipAmount_pos_center_left.addEventListener('change', amount_pos_flex('left','center', image));
tipAmount_pos_center_center.addEventListener('change', amount_pos_flex('center','center', image));
tipAmount_pos_center_right.addEventListener('change', amount_pos_flex('right','center', image));
tipAmount_pos_bottom_left.addEventListener('change', amount_pos_flex('left','bottom', image));
tipAmount_pos_bottom_center.addEventListener('change', amount_pos_flex('center','bottom', image));
tipAmount_pos_bottom_right.addEventListener('change', amount_pos_flex('right','bottom', image));

