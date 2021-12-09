'use strict';

const workers = require('../app/controllers/workers');

module.exports = function(app){
    // worker router
    app.get('/workers', workers.allWorker);
}