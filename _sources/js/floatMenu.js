// Принимает объект с настройками для меню
export default class FloatMenu{

  init(_elem){
    if (window.pageYOffset < 200) {
      _elem.classList.remove('opened');
    }

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 200 &&  !_elem.classList.contains('opened') ) {
        _elem.classList.add('opened');
      } else if(window.pageYOffset < 200 && _elem.classList.contains('opened') ){
        _elem.classList.remove('opened');
      }
    });
  }

  mobileClicker(elem, menu) {
    elem.addEventListener('click', e => menu.classList.toggle('open'));

    [...document.querySelectorAll('.mobile_menu .anchor')]
      .forEach( el => {
        el.addEventListener('click', e => {
          if (menu.classList.contains('open')) {
            menu.classList.remove('open');
          }
        });
      });
  }
}
