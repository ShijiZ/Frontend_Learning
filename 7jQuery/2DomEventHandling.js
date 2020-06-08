/* This also works following jQuery approach

function displayInfoPanel(event) {
	// this gives the HTMLElement that generates this event
	// $(this) wraps around this and create a jQuery object
	$(this).siblings(".menu-item-info").addClass("is-visible");
}

function hideInfoPanel(event) {
	// this gives the HTMLElement that generates this event
	// $(this) wraps around this and create a jQuery object
	$(this).siblings(".menu-item-info").removeClass("is-visible");
}

$('.menu-item > a').on("mouseover", displayInfoPanel);
$('.menu-item > a').on("mouseout", hideInfoPanel);
*/

function toggleInfoPanel(event) {
	// this gives the HTMLElement that generates this event
	// $(this) wraps around this and create a jQuery object
	$(this).siblings(".menu-item-info").toggleClass("is-visible");
}

/* This also works following jQuery approach

$('.menu-item > a').mouseover(toggleInfoPanel);
$('.menu-item > a').mouseout(toggleInfoPanel);

*/

/* This also works following jQuery approach

// jQuery calls can be chained
$('.menu-item > a')
	.on("mouseover", toggleInfoPanel)
	.on("mouseout", toggleInfoPanel);
*/

// You can provide multiple events name in the "on" call
$('.menu-item > a').on("mouseover mouseout", toggleInfoPanel)