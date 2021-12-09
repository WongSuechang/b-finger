'use strict'
const path = require('path');


const development = require('./development.js');


const defaults = {
    root: path.join(__dirname, '..'),
};
/**
 * Expose
 */

module.exports = {
    development: Object.assign({}, development, defaults),
    // production: Object.assign({}, production, defaults)
}[process.env.NODE_ENV || 'development'];