function goFrieND(){
    window.location.href = "addFriend.html";
}

function goAmigos(){
    window.location.href = "listFriends.html";
}

function goXat(){
    window.location.href = "chat.html";
}

function logOut(){
    sessionStorage.clear(0);
    window.location.href = "index.html";
}