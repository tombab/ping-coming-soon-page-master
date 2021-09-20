const emailField = document.getElementById('emailField');
const button = document.getElementById('button');
const response = document.getElementById('response');
const emailError = document.getElementsByName('email')[0];


button.addEventListener('click', function() {
    const email = emailField.value;
    if (!validateEmail(email)) {
      response.innerHTML = '<em>Please provide a valid email address</em>';
      emailField.classList.add('red')
      emailError.placeholder='exemple@email/com'
    } else {
      response.innerHTML = null;
      emailField.classList.remove('red')
      emailError.placeholder='Your email address...'
      emailField.value = "";
    }
  });


  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

