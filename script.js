const url='https://raular4322-api.herokuapp.com/user/';
const Http = new XMLHttpRequest();
Http.addEventListener('load', print)

function login(){
  const form = document.getElementById('login_form')
  const info = {
    email: form.email.value,
    password: form.password.value
  }

  Http.open('POST', url + 'login', true)
  Http.setRequestHeader('Content-Type', 'application/json')
  Http.send(JSON.stringify(info))
}

function register(){
  const form = document.getElementById('register_form')
  const info = {
    firstname: form.firstname.value,
    surname: form.surname.value,
    email: form.email.value,
    password: form.password.value
  }

  Http.open('POST', url, true)
  Http.setRequestHeader('Content-Type', 'application/json')
  Http.send(JSON.stringify(info))
}

function print(){
  alert(JSON.parse(this.responseText).message)
}