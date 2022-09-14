$(document).ready(function() {

    $('.js-scroll').on('click', function() { // Au clic sur un element

		var page = $(this).attr('href'); // Page cible

		$('html, body').animate( { 
			scrollTop: $(page).offset().top - 40
		}, 750);

		return false;

	});

});