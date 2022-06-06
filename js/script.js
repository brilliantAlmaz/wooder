$(document).ready(function() {
	$('.header__burger-body').click(function(event) {
		$('.header__burger-body,.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');

	});
});