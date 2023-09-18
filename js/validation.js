const closePopupButtons = document.querySelectorAll(['data-popup-close']);
const openPopupButtons = document.querySelectorAll(['data-popup-target']);
const overlay = document.getElementById('overlay');
const input = document.getElementById('form-input').value;
const form = document.getElementById('email-form');

function emailValidate(input) {
  const regVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regVal.test(String(input).toLowerCase());
}

overlay.addEventListener('click', () => {
  const popups = document.querySelectorAll('.popup.active')
  popups.forEach(popup => {
    closePopup(popup)
  });
});

closePopupButtons.forEach(button => {
  button.addEventListener('click', () => {
    const popup = button.closest('.popup');
    closePopup(popup);
  });
});

function openPopup(popup) {
  if (popup == null) return
  popup.classList.add('active');
  overlay.classList.add('active');
}

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

function submitConsequence(popup) {
  if (popup === document.getElementById('popup')) {
    openPopup(popup);
  } else {
    popup.classList.add('invalid-email');
  }
}

form.addEventListener('submit', async function submitter(event) { 
  event.preventDefault();
  let promise = new Promise((resolve) => {
    if(emailValidate(input)) {
      resolve(document.getElementById('popup'));
    } else {
      resolve(document.getElementById('email-validation'));
    }
  });
  let popup = await promise;
  submitConsequence(popup);
});