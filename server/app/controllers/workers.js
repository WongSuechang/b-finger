var express = require('express');
const mongoose = require('mongoose');
const { wrap: async } = require('co');
const Worker = mongoose.model('Worker');

exports.allWorker = async(function* (req, res) {
    const page = (req.query.pageIndex > 0 ? req.query.pageIndex : 1);
    const limit = (req.query.pageSize > 0 ? req.query.pageSize : 15);
    const options = {
        limit: limit,
        page: page
    };
    const workers = yield Worker.allWorker(options);
    const count = yield Worker.countDocuments();
    res.json({
        code: 200,
        msg: 'success',
        total: count,
        data: workers
    })
});

exports.addWorker = async(function*(req,res){
    res.json({
        code: 200,
        msg: 'success'
    })
});

/**
 * 删除工人数据，valid置为0即可
 */
exports.delByWorkerId=async(function*(req,res){
    res.json({
        code: 200,
        msg: 'success'
    })
})
