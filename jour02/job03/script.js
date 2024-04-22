let count = 0;

function addOne() {
    count++;
    document.getElementById("compteur").innerHTML = count;
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button");
    button.addEventListener("click", addOne);
});