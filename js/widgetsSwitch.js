var alertsSettingsWrapper = document.getElementById('alerts-settings-wrapper');
var alertsTabs = document.getElementById('alerts-tabs');
var goalsSettingsWrapper = document.getElementById('goals-settings-wrapper');
var goalsTabs = document.getElementById('goals-tabs');

var activeSettings = alertsSettingsWrapper;
var activeTabs = alertsTabs;
var activeLink = alertsLink;

var alertsLink = document.getElementById('widget-alerts');
var goalsLink = document.getElementById('widget-goals');


goalsLink.onclick = () => {
	if(activeLink != event.target){
		
		console.log(event.target);
		
		activeLink = event.target;
		activeSettings.style.display = 'none';
		activeTabs.style.display = 'none';
		
		goalsSettingsWrapper.style.display = 'block';
		goalsTabs.style.display = 'flex';

		activeSettings = goalsSettingsWrapper;
		activeTabs = goalsTabs;
	}
}

alertsLink.onclick = () => {
	if(activeLink != event.target){
		
		console.log(event.target);

		activeLink = event.target;
		activeSettings.style.display = 'none';
		activeTabs.style.display = 'none';
		
		alertsSettingsWrapper.style.display = 'block';
		alertsTabs.style.display = 'flex';

		activeSettings = alertsSettingsWrapper;
		activeTabs = alertsTabs;

	}
}