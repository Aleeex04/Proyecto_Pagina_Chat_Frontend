function enviar(){
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;

  var http = new XMLHttpRequest();
  http.open("GET","http://localhost:8080/Proyecto_Chat/Login?mail=" + mail + "&pass="+ pass,true);

  http.onreadystatechange = function(){

    if(this.readyState=== 4 && http.status===200){
      var session =http.responseText;
      alert(session);
      if(session !== "false"){
        sessionStorage.setItem("session",session);
        sessionStorage.setItem("mail",mail);
        window.location.href = "options.html";
      } else{
        alert("Sesion interrumpida.Vuelva a intentarlo.")
      }
    }
  }
  http.send();
}


function goRegister(){
  window.location.href = "register.html";
}