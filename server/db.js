const path = require('path');

let mockFile = (schema) => {
    return require(path.join(__dirname, 'mock/', schema));
};
let assets = (schema) => {
    return require(path.join(__dirname, 'assets/', schema));
};



module.exports = () => {
    return {
        products: mockFile('products.js'),
        users: mockFile('users.js'),
        tasks: mockFile('tasks.js'),
    
    };
};