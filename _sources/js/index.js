import SendFunc from './sendForm.js';
import FloatMenu from './floatMenu.js';

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
//   $(document).ready(function () {
//     'use strict';
// //Аякс отправка форм
//     $("#application").submit(function () {
//       var data = {
//         name : document.querySelector('input[name="name"]').value,
//         email : document.querySelector('input[name="email"]').value,
//         telephone : document.querySelector('input[name="telephone"]').value
//       };
//       $.ajax({
//         type: "POST",
//         url: "mail.php",
//         data: data
//       }).done(function (value) {
//         $('#mail')[0].innerHTML = value;
//         $('#mail').removeClass('not_visible_mail');
//         setTimeout(function () {
//           $("#form").trigger("reset");
//         }, 1000);
//       });
//     return false;
//     });
//  function  test() {
// 	console.log('test!');
// }
//         $("img, a").on("dragstart", function (event) { event.preventDefault(); });
//   });

//Плавающее меню
// new FloatMenu({
//     elem : document.getElementById('navigation'),
//     height : 200,
//     first_class : 'menu_fixed_on_top',
//     second_class : 'float_menu'
//   }).init();


// Отправка формы обратной связи скрипту для отправления по почте
let data = {
  name : 'input[name="name"]',
  email : 'input[name="email"]',
  telephone : 'input[name="telephone"]'
};

//new SendFunc('application', data, 'mail');
