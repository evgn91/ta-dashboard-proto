var previewButton = document.getElementById('custom-message-test');
var placeholder = document.getElementById('custom-message-subscr-placeholder');
var customMessage = document.getElementById('custom-message');

previewButton.onclick = function showCustomMessage() { 
														placeholder.style.display = 'none';
														customMessage.style.display = 'block';

														};