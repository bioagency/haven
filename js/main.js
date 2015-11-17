(function(){


	$('.gallery-slick').on('beforeChange', function(event, slick){
		$('.content-wrap').addClass('active')

	});

	$('.gallery-slick').on('afterChange', function(event, slick){
		$('.content-wrap').removeClass('active')
	});


	// Main slick
  $('.gallery-slick').slick({
	  infinite: true,
	  autoplay: true,
	  speed: 2000,
	  autoplaySpeed: 2000,
	  arrows: false
  });

})();