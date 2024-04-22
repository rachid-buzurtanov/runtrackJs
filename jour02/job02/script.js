function showhide() {
    var citation = document.getElementById("citation");

    if (citation.style.display === "none" || citation.style.display === "") {
        citation.style.display = "block";
    } else {
        citation.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let button = document.getElementById("button");
    button.addEventListener("click", showhide);
});