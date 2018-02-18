/**
 * Created by Ivan Tabarino
 * User: itabarino
 * Date: 31/12/16
 * Time: 11:47
 */

/**
 * Create a New Context Environment
 */
(function(global, $) {
    
    /**
     * Rrmd Function (Constructor)
     */
    var Rrmd = function() {
        
        // Return New Object 
        return new Rrmd.init();
        
    }
    
    /**
     * Private Variables and Functions
     */
    /*$('#ricardoback').click(function() {
        if ($('#ricardo').prop('src').split('/').pop() === 'ricardo.jpg') {
            $('#ricardo').prop('src','images/team/ricardohappy.jpg');
            $('#ricardoback').css({'background-image': 'url("images/team/ricardohappy.jpg")', 'background-position': 'center top'});
        } else {
            $('#ricardo').prop('src','images/team/ricardo.jpg');
            $('#ricardoback').css({'background-image': 'url("images/team/ricardo.jpg")', 'background-position': 'center top'});
        }
    });*/

    /**
     * Create a Prototype Chain
     * Public Variables and Functions
     */
    Rrmd.prototype = {
        /**
         * Send Email
         */
        sendEnquire: function() {

            var self = this;

            if (!self.validateMessage()) {
                return;
            }

            emailjs.send("gmail", "mensagem_site", { 
                from_name: $("#contactName").val(),
                from_email: $("#contactEmail").val(),
                message_html: $("#message").val()})
            .then(function(response) {
                document.getElementById("contact").submit();
            }, function(err) {
                swal({
                    title: "Erro!",
                    text: "Não foi possivel enviar o email. Por favor tente novamente.",
                    type: "error",
                    confirmButtonText: "Ok"
                });
                console.log("FAILED. error=", err);
            });

            /*var message = "Nome Contato: " + $("#contactName").val() + "\n\n" +
                          "Mensagem: " + $("#message").val();

            var mail = {
                _replyto: $("#contactEmail").val(),
                _subject: "Requisicao do Site " + $("#contactName").val(),
                message: message
            };*/

            //this.sendEmail();

            /*$.ajax({
                url: "https://formspree.io/geral@clinicaarcadagua.com",
                method: "POST",
                data: mail,
                dataType: "json",
                success: function(data, textStatus, jqXHR) {
                    swal({
                        title: "Mensagem enviada com sucesso!",
                        type: "success",
                        confirmButtonText: "Ok"
                    });
                    self.clearFields();
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    swal({
                        title: "Erro!",
                        text: "Não foi possivel enviar o email. Por favor tente novamente.",
                        type: "error",
                        confirmButtonText: "Ok"
                    });
                }
            });
            */
        },

        /**
         * Validate Message
         */
        validateMessage: function() {
            if ($("#contactName").val() === '') {
                swal({
                    title: "Erro!",
                    text: "Digite o nome, por favor!",
                    type: "error",
                    confirmButtonText: "Ok"
                });
                return false;
            }

            var rg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!rg.test($("#contactEmail").val())) {
                swal({
                    title: "Erro!",
                    text: "Digite um email válido, por favor!",
                    type: "error",
                    confirmButtonText: "Ok"
                });
                return false;
            }

            if ($("#message").val() === '') {
                swal({
                    title: "Erro!",
                    text: "Digite uma mensagem, por favor!",
                    type: "error",
                    confirmButtonText: "Ok"
                });
                return false;
            }

            return true;
        },
        
        /**
         * Clear Fields
         */
        clearFields: function() {
            
            $('#contactName').val('');
            $('#contactEmail').val('');
            $('#message').val('');
            
        },

        /**
         * Send Email
         */
        sendEmail: function() {
            var message = {
              to: {
                name: "Ivan",
                email: "tabarino@outlook.com"
              },
              from: {
                name: "Clinica Arca Dagua",
                email: "smtpjsclinicaarcadagua@gmail.com"
              },
              body: {
                text: "test123",
                html: "test123"
              },
              subject: "subject",
            };
            
            var test = Base64.encode(this.createMimeMessage(message));

            /*function sendMessage(userId, email, callback) {
                // Using the js-base64 library for encoding:
                // https://www.npmjs.com/package/js-base64
                var base64EncodedEmail = Base64.encodeURI(email);
                var request = gapi.client.gmail.users.messages.send({
                  'userId': userId,
                  'resource': {
                    'raw': base64EncodedEmail
                  }
                });
                request.execute(callback);
              }*/
        },          
          
        // Create a MIME message that complies with RFC 2822
        createMimeMessage: function(msg) {
            var nl = "\r\n";
            var boundary = "__clinica__";
          
            var mimeBody = 
                "MIME-Version: 1.0" + nl +
                "To: " + msg.to.name + "<" + msg.to.email + ">" + nl +
                "From: " + msg.from.name + "<" + msg.from.email + ">" + nl +
                "Subject: " + msg.subject + nl +
                "Content-Type: multipart/alternative; boundary=" + boundary + nl +
                "--" + boundary + nl +
                "Content-Type: text/plain" + nl +
                msg.body.text + nl +
                "--" + boundary + nl +
                "Content-Type: text/html" + nl +
                msg.body.html + nl +
                "--" + boundary + "--";
          
            return mimeBody;
        }

    };
    
    /**
     * Init Function
     */
    Rrmd.init = function() {
        
    }
    
    /**
     * Any objects should point to the Rrmd Prototype Chain
     */
    Rrmd.init.prototype = Rrmd.prototype;
    
    /**
     * Expose Rrmd Function to global as Rrmd
     */
    global.Rrmd = Rrmd;
    
    
}(window, jQuery));