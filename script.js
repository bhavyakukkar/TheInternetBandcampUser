//TODO, instead of Toggle ON/OFF function, all non-digital items collapse into an expansible list on the page itself


interceptElement(true);
createInterface();


function createInterface() {

	fetch(chrome.runtime.getURL('/interface.html')).then(r => r.text()).then(html => {
		document.body.insertAdjacentHTML('beforeend', html);
	});
	
	setTimeout(function() {changeInterfaceBackgroundColor(getArtistPageBodyColor());}, 20);;
}


function getArtistPageBodyColor() {
	
	var artistPageColors = window.getComputedStyle(document.getElementById("pgBd"));
	var backgroundColor = artistPageColors.backgroundColor;
	var textColor = artistPageColors.color;

	//TODO: How to return both backgroundColor and textColor as an array
	return backgroundColor;
}


function changeInterfaceBackgroundColor(newBackgroundColor) {
	
	var container = document.getElementsByClassName("TheInternetBandcampUser")[0];
	container.style.backgroundColor = newBackgroundColor;
}


function interceptElement(toggleOn) {

	var buyItemDigital = document.getElementsByClassName("buyItem digital")[0];
	var main = buyItemDigital.parentNode;
	var oldMain = main;

	if (toggleOn)
		toggleFunction(buyItemDigital, main, oldMain, "ON");
	else
		toggleFunction(buyItemDigital, main, oldMain, "OFF");
}


function toggleFunction(buyItemDigital, main, oldMain, toggle) {

	if (toggle == "ON") {
		while (main.firstChild) {
			main.removeChild(main.firstChild);
		}
		main.appendChild(buyItemDigital);
	}

	else if (toggle == "OFF") {
		while (main.firstChild) {
			main.removeChild(main.firstChild);
		}
		main.appendChild(oldMain.childNodes);
	}
}