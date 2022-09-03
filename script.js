const arrayElementos = [["e", "enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];


function btnCriptOnclick() {
    let message = document.getElementById("textarea-input").value;    
    document.getElementById("textarea-output").value = criptografar(message);
}

function btnDecriptOnclick() {
    let message = document.getElementById("textarea-input").value;    
    document.getElementById("textarea-output").value = descriptografar(message);
}

function btnCopiarOnclick() {
    navigator.clipboard.writeText(document.getElementById("textarea-output").value);
}

function criptografar(msg) {
    msg = msg.toLowerCase();

    for (let index = 0; index < arrayElementos.length; index++)
        if (msg.includes(arrayElementos[index][0]))
            msg = msg.replaceAll(arrayElementos[index][0], arrayElementos[index][1])

    return msg;
}

function descriptografar(msg) {
    msg = msg.toLowerCase();

    for (let index = 0; index < arrayElementos.length; index++)
        if (msg.includes(arrayElementos[index][1]))
            msg = msg.replaceAll(arrayElementos[index][1], arrayElementos[index][0])

    return msg;
}