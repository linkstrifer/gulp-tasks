var requireDir = require('require-dir');

module.exports = requireDir('./tasks', { recurse: true });
