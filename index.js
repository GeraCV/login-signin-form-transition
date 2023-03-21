const btnShowFormSignIn = document.getElementById('btn-show-form-signin')
const btnShowFormLogIn = document.getElementById('btn-show-form-login')
const background = document.getElementById('container-background')
const containerLogIn = document.getElementById('container-login')
const containerSignUp = document.getElementById('container-signup')
const containerLogInDescription = document.getElementById('container-login-description')
const containerSignUpDescription = document.getElementById('container-signup-description')

const assignTranslateClass = () => {
    background.classList.toggle('translate-background')
    containerLogIn.classList.toggle('translate-login')
    containerSignUp.classList.toggle('translate-signup')
    containerLogInDescription.classList.toggle('translate-login-description')
    containerSignUpDescription.classList.toggle('translate-signup-description')
}

btnShowFormSignIn.addEventListener('click', () => assignTranslateClass())
btnShowFormLogIn.addEventListener('click', () => assignTranslateClass())