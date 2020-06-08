/* This is equivalent
$(document).ready(function(){
	function handleMenu(){
		function toggleInfoPanel(event) {
			// this gives the HTMLElement that generates this event
			// $(this) wraps around this and create a jQuery object
			$(this).siblings(".menu-item-info").toggleClass("is-visible");
		}

		// You can provide multiple events name in the "on" call
		$('.menu-item > a').on("mouseover mouseout", toggleInfoPanel)
	}
});
*/

$(function(){
	var $container = $("#main-menu");

	function handleMenu(){
		function toggleInfoPanel(event) {
			// this gives the HTMLElement that generates this event
			// $(this) wraps around this and create a jQuery object
			$(this).siblings(".menu-item-info").toggleClass("is-visible");
		}

		// You can provide multiple events name in the "on" call
		$('.menu-item > a').on("mouseover mouseout", toggleInfoPanel)
	}

	function buildMenuItem(data) {
		var $el, $infoPanel;

		$el = $("<li class='menu-item'>" + 
					"<a href='#'>" + data.title + "</a>" + 
					"<div class='menu-item-info'></div>" + 
				"</li>");

		if (data.infoPanel && data.infoPanel.length){
			// look for (tag) div with (class) menu-item-info inside (element) $el
			$infoPanel = $("div.menu-item-info", $el);
			data.infoPanel.forEach(function(entry){
				$infoPanel.append("<img class='menu-item-info-image' src='" + entry.image + "'>");
			});
		}
		return $el;
	}

	$.get(
		"api/menu.json", 
		function(data){
			// The data has been loaded
			//console.log(data);
	
			// clean the content of the UL element first
			$container.empty();
			data.forEach(function(menuItem){
				//console.log(menuItem);
				$container.append(buildMenuItem(menuItem));
			});
			$container.append("<div class='clear-floating'></div>");

			handleMenu();
		},
		"json");
});