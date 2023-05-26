/* SHOW SKILLS */
$(document).on('click', '.skill_set', function(event) {
	event.preventDefault();
	$('.skill_set').removeClass('show_skills');
	$(this).addClass('show_skills');
});

/* QUALIFICATION TABS */
$('.education_tab').click(function(event) {
	$(this).addClass('active');
	$('.work_tab').removeClass('active');
	$('.education').show();
	$('.work').hide();
});
$('.work_tab').click(function(event) {
	$(this).addClass('active');
	$('.education_tab').removeClass('active');
	$('.work').show();
	$('.education').hide();
});

// ISOTOPE PLUGIN
$('.work_items').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})
$('.work_tabs li').click(function(event) {
	/* Act on the event */
	$('.work_tabs li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');

	$('.work_items').isotope({
		filter : selector
	});
	return false;
});

// STICKEY NAVBAR
$(document).scroll(function(event) {
	/* Act on the event */
	if ($(document).scrollTop() > 200) { // document scroll is > 200
		$('.Navbar_Portion').addClass('stickey_nav');
	}else if($(document).scrollTop() < 200){
		$('.Navbar_Portion').removeClass('stickey_nav');
	}
});

// SCROLL TO TOP
$(document).scroll(function(event) {
	/* Act on the event */
	if ($(document).scrollTop() > 500) {
		$('.scroll_to_top').fadeIn(400);
	}else if ($(document).scrollTop() < 500) {
		$('.scroll_to_top').fadeOut(400);
	}
});
$('.scroll_to_top').click(function(event) {
	/* Act on the event */
	$(document).scrollTop(0);
});

// THEME CHANGER
$('.theme_shades span').click(function(event) {
	/* Act on the event */
	var themeColor = $(this).attr('data-color-code');
	$('html').css('--theme_color', themeColor);
	$('.theme_shades span').css('border', 'none');
	$(this).css('border', '2px solid var(--black_color)');
});

//MODE CHANGER
document.addEventListener('DOMContentLoaded', function(event) {
	/* Act on the event */
	$('body').addClass('Dark_Mode');
	$('.dark_mode img').css('border', '2px solid #FFF');
	$('.light_mode img').css('border', 'none');
});

$('.dark_mode').click(function(event) {
	/* Act on the event */
	$('body').addClass('Dark_Mode');
	$('.dark_mode img').css('border', '2px solid #FFF');
	$('.light_mode img').css('border', 'none');
});
$('.light_mode').click(function(event) {
	/* Act on the event */
	$('body').removeClass('Dark_Mode');
	$('.light_mode img').css('border', '2px solid #000');
	$('.dark_mode img').css('border', 'none');
});
if ($(window).width() <= 992) {
	$('div').removeAttr('data-aos');
}
