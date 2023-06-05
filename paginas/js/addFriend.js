function addFriend(){
    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");
    let friend = document.getElementById("friend").value;
 

    var http = new XMLHttpRequest();
    http.open("POST","http://localhost:8080/Proyecto_Chat/Friend",true);
    http.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    http.send("mail=" + mail +"&session=" + session + "&friend=" + friend);
    http.onload = function(){

        if(this.readyState== 4 && http.status==200){
            var response = http.responseText;
            alert(response);

            if(response === "1"){
                alert("Amic afegit correctament");
            }else if(response === "2"){
                alert("Amic no trobat");
            }else if(response === "3"){
                alert("El codi de sessio ha expirat i es requereix login novament");
            }else{
                alert("El servidor no respon");
            }
        }       
    }

}

function goOptions(){
    window.location.href = "options.html";
}