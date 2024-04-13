document.querySelector('button').addEventListener('click', function(event) {

    const email = document.querySelector("input").value.trim();
    const emailError = document.querySelector(".error-message");

    emailError.textContent = "";

    if (email === "") {
        emailError.textContent = "Oops! Please add your email";
        event.preventDefault();
    } else if (! validateEmail(email)) {
        emailError.textContent = "Oops! Please check your email";
        event.preventDefault();
    }
})

function validateEmail(email) {
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailRegex.test(email);
}

