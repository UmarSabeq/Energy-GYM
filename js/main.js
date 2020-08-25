
// Slider
$(function(){
	'use strict';
	var winH = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navH = $('.navbar').innerHeight();
	$('.slider , .carousel-item').height(winH - (upperH+navH));

	$('#EXS button').on('click',function(){
 	$(this).addClass('active').siblings().removeClass('active');
  	if($(this).data('class')==='all') {
   		$('.all-EXS .col-md').css('opacity',1);
 	}else {
  		$('.all-EXS .col-md').css('opacity','.1');
   $($(this).data('class')).parent().css('opacity', 1);

}


})
});


