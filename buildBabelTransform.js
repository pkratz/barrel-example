const babelJest = require('babel-jest').default;

/**
 * Builds a Babel transformer for Jest tests with custom plugin and preset handling.
 *
 * @param {Object} builderOptions - Options for customizing the Babel transformer.
 * @param {Array} [builderOptions.plugins] - Additional Babel plugins to use.
 * @param {Array} [builderOptions.presets] - Additional Babel presets to use.
 * @returns {Function} A function to be used by Jest as a transformer. It processes source files.
 *
 * @param {string} sourceText - The source code of the file to transform.
 * @param {string} sourcePath - The path of the file being transformed.
 * @param {Object} options - Options provided by Jest for the transformer, including module mappings and file extensions.
 * @returns {Object} The transformed source code and its source map.
 */
function buildBabelTransformer(options) {
  const alias = options?.config?.moduleNameMapper;
  const extensions = options.config.moduleFileExtensions;

  const babelTransformer = babelJest.createTransformer({
    presets: ['@nx/react/babel'],
    plugins: [
      [
        'babel-plugin-import', // use babel-plugin-import to convert mui imports to individual imports
        {
          libraryName: '@mui/material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'core',
      ],
      [
        'babel-plugin-import', // use babel-plugin-import to convert mui icons imports to individual imports
        {
          libraryName: '@mui/icons-material',
          libraryDirectory: '',
          camel2DashComponentName: false,
        },
        'icons',
      ],
      'babel-plugin-transform-vite-meta-env', // use babel-plugin-transform-vite-meta-env to replace import.meta.env with process,
      [
        'babel-plugin-transform-barrels',
        {
          executorName: 'jest',
          alias: alias,
          extensions: extensions,
          logging: { type: 'screen' },
        },
      ],
    ],
    babelrc: false,
    configFile: false,
  });

  return function (sourceText, sourcePath, config) {
    // run the transformer and return
    const transformedSource = babelTransformer.process(
      sourceText,
      sourcePath,
      config
    );
    const withoutMap = transformedSource.code.replace(
      /\/\/# sourceMappingURL=.*$/,
      ''
    );

    console.log('transformed', sourcePath);
    console.log(withoutMap);
    console.log('\n\n\n\n\n');
    return transformedSource;
  };
}
module.exports = buildBabelTransformer;
