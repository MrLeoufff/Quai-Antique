const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("BtnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials() {
    // Içi il faudra appeler L'API
    if (mailInput.value == "test@gmail.com" && passwordInput.value == "123") {
        // Il faudra récupérer le vrai token
        const token = "ldnfslkrgfkrjhgrjegjiregindjfnlsjknglknlkrngvf";
        setToken(token);

        // Placer ce token en cookie
        setCookie(roleCookieName, "admin", 7);
        window.location.replace("/");
    } else {
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}