function Clear() {
    if (window.confirm("Deseja realmente limpar o fromulário?")) {
        for (let a = 0; a < 4; a++)
            document.form[a].reset();
    }
}

function Submit() {
    if (document.form[0].nameInput.value.length < 3) {
        window.confirm("Verifique o nome e tente novamente!");
        document.form[0].nameInput.value = '';
    } else {
        document.form[0].nameInput.value = document.form[0].nameInput.value.toUpperCase();
    }

    if (document.form[0].EstadoInput.value == "undefined") {
        document.getElementById('insert').innerHTML = "Selecione um estado civil válido!";
        document.getElementById('insert').style.color = "red";
        document.getElementById('insert').style.fontWeight = "bold";
    } else
        document.getElementById('insert').innerHTML = "";

    if (document.form[1].inputObjetivo.value != "")
        document.form[1].inputObjetivo.value = document.form[1].inputObjetivo.value.toLowerCase();
    else
        window.confirm("Por favor, preencha o campo objetivo!");

    if (document.form[2].telefone.value == "" && document.form[2].email.value == "") {
        window.confirm("Por favor retardado");
    }

    if (document.form[3].ingles.value == "undefined") {
        window.confirm("Por favor preencha");
    }
    if (document.form[3].espanhol.value == "undefined") {
        window.confirm("Por favor preencha");
    }

    var aux = 0;
    for (let i = 0; i < 7; i++) {
        if (document.form[3].lang[i].checked == true)
            aux++;
    }
    if (aux == 0) {
        console.log("kkkkkkkkkkk")
    }


}