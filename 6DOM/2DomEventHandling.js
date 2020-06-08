// grab a reference to all the menu links
var $menuLinks = document.querySelectorAll(".menu-item > a");

function getInfoPanelForElement(element) {
	// parentNode gives the parent node of the calling HTMLElement
	var $infoPanel = element.parentNode.querySelector(".menu-item-info");
	return $infoPanel;
}

function displayInfoPanelForElement(event) {
	// event.target gives the HTMLElement that generates this event
	var $anchor = event.target;

	// make the penal visible
	// Note: classList is available only on IE10+
	getInfoPanelForElement($anchor).classList.add("is-visible");
}

function hideInfoPanelForElement(event) {
	// event.target gives the HTMLElement that generates this event
	var $anchor = event.target;

	// make the penal visible
	// Note: classList is available only on IE10+
	getInfoPanelForElement($anchor).classList.remove("is-visible");
}

// iterate on the list and register a callback when the user hover on the link
for (var i = 0; i < $menuLinks.length; i++) {
	// we are on each anchor element in the menu
	// register a callback when the mouse hover on the link
	var $anchor = $menuLinks[i];

	$anchor.addEventListener("mouseover", displayInfoPanelForElement);
	$anchor.addEventListener("mouseout", hideInfoPanelForElement);
}