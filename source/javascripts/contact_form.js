const form = document.querySelector('#contact-form');
const mail = form.querySelector('#mail');
const name = form.querySelector('#name');
const subject = form.querySelector('#subject');
const message = form.querySelector('#message');
const submit = form.querySelector('#submit');

function sendMessage(e) {
  e.preventDefault();
  let messageToSend = {
    mail: mail.value,
    name: name.value,
    subject: subject.value,
    message: message.value
  }
  debugger
}

submit.addEventListener('click', sendMessage);
