export default function init () {
  document.querySelector('#modal_feedback .modal_feed img')
    .addEventListener('click', e => {
      close_modalFeed();
    });

  [...document.querySelectorAll('.feed_open_fc')].forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      open_modalFeed();
    });
  });

  send_mail();
}

export function open_modalFeed() {
  document.querySelector('#modal_feedback')
    .classList.remove('close_modal_feed');
}

export function close_modalFeed() {
  document.querySelector('#modal_feedback')
    .classList.add('close_modal_feed');
}

function send_mail() {
  document.querySelector('#form_submit')
    .addEventListener('click', e => {
      e.preventDefault();

      let data = {
        name: document.querySelector('#form_name').value,
        email: document.querySelector('#form_mail').value,
        message: document.querySelector('#form_message').value
      }

      $.post('/mail.php', data)
        .done( function (value) {
          let mail = document.querySelector('#mail');
          mail.innerHTML = value;
          mail.classList.remove('not_visible_mail');

          setTimeout(function () {
            $('#modal_form_feedback').trigger("reset");
            mail.classList.add('not_visible_mail');
          }, 2000);
        });

      close_modalFeed();
    });
}
