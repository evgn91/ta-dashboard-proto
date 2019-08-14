var rollTheDiceTabs = {
	widget: document.getElementById( 'roll-the-dice-settings-widget' ),
	prizes: document.getElementById( 'roll-the-dice-settings-prizes' ),
	notifs: document.getElementById( 'roll-the-dice-settings-notifs' ),
	sounds: document.getElementById( 'roll-the-dice-settings-sounds' ),
}

var rollTheDiceTabsContent = {
	'roll-the-dice-widget-content' : document.getElementById( 'roll-the-dice-widget-content' ),
	'roll-the-dice-prizes-content' : document.getElementById( 'roll-the-dice-prizes-content' ),
	'roll-the-dice-notifs-content' : document.getElementById( 'roll-the-dice-notifs-content' ),
	'roll-the-dice-sounds-content' : document.getElementById( 'roll-the-dice-sounds-content' )
}

var activeDiceTab = rollTheDiceTabs.widget;
var activeDiceTabContent = rollTheDiceTabsContent[ 'roll-the-dice-widget-content' ];


var diceTabsControls = {
	'widget' : rollTheDiceTabsContent[ 'roll-the-dice-widget-content' ],
	'prizes' : rollTheDiceTabsContent[ 'roll-the-dice-prizes-content' ],
	'notifs' : rollTheDiceTabsContent[ 'roll-the-dice-notifs-content' ],
	'sounds' : rollTheDiceTabsContent[ 'roll-the-dice-sounds-content' ]
}

function switchTabDice(control, view) {
	return function(){
		if(activeGoalsTab != control){
			
			activeDiceTab.classList.remove('settings-tabs-item-active');
			control.classList.add('settings-tabs-item-active');
			activeDiceTab = control;

			activeDiceTabContent.style.display = 'none';
			view.style.display = 'block';

			activeDiceTabContent = view;


		}
	}
}

for( let key in diceTabsControls ){
	rollTheDiceTabs[key].addEventListener( 'click', switchTabDice( rollTheDiceTabs[key], diceTabsControls[key] ) );
}