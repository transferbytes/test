class ExampleController {
  constructor (app) {
    this.app = app;
  }

  init () {
    this.app.get('/eco', async (req, res) => {
      try {
        let data = await this.index.getInfo();

        res.render('pages/index2.html', {lollys: data});
      } catch (error) {
        console.error(error);
      }
    });
  }
};

module.exports = ExampleController;
