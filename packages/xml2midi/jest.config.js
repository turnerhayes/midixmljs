const config = require("../../jest.config");
config.transform['^.+\.musicxml$'] = '../../xml-jest-transformer.js';
module.exports = config; 
