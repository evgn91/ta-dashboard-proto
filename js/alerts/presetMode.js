var presetMode_range = document.getElementById('preset-mode-tokens-range');
var presetMode_single = document.getElementById('preset-mode-single-amount');

var tokensRangeInput = document.getElementById('tokens-range');
var tokensAmountInput = document.getElementById('tokens-amount');

presetMode_range.addEventListener('change', switchPresetModeRange);
presetMode_single.addEventListener('change', switchPresetModeAmount);


function switchPresetModeRange() {
	console.log('SWITCH');
	tokensAmountInput.style.display = 'none';
	tokensRangeInput.style.display = 'flex';

}

function switchPresetModeAmount(){
	tokensAmountInput.style.display = 'flex';
	tokensRangeInput.style.display = 'none';
}