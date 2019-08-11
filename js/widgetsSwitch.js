var alertsSettingsWrapper = document.getElementById('alerts-settings-wrapper');
var alertsTabs = document.getElementById('alerts-tabs');
var goalsSettingsWrapper = document.getElementById('goals-settings-wrapper');
var goalsTabs = document.getElementById('goals-tabs');
var alertsPresets = document.getElementById('alerts-presets-picker');
var goalsPresets = document.getElementById('goals-presets-picker');
var alertsWidgetHead = document.getElementById('alerts-widget-head');
var goalsWidgetHead = document.getElementById('goals-widget-head');
var alertsPreview = document.getElementById('alerts-preview');
var goalsPreview = document.getElementById('goals-preview');

var activePreview = alertsPreview;
var activeWidgetHead = alertsWidgetHead;
var activeSettings = alertsSettingsWrapper;
var activeTabs = alertsTabs;
var activeLink = alertsLink;
var activePresets = alertsPresets;

var alertsLink = document.getElementById('widget-alerts');
var goalsLink = document.getElementById('widget-goals');


goalsLink.onclick = () => {
	if(activeLink != event.target){
		
		console.log(event.target);
		
		activeLink = event.target;
		activeSettings.style.display = 'none';
		activeTabs.style.display = 'none';
		activePresets.style.display = 'none';
		activeWidgetHead.style.display = 'none';
		activePreview.style.display = 'none';
		
		goalsSettingsWrapper.style.display = 'block';
		goalsTabs.style.display = 'flex';
		goalsPresets.style.display = 'flex';
		goalsWidgetHead.style.display = 'flex';
		goalsPreview.style.display = 'flex';

		activeSettings = goalsSettingsWrapper;
		activeTabs = goalsTabs;
		activePresets = goalsPresets;
		activeWidgetHead = goalsWidgetHead;
		activePreview = goalsPreview;
	}
}

alertsLink.onclick = () => {
	if(activeLink != event.target){
		
		console.log(event.target);

		activeLink = event.target;
		activeSettings.style.display = 'none';
		activeTabs.style.display = 'none';
		activePresets.style.display = 'none';
		activeWidgetHead.style.display = 'none';
		activePreview.style.display = 'none';
		
		alertsSettingsWrapper.style.display = 'block';
		alertsTabs.style.display = 'flex';
		alertsPresets.style.display = 'flex';
		alertsWidgetHead.style.display = 'flex';
		alertsPreview.style.display = 'flex';

		activeSettings = alertsSettingsWrapper;
		activeTabs = alertsTabs;
		activePresets = alertsPresets;
		activeWidgetHead = alertsWidgetHead;
		activePreview = alertsPreview;

	}
}