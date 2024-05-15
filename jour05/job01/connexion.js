const ALL_LOGIN_INPUTS = [
    "#loginEmailInput",
    "#loginPasswordInput"
];

function isInputFilled(input) {
    return input.val().trim() !== "";
}

function allLoginInputsFilled() {
    for (let i = 0; i < ALL_LOGIN_INPUTS.length; i++) {
        if (!isInputFilled($(ALL_LOGIN_INPUTS[i]))) {
            return `<span class="message">Veuillez remplir tous les champs</span>`;
        }
    }
    return "";
}

function displayMessages() {
    $(".message").remove();

    const allStatus = allLoginInputsFilled();
    $("form").prepend(allStatus);
}

$(document).ready(function() {
    displayMessages();
    $("body").on("input", function() {
        displayMessages();
    });

    $("form").on("submit", function(event) {
        displayMessages();
        if ($(".message").length > 0) {
            event.preventDefault();
        }
    });
});
