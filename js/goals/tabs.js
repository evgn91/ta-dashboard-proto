var goalsTabs = {
	preset: document.getElementById( 'goals-settings-preset' ),
	goalTitle: document.getElementById( 'goals-settings-goal-title' ),
	progressBar: document.getElementById( 'goals-settings-progress-bar' ),
	image: document.getElementById( 'goals-settings-image' ),
}

var goalsTabsContent = {
	'goals-preset-content' : document.getElementById( 'goals-preset-content' ),
	'goals-title-content' : document.getElementById( 'goals-title-content' ),
	'goals-progress-bar-content' : document.getElementById( 'goals-progress-bar-content' ),
	'goals-image-content' : document.getElementById( 'goals-image-content' )
}

var activeGoalsTab = goalsTabs.preset;
var activeGoalsTabContent = goalsTabsContent[ 'goals-preset-content' ];

var tabsControls = {
	'preset' : goalsTabsContent['goals-preset-content'],
	'goalTitle' : goalsTabsContent['goals-title-content'],
	'progressBar' : goalsTabsContent['goals-progress-bar-content'],
	'image' : goalsTabsContent['goals-image-content']
}



function switchTabGoals(control, view) {
	return function(){
		if(activeGoalsTab != control){
			console.log(view);
			activeGoalsTab.classList.remove('settings-tabs-item-active');
			control.classList.add('settings-tabs-item-active');
			activeGoalsTab = control;

			activeGoalsTabContent.style.display = 'none';
			view.style.display = 'block';

			activeGoalsTabContent = view;
			console.log(view);

		}
	}
}

for( let key in tabsControls ){
	
	goalsTabs[key].addEventListener( 'click', switchTabGoals( goalsTabs[key], tabsControls[key] ) );
}

