import {config, key} from '../../config/config';

new Vue({
    el: '#nuevoemail',
    data: {
        isMailActive: false,
        isDownloadActive: true,
        example: null,
        languaje: 'ES',
        info_email: '',
        info_name: '',
        info_descarga: '',
        sms: '',
        idPost: '',
        href: '',
        texto: '',
        legal: '',
        titulo: '',
        link: ''
    },
    delimiters: ["<%","%>"],
    methods: {
        nuevoemail() {
            var information = [this.info_name ,this.info_email, 'No'];

            if(this.testEmail(this.info_email)) {
                this.sms = '';

                transferBytes.connect({
                    id: config.nuevoemail,
                    license: key,
                    languaje: this.languaje,
                    content: information,
                    idPost: 0
                }).then((result) => {
                    this.isDownloadActive = false;
                    this.isMailActive = true;
                    this.link = this.href;
                    this.emailPost();
                });
            } else {
                this.sms = 'Introduce un correo electronico valido';
            }
        },

        downloadBook() {
            transferBytes.connect({
                id: config.descargaarchivo,
                license: key,
                languaje: this.languaje,
                content: ['Si'],
                idPost: this.idPost
            });
        },

        testEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return re.test(String(email).toLowerCase());
        },

        verifyEmail() {
            if(this.info_name && this.info_email) {
                var information = [this.info_email];

                transferBytes.connect({
                    id: config.comprobaremail,
                    license: key,
                    languaje: this.languaje,
                    content: information,
                    idPost: 0
                }).then((result) => {
                    if(result.length == 0) {
                        this.nuevoemail();
                    } else {
                        this.sms = 'Ya te bajaste nuestro libro';
                    }
                });
            }else {
                this.sms = 'Rellena todos los campos';
            }
        },

        infobook() {
            var information = [];
            transferBytes.connect({
                id: config.infobook,
                license: key,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                this.href = `https://www.transferbytes.io/assets/src/files/${result[0].pdf[0]}`;
                this.titulo = result[0].titulo;
                this.texto = result[0].texto;
                this.legal = result[0].textoLegal;
            });
        },

        emailPost() {
            var information = [this.info_email];

            transferBytes.connect({
                id: '1f31efa5197bae592a7608b399bc39466dbaaa1bab7a46a40077258703fc63af',
                license: key,
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                this.idPost = result[0].idPost;
                this.sms = 'Gracias por bajarte nuestro ebook :)';
            });
        }
    },
    mounted() {
        this.infobook();
    }
});



