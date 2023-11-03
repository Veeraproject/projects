function firstresult() {
    let firstinput = document.getElementById("firstname").value;
    let firstregex = /^[A-Z][a-z]{4,15}$/

    if (firstregex.test(firstinput)) {
        document.getElementById("name").style.display = 'none';
        document.getElementById('firstname').style.border = "3px solid green"
    } else {
        document.getElementById("firstname").style.border = "3px solid red"
        document.getElementById("name").style.display = 'block'
    }
}
//--------user validation----------

function userresult() {
    let userinput = document.getElementById("username").value;
    let userregex = /^[A-Za-z0-9]{5,12}$/

    if (userregex.test(userinput)) {
        document.getElementById("usernamerr").style.display = 'none';
        document.getElementById('username').style.border = "2px solid green"

    } else {
        document.getElementById("username").style.border = "2px solid red"
        document.getElementById("usernamerr").style.display = 'block'
    }
}
//--------email validation----------

function emailresult() {
    let emailinput = document.getElementById("emailname").value;
    let emailregex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (emailregex.test(emailinput)) {
        document.getElementById("emailnamerr").style.display = 'none';
        document.getElementById('emailname').style.border = "2px solid green"
    } else {
        document.getElementById("emailname").style.border = "2px solid red"
        document.getElementById("emailnamerr").style.display = 'block'
    }
}

//--------password validation----------

function passresult() {
    let passinput = document.getElementById("passname").value;
    let passregex = /^[a-zA-Z0-9@_-]{8,20}$/

    if (passregex.test(passinput)) {
        document.getElementById("passnamerr").style.display = 'none';
        document.getElementById('passname').style.border = "2px solid green"

    } else {
        document.getElementById("passname").style.border = "2px solid red"
        document.getElementById("passnamerr").style.display = 'block'
    }
}

//--------telephone number validation----------

function telephoneresult() {
    let telephoneinput = document.getElementById("telephonename").value;
    let telephoneregex = /^[0-9]\d{9}$/

    if (telephoneregex.test(telephoneinput)) {
        document.getElementById("telephonenamerr").style.display = 'none';
        document.getElementById('telephonename').style.border = "2px solid green"

    } else {
        document.getElementById("telephonename").style.border = "2px solid red"
        document.getElementById("telephonenamerr").style.display = 'block'

}
}

//--------pancard validation----------
function pancardresult() {
    let pancardinput = document.getElementById("pancardname").value;
    let pancardregex = /^[A-Z]{5}[0-9]{4}[A-Z]$/

    if (pancardregex.test(pancardinput)) {
        document.getElementById("pancardnamerr").style.display = 'none';
        document.getElementById('pancardname').style.border = "2px solid green"

    } else {
        document.getElementById("pancardname").style.border = "2px solid red"
        document.getElementById("pancardnamerr").style.display = 'block'
    }
}