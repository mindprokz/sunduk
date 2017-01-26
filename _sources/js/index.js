import FloatMenu from './floatMenu.js';

new FloatMenu().mobileClicker(
  document.querySelector('.burger'),
  document.querySelector('.mobile_menu')
);

new FloatMenu().init(document.querySelector('#fix_menu'));

$('.sl').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true
});

$('.sl_menu').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true
});

$('.sl_stocks').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true
});

ymaps.ready(init);
var myMap,
  myPlacemark;

function init(){
  myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 7
  });

  myMap.behaviors.disable(['drag','scrollZoom']);

  myPlacemark = new ymaps.Placemark([55.76, 37.64], {
    hintContent: 'Москва!',
    balloonContent: 'Столица России'
  });

  myMap.geoObjects.add(myPlacemark);
}
