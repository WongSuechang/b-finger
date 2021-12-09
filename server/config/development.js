// 定义端口号
const port = process.env.PORT || 3000;

// 其他配置
module.exports = {
    db: process.env.MONGODB_URL || 'mongodb://localhost:27017/test'
};