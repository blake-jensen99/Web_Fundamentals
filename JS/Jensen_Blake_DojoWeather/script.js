function remove(selector) {
    document.querySelector(selector).remove();
}


var lowTemp = document.querySelectorAll(".low")
var highTemp = document.querySelectorAll(".high")
function tempChange(element) {
    // console.log("hello")
    if (element.value == "°F") {
        for (var i = 0; i < lowTemp.length; i++) {

            lowTemp[i].innerHTML = Math.round(lowTemp[i].innerHTML * 1.8 + 32);
            highTemp[i].innerHTML = Math.round(highTemp[i].innerHTML * 1.8 + 32);
        }
    }
    else {
        for (var i = 0; i < lowTemp.length; i++) {
            lowTemp[i].innerHTML = Math.round((lowTemp[i].innerHTML - 32) * .5556);
            highTemp[i].innerHTML = Math.round((highTemp[i].innerHTML - 32) * .5556);
        }
    }
}