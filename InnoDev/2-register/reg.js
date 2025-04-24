(function(doc){
    'use strict';
    

    const $regButton = doc.querySelector('.reg-btn');
    const $backloginButton = doc.querySelector('.return-btn'); // Select login button
    const $email = doc.querySelector('#email'); // Select email input
    const $password = doc.querySelector('#password'); // Select password input

    function on(element,event,callback){
        element.addEventListener(event, callback, false)
    }

    on($regButton,'click', function(event){
        event.preventDefault();
        try {
            verifyInput()
        }
        catch(error) {
            alert('Algo de errado não está certo!');
            console.error('Erro no login:', error);
        }


    })

    function verifyInput() {
        if ($email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && 
            $password.value.match(/[\w\d]+/g)) { // Corrected regex for password
            alert("Usuário cadastrado com sucesso!")
            window.location.href = "../1-login/login.html"
        }
        else {
            alert("E-mail e Senha obrigatórios!")
        }
    }

    // ------- Adicionando evento no botão "Retornar ao Login" -------

    on($backloginButton, 'click', function(event) {
        event.preventDefault(); // Prevent default action of the button
        window.location.href = "../1-login/login.html"; // Redirect to login page
    });
    
    
})(document)
