const ALL_SIGN_UP_INPUTS = [
    "#signUpLastNameInput",
    "#signUpFirstNameInput",
    "#signUpEmailInput",
    "#signUpPasswordInput",
    "#signUpAddressInput",
    "#signUpPostalCodeInput"
];

function isInputFilled(input) {
    return input.val().trim() !== "";
}

function isInputRequiredLength(input, requiredLength) {
    return input.val().trim().length >= requiredLength;
}

function allSignUpInputsFilled() {
    for (let i = 0; i < ALL_SIGN_UP_INPUTS.length; i++) {
        if (!isInputFilled($(ALL_SIGN_UP_INPUTS[i]))) {
            return `<span class="message">Veuillez remplir tous les champs</span>`;
        }
    }
    return "";
}

function verifyLastName() {
    const lastName = $("#signUpLastNameInput");
    if (!isInputRequiredLength(lastName, 3)) {
        return `<span class="message">Le nom doit faire au moins 3 caractères</span>`;
    }
    return "";
}

function verifyFirstName() {
    const firstName = $("#signUpFirstNameInput");
    if (!isInputRequiredLength(firstName, 3)) {
        return `<span class="message">Le prénom doit faire au moins 3 caractères</span>`;
    }
    return "";
}

function verifyEmail() {
    const EMAIL_REGEX = /^[a-zA-Z\d_\-.]+@[a-zA-Z\d_\-.]+\.[a-zA-Z]+$/;
    const email = $("#signUpEmailInput");
    if (!EMAIL_REGEX.test(email.val().trim())) {
        return `<span class="message">Adresse mail invalide</span>`;
    }
    return "";
}

function verifyPassword() {
    const password = $("#signUpPasswordInput");
    const SPECIAL_CHARACTERS = /[!@#\$%\^&\*\(\)_\+\-=\[\]{};':"\\|,\.\/<>?]/;
    const PASSWORD_CONDITIONS = [
        {
            condition: (!isInputRequiredLength(password, 8)),
            message: `Le mot de passe doit faire au moins 8 caractères`
        },
        {
            condition: (password.val().search(/[a-z]/) === -1),
            message: `Le mot de passe doit inclure au moins une lettre minuscule`
        },
        {
            condition: (password.val().search(/[A-Z]/) === -1),
            message: `Le mot de passe doit inclure au moins une lettre majuscule`
        },
        {
            condition: (password.val().search(/[0-9]/) === -1),
            message: `Le mot de passe doit inclure au moins un chiffre`
        },
        {
            condition: (password.val().search(SPECIAL_CHARACTERS) === -1),
            message: `Le mot de passe doit inclure au moins un caractère spécial ASCII`
        }
    ];

    for (let i = 0; i < PASSWORD_CONDITIONS.length; i++) {
        if (PASSWORD_CONDITIONS[i].condition) {
            return `<span class="message">${PASSWORD_CONDITIONS[i].message}</span>`;
        }
    }
    return "";
}

function verifyAddress() {
    const address = $("#signUpAddressInput");
    if (!isInputRequiredLength(address, 6)) {
        return `<span class="message">L'adresse doit faire au moins 6 caractères</span>`;
    }
    return "";
}

function verifyPostalCode() {
    const postalCode = $("#signUpPostalCodeInput");
    if (!isInputRequiredLength(postalCode, 2)) {
        return `<span class="message">Le code postal doit faire au moins 2 caractères</span>`;
    }
    return "";
}

function displayMessages() {
    $(".message").remove();

    const allStatus = allSignUpInputsFilled();
    const ALL_INPUT_STATUS = [
        verifyLastName(),
        verifyFirstName(),
        verifyEmail(),
        verifyPassword(),
        verifyAddress(),
        verifyPostalCode()
    ];

    $("form").prepend(allStatus);
    for (let i = 0; i < ALL_SIGN_UP_INPUTS.length; i++) {
        if (ALL_INPUT_STATUS[i]) {
            $(ALL_SIGN_UP_INPUTS[i]).after(ALL_INPUT_STATUS[i]);
        }
    }
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
