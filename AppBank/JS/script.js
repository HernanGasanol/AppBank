document.getElementById("btn__iniciar sesion").addEventListener("click", iniciarSesion)
document.getElementById("btn__registrarse").addEventListener("click", register)
window.addEventListener('resize',anchopage);





// delcaración de variables
var contenedorLoginRegister=document.querySelector(".contenedor__login-register") // contenedor de los dos de abajo 
var formularioLogin=document.querySelector(".formulario__login") // formulario login 
var formularioRegister=document.querySelector(".formulario__register") // formulario register

// cajas traseras
var cajatraseraLogin=document.querySelector(".caja__trasera-login")
var cajatraseraRegister=document.querySelector(".caja__trasera-register")

function anchopage(){
    if(window.innerWidth>850){
        cajatraseraLogin.style.display="block";
        cajatraseraRegister.style.display="block";
    }else {
        cajatraseraRegister.style.display="block"
        cajatraseraRegister.style.opacity="1"
        cajatraseraLogin.style.display="none"
        formularioLogin.style.display="block"
        formularioRegister.style.display="none"
        contenedorLoginRegister.style.left="0px"
    }
}
anchopage();


function iniciarSesion(){        
    if(window.innerWidth>850){
    formularioRegister.style.display="none";
    contenedorLoginRegister.style.left="10px";
    formularioLogin.style.display="block";
    cajatraseraRegister.style.opacity="1";
    cajatraseraLogin.style.opacity="0";
    } else {

    formularioRegister.style.display="none";
    contenedorLoginRegister.style.left="0px";
    formularioLogin.style.display="block";
    cajatraseraRegister.style.display="block";
    cajatraseraLogin.style.display="none";

 

    }



}





function register(){        
    if(window.innerWidth>850){
    formularioRegister.style.display="block";
    contenedorLoginRegister.style.left="410px";
    formularioLogin.style.display="none";
    cajatraseraRegister.style.opacity="0";
    cajatraseraLogin.style.opacity="1";
    }else {
        formularioRegister.style.display="block";
        contenedorLoginRegister.style.left="0px";
        formularioLogin.style.display="none";
        cajatraseraRegister.style.display="none";
        cajatraseraLogin.style.display="block";
        cajatraseraLogin.style.opacity="1";


    }


}