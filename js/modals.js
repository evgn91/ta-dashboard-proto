var activeModal = document.getElementById('testTip');
var testTipButton = document.getElementById('testTipButton');

var closeModal = function(){
	//console.log(event.target);
	if(activeModal.contains(event.target)){
		console.log('Клик по модалке!');		
	}
	else{
		console.log('Клик мимо модалки!');
		activeModal.remove();
		activeModal = null;
		setTimeout(() => {window.removeEventListener('click', closeModal);}, 1);
		
	}
}

var createPopup = function(){


	if(activeModal){

		console.log(activeModal);
	}

	else{
		var rect = event.target.getBoundingClientRect();
		//console.log(rect.x);
		var xButtonPosition = parseInt(rect.left);
		var yButtonPosition = parseInt(rect.top);
		var buttonWidth = parseInt( window.getComputedStyle(event.target, null).getPropertyValue('width') ); 
		console.log(xButtonPosition, yButtonPosition);
		//console.log(window.getComputedStyle(event.target, null).getPropertyValue('left'));
		//console.log('Создаем модалку');
		var popup = document.createElement('div');
		popup.classList.add('popup');
		popup.id = 'testTip';
		
		//console.log('Ширина модалки', popupWidth);
		
		popup.innerHTML = '<div class="popup" id="testTip"><div class="popupHeader"><span>Send test tip</span></div><div><p>Modal text</p></div><div class="popupActions"><button class="button-text">Close</button><button class="button-text">Send</button></div></div>';
		document.body.prepend(popup);
		var popupWidth = parseInt( window.getComputedStyle(popup, null).getPropertyValue('width') );
		popup.style.left = xButtonPosition - popupWidth/2 + buttonWidth / 2 + 'px';
		popup.style.top = yButtonPosition + 36 + 6 + 'px';
		activeModal = popup;
		setTimeout(() => {window.addEventListener('click', closeModal);}, 1);
		//activeModal.addEventListener('click', closeModal);
	}
}

testTipButton.addEventListener('click', createPopup);

//window.addEventListener('click', closeModal);


/*window.onclick = function () {
	console.log('TA DA');
	if(activeModal) {
		closeModal();
	}
}*/



