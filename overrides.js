const fs = require("fs");

require.extensions[".template"] = function(module, filename) {
  module.exports = fs.readFileSync(filename, "utf8");
};
