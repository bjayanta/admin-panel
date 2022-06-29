// Clickable table function
document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll("tr[data-href]");
    rows.forEach(row => {
        row.addEventListener("click", () => {
            window.location.href = row.dataset.href;
            console.log(1);
        })
    })
})


// Editable table function
var table = document.getElementById("editable")
var cells = table.getElementsByClassName("show-edit-input")

for (var i = 0; i < cells.length; i++) {
    cells[i].ondblclick = function () {
        if (this.hasAttribute('data-clicked')) {
            return;
        }
        this.setAttribute('data-clicked', 'yes');
        this.setAttribute('data-text', this.innerHTML)


        var input = document.createElement('input');
        input.setAttribute("type", "text");
        input.value = this.innerHTML;
        input.classList.add("form-control")
        input.classList.add("table-input")

        input.onblur = function () {
            // use ajax to connect server 

            var td = input.parentElement
            var origText = input.parentElement.getAttribute('data-text')
            var currentText = this.value


            if (origText != currentText) {
                td.removeAttribute("data-clicked")
                td.removeAttribute("data-text")
                td.innerHTML = currentText;
            } else {
                td.removeAttribute("data-clicked")
                td.removeAttribute("data-text")
                td.innerHTML = origText;
            }
        }

        this.innerHTML = '';
        this.append(input);
        this.firstElementChild.select();
    }

}




// select master & child checkboxes
let masterCheckbox = document.getElementById("check-all"),
    childCheckbox = document.querySelectorAll('[name="records[]"]');
// add 'change' event into master checkbox
masterCheckbox.addEventListener("change", function () {
    // add/remove attribute into child checkbox conditionally
    for (var i = 0; i < childCheckbox.length; i++) {
        if (this.checked) {
            childCheckbox[i].checked = true; // add attribute
        } else {
            childCheckbox[i].checked = false; // add attribute
        }
    }
});
