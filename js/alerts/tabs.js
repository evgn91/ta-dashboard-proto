const ID_PREFIX = 'alerts-settings';

const ALERTS_TAB_ID = {
	preset: ID_PREFIX + '-preset',
	tipAmount: ID_PREFIX + '-tip-amount',
	tipperName: ID_PREFIX + '-tipper-name',
	customMsg: ID_PREFIX + '-custom-message',
	image: ID_PREFIX + '-image',
	sound: ID_PREFIX + '-sound'
}

var alertsTabs = {
	preset: document.getElementById( ALERTS_TAB_ID.preset ),
	tipAmount: document.getElementById( ALERTS_TAB_ID.tipAmount ),
	tipperName: document.getElementById( ALERTS_TAB_ID.tipperName ),
	customMsg: document.getElementById( ALERTS_TAB_ID.customMsg ),
	image: document.getElementById( ALERTS_TAB_ID.image ),
	sound: document.getElementById( ALERTS_TAB_ID.sound )
}

var alertsTabsContent = {
	'alerts-settings-preset-content' : document.getElementById( 'alerts-settings-preset-content' ),
	'alerts-settings-tip-amount-content' : document.getElementById( 'alerts-settings-tip-amount-content' ),
	'alerts-settings-tipper-name-content' : document.getElementById( 'alerts-settings-tipper-name-content' ),
	'alerts-settings-custom-message-content' : document.getElementById( 'alerts-settings-custom-message-content' ),
	'alerts-settings-image-content' : document.getElementById( 'alerts-settings-image-content' ),
	'alerts-settings-sound-content' : document.getElementById( 'alerts-settings-sound-content' )
}

//console.log(alertsTabsContent['alerts-settings-preset-content']);

var activeTab = document.getElementById( ALERTS_TAB_ID.preset );
var activeTabContent = document.getElementById('alerts-settings-preset-content');

function showTab() {
	activeTabContent.style.display = 'none';
	alertsTabs.preset.classList.remove('settings-tabs-item-active');
	tipAmountTabContent.style.display = 'block';
	event.target.classList.add('settings-tabs-item-active');
}

//alertsTabs.tipAmount.addEventListener('click', showTab);


for(let key in alertsTabs){
	alertsTabs[key].addEventListener('click', switchTab);
}

function switchTab(e) {
	//console.log('switch tab');
	var targetId = e.target.id + '-content';
	//console.log(targetId);
	//console.log(alertsTabsContent[targetId]);
	activeTabContent.style.display = 'none';
	activeTab.classList.remove('settings-tabs-item-active');
	activeTab = e.target;
	activeTab.classList.add('settings-tabs-item-active');
	alertsTabsContent[targetId].style.display = 'flex';
	activeTabContent = alertsTabsContent[targetId];
}