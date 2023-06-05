function sendSms(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let receptor = document.getElementById("receptor").value;
    let sms = document.getElementById("sms").value;
    
    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/Proyecto_Chat/Xat",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("mail=" + mail +"&session=" + session + "&receptor=" + receptor + "&sms="+ sms);
    http.onload = function(){

        if(this.readyState== 4 && http.status==200){
            
        }       
    }
    getSms();
}

function getSms(){

    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    

    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/Proyecto_Chat/Xat?mail=" + mail + "&session="+ session,true);
    
    http.onload = function(){
        if(this.readyState== 4 && http.status==200){
            let message = JSON.parse(http.response);
            alert("Tienes un nuevo mensage!");
            let listFriends = JSON.parse(http.response);
            let tab = document.getElementById("tab");
            tab.innerHTML= "";

            const option = document.createElement("p");
            option.textContent = JSON.stringify(message["text"]);
            tab.appendChild(option);
        }
    }
    http.send();
}
function goOptions(){
    window.location.href = "options.html";
}

window.onload = function(){
    setInterval(getSms(),50) 
    
}
