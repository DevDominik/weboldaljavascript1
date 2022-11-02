function onClick() {
    document.getElementById("visszaigazoloNev").innerHTML = document.getElementById("nev").value;
    document.getElementById("visszaigazoloHely").innerHTML = document.getElementById("hely").value;
    document.getElementById("visszaigazoloTelefon").innerHTML = document.getElementById("telefon").value;
}

function onFocus(obj) {
    obj.style.backgroundColor = "rgb(140,123,210)"
}

function onBlur(obj) {
    obj.style.backgroundColor = "rgb(255,255,255)"
}