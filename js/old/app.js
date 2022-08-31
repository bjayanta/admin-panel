// Dark mode function
function themeColorChange() {
    let icon = document.getElementById("bi-moon-stars")
    document.body.classList.toggle("dark-mode")
    icon.classList.toggle("bi-brightness-high")
    icon.classList.toggle("bi-moon-stars")
}





// Open full screen function
function toggleFullScreen() {
    let icon = document.getElementById("bi-arrows-fullscreen")
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        icon.classList.remove("bi-arrows-fullscreen")
        icon.classList.add("bi-fullscreen-exit")
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            icon.classList.add("bi-arrows-fullscreen")
            icon.classList.remove("bi-fullscreen-exit")
        }
    }
    console.log(icon);
}


//search-bar=
function shearchFunction() {
    var searchBar = document.getElementById("search-bar")
    var searchInput = document.getElementById("search-input")
    searchBar.classList.toggle("show")
    if (searchBar.className == "search-bar show") {
        searchInput.focus()
        searchInput.value = ""
    }
}






// Password input
function show(event, password) {
    let type = password.getAttribute("type");
    let eye = event.currentTarget.childNodes[0];
    if (type === "password") {
        password.type = "text";
        eye.classList.add("bi-eye-slash-fill");
        eye.classList.remove("bi-eye-fill");
    } else {
        password.type = "password";
        eye.classList.remove("bi-eye-slash-fill");
        eye.classList.add("bi-eye-fill");
    }
}


// CapsLock
function capsLock(event) {
    if (event.getModifierState("CapsLock")) {
        document.getElementById("capsLockText").classList.add("d-block")
        document.getElementById("capsLockText").classList.remove("d-none")
    } else {
        document.getElementById("capsLockText").classList.add("d-none")
        document.getElementById("capsLockText").classList.remove("d-block")
    }
}



// Print
function printable(area) {
    var printContents = document.getElementById(area).innerHTML, // get printable content 
        originalContents = document.body.innerHTML; // get document content
    
    // make a temporary document for printable content
    document.body.innerHTML = printContents;
    window.print(); // print the current document

    // restore the original document 
    document.body.innerHTML = originalContents;
}

// select all 
function checkAll(event, input) {
    for (var i = 0; i < input.length; i++) {
        if (event.target.checked) {
            input[i].checked = true;
        } else {
            input[i].checked = false;
        }
    }
}