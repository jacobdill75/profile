
function projectPanel(img, name, date, desc, href, dst) {
    return `<div class=\"w3-half w3-margin-bottom\">
            <img src=\"`.concat(img, `\" alt="project_img\" style=\"width:100%\" `
            + (dst === "" ? "" : `onclick=\"window.open(\'` + dst + `\')\" class=\"w3-hover-opacity\"`) + `>
            <div class="w3-container w3-white">
                <p><b>`, name, `</b></p>
                <p class=\"w3-opacity\">`, date, `</p>
                <p>`, desc, `</p>
                <button class=\"w3-button w3-black w3-margin-bottom\" onclick=\"window.open(\'`, href, `\');\">
                    View Source
                </button>
          </div>`);
}

function addProject(img, name, date, desc, href, dst) {
    div = document.createElement("div");
    div.innerHTML = projectPanel(img, name, date, desc, href, dst);
    document.getElementById('projectScript').parentElement.appendChild(div);
}

function sendMail() {
    name = document.getElementById("inputName").value;
    email = document.getElementById("inputEmail").value;
    company = document.getElementById("inputCompany").value;
    message = document.getElementById("inputMessage").value;
    window.open(
        "mailto:jacobdil@andrew.cmu.edu?subject=A Message From " + company + "&body="
        + message + "%0D%0A%0D%0ASincerely,%0D%0A%0D%0A" + name + "%0D%0AReply at: " + email);
}
