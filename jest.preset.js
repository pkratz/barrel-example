const nxPreset = require('@nx/jest/preset').default;
const fs = require('fs');
const { resolve, dirname } = require('path');

const esModules = ['lodash-es', '@mui'];

function buildModuleNameMapper(tsconfigPath) {
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));

  // Get paths from tsconfig
  const paths = tsconfig.compilerOptions.paths || {};
  const baseUrl = tsconfig.compilerOptions.baseUrl || '';

  // Convert TypeScript paths into Jest moduleNameMapper format
  const moduleNameMapper = {};

  Object.keys(paths).forEach((key) => {
    const aliasKey = key.replace('/*', '/(.*)');
    const aliasValue = paths[key][0].replace('/*', '/$1');

    // Resolve the absolute path of the alias
    const absoluteAliasValue = resolve(
      dirname(tsconfigPath),
      baseUrl,
      aliasValue
    );
    moduleNameMapper[`^${aliasKey}$`] = absoluteAliasValue;
  });

  return moduleNameMapper;
}

const moduleNameMapper = buildModuleNameMapper(
  resolve(__dirname, 'tsconfig.base.json')
);

module.exports = {
  ...nxPreset,
  transformIgnorePatterns: [`/node_modules/(?!${esModules.join('|')})`],
  moduleNameMapper,
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': resolve(__dirname, 'babelTransform.js'),
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  setupFilesAfterEnv: [resolve(__dirname, 'jest-setup.ts')],
};
