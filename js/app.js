// Password Viewer
function passwordViewer(event, password) {
    let inputType = password.getAttribute("type"),
        icon = event.currentTarget.childNodes[0];

    // change input type
    if (inputType === "password") {
        password.type = "text";

        // change icon class
        icon.classList.add("bi-eye-slash");
        icon.classList.remove("bi-eye");
    } else {
        password.type = "password";

        // change icon class
        icon.classList.add("bi-eye");
        icon.classList.remove("bi-eye-slash");
    }
}