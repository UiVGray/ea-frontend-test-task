const closePopupButtons = document.querySelectorAll(['data-popup-close']);
const overlay = document.getElementById('overlay');
const input = document.getElementById('form-input').value;

function emailValidate(email) {
  const regVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regVal.test(String(email).toLowerCase());
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

function closePopup(popup) {
  if (popup == null) return
  popup.classList.remove('active');
  overlay.classList.remove('active');
}

function submitConsequence(popup) {
  if (popup === document.querySelector(button.dataset.popupOpen)) {
    popup.classList.add('active');
    overlay.classList.add('active');
  } else {
    popup.classList.add('invalid-email');
  }
}

async function submitter() {  
  let promise = new Promise((resolve) => {
    if(emailValidate(input.value)) {
      resolve(document.querySelector(button.dataset.popupOpen));
    } else {
      resolve(document.querySelector(div.dataset.inputInvalid)); 
    }
  });
  let popup = await promise;
  submitConsequence(popup);
}