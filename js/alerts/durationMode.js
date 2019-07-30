var durationSlider = document.getElementById('duration-slider');

var customDuration = document.getElementById('custom-duartion');
var durationDepends = document.getElementById('duration-depends');

console.log(customDuration);

function switchDurationToCustom(){ 
	console.log('custom duration');
	durationSlider.classList.add('anim-grow');
	setTimeout(() => {
						durationSlider.style.height = '36px';
						durationSlider.style.opacity = '1';
						durationSlider.classList.remove('anim-grow');
						}
						, 200);
};

function switchDurationToDep() { 
	console.log('duration depends');
	durationSlider.classList.add('anim-collapse');
	setTimeout( () => { 

						console.log('timeout'); 
						durationSlider.style.height = '0px';
						durationSlider.style.opacity = '0';
						durationSlider.classList.remove('anim-collapse');
						}

						, 200);
	//durationSlider.style.display = 'none';
};

customDuration.addEventListener('change', switchDurationToCustom);

durationDepends.addEventListener('change', switchDurationToDep);