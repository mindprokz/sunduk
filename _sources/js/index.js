import FloatMenu from './floatMenu';
import modal_feed from './modal_feed';

new FloatMenu().mobileClicker(
  document.querySelector('.burger'),
  document.querySelector('.mobile_menu')
);

new FloatMenu().init(document.querySelector('#fix_menu'));

$('.sl').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  pauseOnHover: false
});

$('.sl_menu').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  pauseOnHover: false
});

$('.sl_stocks').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  pauseOnHover: false
});

ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map("map", {
    center: [51.114151, 71.418066],
    zoom: 17
  });

  myMap.behaviors.disable(['drag','scrollZoom']);

  myPlacemark = new ymaps.Placemark([51.114151, 71.418066], {
    hintContent: 'Москва!',
    balloonContent: 'Столица России'
  });

  myMap.geoObjects.add(myPlacemark);
}

// fancybox
$(".fancybox").click(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'elastic'
	});
});

$(document).on('click', 'a.anchor', function () {
  $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 152 }, 1000 );
  return false;
});

modal_feed();
