const buildBabelTransformer = require('./buildBabelTransform');

module.exports = {
  process: function (sourceText, sourcePath, config, options) {
    const transformer = buildBabelTransformer(config);
    return transformer(sourceText, sourcePath, config, options);
  },
};
