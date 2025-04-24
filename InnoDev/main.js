(function(win,doc){
    'use strict'
var $email = doc.querySelector('#email')
var $password = doc.querySelector('#password')
var $button_login = doc.querySelector('.login-btn')
var $button_reg = doc.querySelector('.reg-btn')

function on(element,event,callback){
    element.addEventListener(event, callback, false)
}

on($button_login,'click', function clickLogin(event){
    event.preventDefault();
    try {
        verifyInput()
    }
    catch(error) {
        alert('Algo de errado não está certo!');
        console.error('Erro no login:', error);
    }
})

// ------- Essa parte do código estamos verificando as entradas do usuario nos "inputs" -------

function verifyInput() {
    if ($email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && 
        $password.value.match(/[\w+d+]/g)) {
        window.location.href = '../3-index/index.html';
    }
    else {
        alert("E-mail e Senha obrigatórios!")
    }
}

// ------- Adicionando evento no botão "Register" -------

on($button_reg, 'click', function(event){
    event.preventDefault();
    window.location.href = '../2-register/register.html'
})




})(window,document)