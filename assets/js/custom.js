function sendEnquire(){
    var message = "Nome Contato: " + $("#name").val() + "\n\n" +
                    "Mensagem: " + $("#message").val();

    var mail = {
        _replyto: $("#email").val(),
        _subject: "Requisicao do Site " + $("#name").val(),
        message: message
    };

    $.ajax({
        url: "https://formspree.io/geral@clinicaarcadagua.com",
        method: "POST",
        data: mail,
        dataType: "json",
        success: function(data, textStatus, jqXHR){
            alert("Mensagem enviada com sucesso!");
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR, textStatus, errorThrown);
            alert("ERRO");
        }
    });  
}