function rebreMissatge() {
    var mail = sessionStorage.getItem('mail');
    var session = sessionStorage.getItem('session');
  
    var http = new XMLHttpRequest();
  
    http.open("GET", "http://localhost:8080/Proyecto_Chat/Xat?mail=" + mail + "&session=" + session, true);

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
          var response = JSON.parse(http.responseText);
          var emisor = response.emisor;
          var text = response.text;
          console.log('Emisor: ' + emisor);
          console.log('Texto: ' + text);
          var conversation = document.getElementById("missatges");
          var message = document.createElement("p");
          message.textContent = emisor + ": " + text;
          conversation.appendChild(message);
          conversation.scrollTop = conversation.scrollHeight;

        }
      };

    http.send();
  }
  
  function enviarMissatge() {
    var mail = sessionStorage.getItem('mail');
    var session = sessionStorage.getItem('session');
    var receptor = document.getElementById("receptor").value;
    var sms = document.getElementById("sms").value;
  
    var http = new XMLHttpRequest();

    http.open("POST", "http://localhost:8080/Proyecto_Chat/Xat?mail=" + mail + "&session=" + session + "&receptor=" + receptor + "&sms=" + sms, true);
  
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {

        var conversation = document.getElementById("missatges");
        var message = document.createElement("p");
        message.textContent = "Tu : " + sms;
        conversation.appendChild(message);
  
        document.getElementById("sms").value = "";
        rebreMissatge();
        conversation.scrollTop = conversation.scrollHeight;

      }
    };
  
    http.send();
  }


function goOptions(){
    window.location.href = "options.html";
}

window.onload = function(){
    setInterval(rebreMissatge(),50) 
    
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
      event.preventDefault(); // Evita el envío automático del formulario
      enviarMissatge(); // Llama a la función enviarMensaje()
  }
}

