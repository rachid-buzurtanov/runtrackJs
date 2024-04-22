function keyHandler(event) {
    var keyCode = event.keyCode;

    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
        var char = String.fromCharCode(keyCode);
        
        if (document.activeElement === textarea) {
            textarea.value += char + char;
        } else {
            textarea.value += char;
        }
    }
}

document.addEventListener("keydown", keyHandler);