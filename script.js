var nome =  document.getElementById("nomeInput")
var cpf = document.getElementById("cpf")
var rg = document.getElementById("rg")
var email =  document.getElementById("emailInput")
var checkboxMale = document.getElementById("maleInput")
var checkboxFemale = document.getElementById("femaleInput")
var NumeroTel = document.getElementById("tel")

//aqui fica a valdição do site
//onde verifica toda parte escrita
function validar(){
    if(nomeCompleto.value == "" || cpf.value == "" || rg.value == ""|| email.value == ""){
        alert("preencha todos os campos")
        
    }else{
        alert("formulario preenchido com sucesso")
    }
}

//aqui n deixa colocar numeros no input de letras
nomeCompleto.addEventListener("keypress", function(e){

    const keyCode = (e.keyCode ? e.keyCode : e.witch )

    

    if(keyCode > 47 && keyCode < 58){
        e.preventDefault()
    }
})

//inicando as mascaras de cpf e celular
// mascara do telefone
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mtel(tel){
    tel=tel.replace(/\D/g,"");            
    tel=tel.replace(/^(\d{2})(\d)/g,"($1) $2"); 
    tel=tel.replace(/(\d)(\d{4})$/,"$1-$2");    
    return tel;
}
function id( el ){
	return document.getElementById( el );
}


//cpf mascara aqui

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
    }

//mascara de rg aqui

function Rg(rg){
    rg=rg.replace(/\D/g,"");
    rg=rg.replace(/(\d{2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
    return rg;
}
//aqui carrega as funçoes quando a janela carrega
window.onload = function(){
	id('celTelInput').onkeypress = function(){
		mascara( this, mtel );
	}
    id('cpfInput').onkeypress = function(){
        mascara(this, mCPF)
    }
    id('rgInput').onkeypress = function(){
        mascara(this, Rg)
    }
}    