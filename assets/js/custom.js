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
        return new Rrmd.init();
    }

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
