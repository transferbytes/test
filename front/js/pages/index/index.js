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
        titulo: ''
    },
    delimiters: ["<%","%>"],
    methods: {
        nuevoemail() {
            var information = [this.info_name ,this.info_email, 'No'];

            if(this.testEmail(this.info_email)) {
                this.sms = '';

                transferBytes.connect({
                    id: '70275140e583c498a2c5a3971187748f383ac37e9e8d81491b77d3b60fef340f',
                    license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                    languaje: this.languaje,
                    content: information,
                    idPost: 0
                }).then((result) => {
                    this.isDownloadActive = false;
                    this.isMailActive = true;
                    this.emailPost();
                });
            } else {
                this.sms = 'Introduce un correo electronico valido';
            }
        },

        downloadBook() {
            transferBytes.connect({
                id: 'e7bd38aeb8c872ed3032cf09624b24d1ad8a61de3774f6b90096f309a6f1d7c7',
                license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
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
                    id: '1f31efa5197bae592a7608b399bc39466dbaaa1bab7a46a40077258703fc63af',
                    license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
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
                id: 'ae22207d4c06c8efe705b0197e42b5d7b017b22ae7a71fb738c1f79f5bafcdc6',
                license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then((result) => {
                this.href = `https://www.transferbytes.io/assets/src/files/${result[0].pdf[0]}`;
                this.titulo = result[0].titulo;
                this.texto = result[0].texto;
                this.legal = result[0].legal;
            });
        },

        emailPost() {
            var information = [this.info_email];

            transferBytes.connect({
                id: '1f31efa5197bae592a7608b399bc39466dbaaa1bab7a46a40077258703fc63af',
                license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
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



