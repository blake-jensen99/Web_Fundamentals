function changeName(selector){
    console.log("Hello");
    document.querySelector(selector).innerHTML = "John Doe";
}

function remove(selector){
    document.querySelector(selector).remove()
}

function decreaseRequests(selector){
    document.querySelector(selector).innerHTML--;
}

function increaseConnections(selector){
    document.querySelector(selector).innerHTML++;
}