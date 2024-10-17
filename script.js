const showHIddenPass = (inputPass, inputIcon) =>{
    const input = document.getElementById(inputPass),
    iconEye = document.getElementById(inputIcon)

    iconEye.addEventListener('click', ()=>{
        if (input.type === 'password'){
            input.type = 'text'
            iconEye.classList.add('ri-eye-line')
            iconEye.classList.remove('ri-eye-off-line')
        }else{
            input.type = 'password'
            iconEye.classList.remove('ri-eye-line')
            iconEye.classList.add('ri-eye-off-line')
        }
    })
}

showHIddenPass('input-pass', 'input-icon')

function signUpNow() {
    window.location.href = 'signup.html'
}

function logInNow() {
    window.location.href = 'index.html'
}

