let textAdded = false;
let hideButtonAdded = false;

function createText() {
    let quote = `
        Les logiciels et les cathedrales, c'est un peu la meme chose, 
        - d'abord, on les construit, ensuite, on prie.
    `;

    if (textAdded) {
        $("p").show();
    } else {
        $("body").append(`<p>${quote}</p>`);
        textAdded = true;
    }
}

function Masquer() {
    $("p").hide();
}

function addMasquer() {
    if (textAdded && !hideButtonAdded) {
        $("#createText").after("<button id='Masquer'>Masquer du texte</button>");
        $("body").on("click", "#Masquer", function() {
            Masquer();
        });
        hideButtonAdded = true;
    }
}

$(document).ready(function() {
    $("#createText").click(function() {
        createText();
        addMasquer();
    });
});
