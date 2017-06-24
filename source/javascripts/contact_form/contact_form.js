var form = document.querySelector('#contact-form');
var mail = form.querySelector('#mail');
var subject = form.querySelector('#subject');
var message = form.querySelector('#message');
var submit = form.querySelector('#submit');

function sendMessage(e) {
  e.preventDefault();
  if (submit.classList.value.includes('success')) { return }
  Email.send("contact@germainloret.com",
    "germain.loret@gmail.com",
    `[contact germainloret.com] - ${subject.value}`,
    `

    From: ${mail.value}
    -------------------------------------------------------------------

    ${message.value}
    `
    ,
    {token: "662d3847-2cb1-40a4-9da2-02f43431cf27"}
  );
  submit.setAttribute('disabled', '');
  submit.setAttribute('value', 'Envoi en cours');
  window.setTimeout(confirmation, 4000);
}

function confirmation() {
  if ($log === "OK") {
    submit.removeAttribute('disabled');
    submit.classList.add('success');
    submit.setAttribute('value', 'Message envoyé !');
    form.reset();
  } else {
    submit.classList.add('error');
    submit.setAttribute('value', 'Une erreur est survenue :(');
  }
}

submit.addEventListener('click', sendMessage);
