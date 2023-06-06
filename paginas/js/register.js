function register(){

    let user = document.getElementById("user").value;
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let codeCountry = document.getElementById("codeCountry").value;
    alert(user+mail+pass+codeCountry);
    
    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/Proyecto_Chat/Register",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("user=" + user +"&mail=" + mail + "&pass=" + pass + "&codeCountry=" + codeCountry);
    http.onload = function(){
        if(this.readyState== 4 && http.status==200){
            if(http.responseText === "true"){
                alert("Registro completado, inicia sesion");
                window.location.href = "index.html";
            }else{
                alert("Registro no competado");
            }
        }
    }
}

function codeCountry(){
    var http = new XMLHttpRequest();
    http.open("GET","http://localhost:8080/Proyecto_Chat/Register",true);

    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            console.log(this.responseText);
            var paisos = JSON.parse(http.response);
            var select = document.getElementById("codeCountry");

            select.innerHTML = "";

            paisos.forEach(function(pais) {
                var option = document.createElement("option");
                option.text = pais.name;
                option.value= pais.code;
                select.add(option);
            });
        }
    }
    http.send();
}

function goLogin(){
    window.location.href = "index.html";
}

window.onload = function(){
    codeCountry();
    
}

