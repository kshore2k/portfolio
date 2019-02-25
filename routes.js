const controller = require('./controller');

module.exports = (app) => {
    app.get('/', controller.index);
    app.post('/contact', controller.contact);
} 