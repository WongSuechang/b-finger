// worker.js file
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
    name: {
        type: String, default: ''
    },
    dn: {
        type: String
    },
    idCard: {
        type: String,
        unique: true, default: ''
    },
    orgName: {
        type: String, default: ''
    },
    deptName: {
        type: String, default: ''
    },
    headImg: {
        type: String, default: ''
    },
    bankCard: {
        type: String, default: ''
    },
    nationality: {
        type: String, default: ''
    },
    bankCard: {
        type: String, default: ''
    },
    createTime: {
        type: Date,
        default: Date.now
    },
    valid: {
        type: Number,
        default: 1
    }
});

/**
 * Statics
 */
WorkerSchema.statics = {
    /**
     * 
     * @param {Object} options
     */
    allWorker: function (options){
        const page = options.page || 1;
        const limit = options.limit || 20;
        if (page < 1) {
            page = 1;
        }

        return this.find({})
            .skip((parseInt(page) - 1) * parseInt(limit))
            .limit(parseInt(limit))
            .exec();
    },
}
mongoose.model('Worker', WorkerSchema);