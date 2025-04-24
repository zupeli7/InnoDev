(function(win,doc){
    'use strict';
    

    const $regButton = doc.querySelector('.reg-btn');
    const $returnloginButton = doc.querySelector('.return-btn');

    function on(element,event,callback) {
        element.addEventListener(event,callback,false)
    }

    on($regButton,'click', function(event){
        preventDefault();
        try {
            verifyInput()
        }
        catch {
            
        }


    })

    function verifyInput(){
        if 
        ($email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) && 
        $password.value.match(/[\w+d+]/g)) {
    }
    else {
        alert("E-mail e Senha obrigatórios!")
    }
    }

    
    
})(window,document)