let transferbytes = require('transferbytes');

class ExampleController2 {
  constructor (app) {
    this.app = app;
  }

  init () {
    this.app.get('/', async (req, res) => {
      try {
        let data2;

        data2 = await transferbytes.connect({
          id: '00f544319ee4a5d0221119ae4503f815',
          license: 'test',
          languaje: 'EN',
          content: [],
          idPost: 0
        });

        res.render('pages/index.html', {lollys: data2});
      } catch (error) {
        console.error(error);
      }
    });

    this.app.post('/submit', (req, res) => {
      try {
        transferbytes.connect({
          id: '0599a4a5bb4df19ce4e6ede01296fad6',
          license: 'test',
          languaje: 'EN',
          content: Object.values(req.body),
          idPost: 0
        });

        res.render('pages/submit.html');
      } catch (error) {
        console.error(error);
      }
    });
  }
};

module.exports = ExampleController2;
