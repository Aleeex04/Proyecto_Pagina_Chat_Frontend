function listFriends() {
    let tab = document.getElementById("tab");

    if (tab.style.display === "block") {
        tab.style.display = "none";
        return;
    }

    let mail = sessionStorage.getItem("mail");
    let session = sessionStorage.getItem("session");

    var http = new XMLHttpRequest();
    http.open("GET", "http://localhost:8080/Proyecto_Chat/Friend?mail=" + mail + "&session=" + session, true);

    http.onreadystatechange = function () {
        if (this.readyState == 4 && http.status == 200) {
            let listFriends = JSON.parse(http.response);
            tab.innerHTML = "";

            for (let friend of listFriends) {
                const option = document.createElement("li");
                option.textContent = friend; // Accede directamente al valor del amigo
                option.style.listStyleType = "none"; // Agrega esta línea para eliminar el punto
                tab.appendChild(option);
            }

            // Mostrar la lista de amigos
            tab.style.display = "block";
        }
    }
    http.send();
}


function goOptions() {
    window.location.href = "options.html";
}
