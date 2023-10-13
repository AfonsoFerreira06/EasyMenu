


//FUNCAO BOTAO CADASTRAR
function store(){
    //DECLARACAO DE VARIAVEIS
        var name = document.getElementById('name');
        var pw = document.getElementById('pw');
        var lowerCaseLetters = /[a-z]/g;
        var upperCaseLetters = /[A-Z]/g;
        var numbers = /[0-9]/g;
         //CASO NAO PREENCHA EMAIL E SENHA
        if(name.value.length == 0){
            alert('por favor insira um usuário');
    
        }else if(pw.value.length == 0){
            alert('por favor insira uma senha');
    
        }else if(name.value.length == 0 && pw.value.length == 0){
            alert('Por favor insira um usuário e uma senha');
            //REQUISITOS PARA SENHA
        }else if(pw.value.length > 8){
            alert('Máximo de 8 caracteres');
    
        }else if(!pw.value.match(numbers)){
            alert('por favor adicione um número');
    
        }else if(!pw.value.match(upperCaseLetters)){
            alert('por favor adicione uma letra maiúscula');
    
        }else if(!pw.value.match(lowerCaseLetters)){
            alert('por favor adicione uma letra minúscula');
             //SALVAR DADOS NO LOCALSTORAGE 
        }else{
            localStorage.setItem('name', name.value);
            localStorage.setItem('pw', pw.value);
            localStorage.setItem('completonome', ncompleto.value);
            localStorage.setItem('datanasc', data.value);
            localStorage.setItem('email', email.value);
            //CADASTRO FEITO
            alert('sua conta foi criada!')
            setTimeout(()=>{
                window.location.href = 'login.html'
               })
                
        }
        
    }

//FUNCAO BOTAO DE LOGIN
function check(){
    //DECLARACAO DE VARIAVEIS
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");
    //COMPARACAO DADOS DO LOCALSTORAGE PARA LOGIN
    if(userName.value == storedName && userPw.value == storedPw)
    {
        //SE DER CERTO
     alert('acesso aceito');
     setTimeout(()=>{
    window.location.href = '../cardapio/socorro.html'
   })
    

       
    }
    //SENAO
    else{
        alert('Error: usuário ou senha incorretos');
    }
    
}