'use strict';

const workers = require('../app/controllers/workers');

module.exports = function(app){
    // worker router
    app.get('/workers', workers.allWorker);/**分页获取工人列表 */
    app.post('/worker',workers.addWorker);/**新增一个工人 */
    app.delete('/worker',workers.delByWorkerId);/**删除指定工人 */
}