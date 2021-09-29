class ValidaFormulario {
    constructor (){
        this.formulario = document.querySelector ('.formulario');
        this.eventos();
    }
    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const campoValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValida();
        
        if(campoValidos && senhasValidas){
            alert('Formulario enviado com sucesso !');
            this.formulario.submit();
        }
    }
    senhasSaoValida(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
    
            if (senha.value !== repetirSenha.value){
                valid = false;
                this.criarErro(senha, 'Campos senha e repetir senha devem ser iguais !');
                this.criarErro(repetirSenha, 'Campos senha e repetir senha devem ser iguais !');
            
            }
            if(senha.value.length < 6 || senha.value.length > 12){
                valid = false;
                this.criarErro(senha, `Senha precisa ter entre 6 e 12 caracteres`);
                
            }
            
        return valid;
    }

    camposSaoValidos(){
        let valid = true ;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }
        
        for (let campo of this.formulario.querySelectorAll ('.validar')){
            const label = campo.previousElementSibling.innerText;
            if(!campo.value){
                this.criarErro(campo,`Campo ${label} não pode estar vazio`)
                valid = false;
            }
            
            if (campo.classList.contains('cpf')){
                if(!this.validaCPF (campo)) valid =false ;
            }
            if (campo.classList.contains('usuario')){
                if(!this.validaUsuario (campo)) valid =false ;
            }
            
            
        } 
     return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario.length > 12){
            this.criarErro(campo, `Usuario precisa ter entre 3 e 12 caractere`);
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criarErro(campo, ` Usuário só poderá conter letras e/ou números`);
            valid = false;
        }
      
        return valid; 
    }
    
    

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.criarErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    }


    criarErro(campo,msg){
    const div = document.createElement('div');
    div.innerHTML = msg ;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend',div)

    }
}

const valida = new ValidaFormulario();