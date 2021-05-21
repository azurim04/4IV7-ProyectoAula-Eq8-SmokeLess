function validar(){
    var nombre,telefono,email,mensaje ,expresion;
    nombre = document.getElementById("nombre").value;
    telefono = document.getElementById("telefono").value;
    email = document.getElementById("email").value;
    mensaje = document.getElementById("mensaje").value;
  
    correo= /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3,4})+$/;
    
   
    if(nombre===""||telefono===""||email===""||mensaje===""){
      alert("Todos los campos son obligatorios");
      return false;
    } 
    else if(nombre.length>20){
      alert("Tu nombre excede los limites");
      return false;
    }
    else if(email>15){
      alert("Tu email es demasiado largo");
      return false;
    }
    else if(nombre.length>15){
      alert("Tu nombre solo puede tener 15 caracteres");
      return false;
    }
    else if(isNaN(telefono)){
        alert("El telefono ingresado no son numeros");
        return false;
      }
      else if(!correo.test(correo)){
        alert("Lo ingresado en el campo de E-mail no es un correo");
        return false;
      }
    
    }
