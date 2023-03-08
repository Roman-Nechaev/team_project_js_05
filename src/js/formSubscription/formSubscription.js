const form = document.querySelector('footer-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const emailInput = document.getElementById('footer-emailut');
  const email = emailInput.value;
  // console.log(email);
  form.reset();
});
