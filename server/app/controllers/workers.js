var express = require('express');
const mongoose = require('mongoose');
const { wrap: async } = require('co');
const Worker = mongoose.model('Worker');

exports.allWorker = async(function* (req, res) {
    const page = (req.query.page > 0 ? req.query.page : 1);
    const limit = 15;
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
