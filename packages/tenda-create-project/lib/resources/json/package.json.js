'use strict';

module.exports = opts => {
  const {
    tendaDependencies,
    additionalsDependencies,
    tendaVersion,
    projectName,
    uuid,
  } = opts;

  // Finally, return the JSON.
  return {
    name: projectName,
    private: true,
    version: '0.0.0',
    description: 'A Tenda project',
    scripts: {
      start: 'tenda start',
    },
    devDependencies: {},
    dependencies: Object.assign(
      {},
      tendaDependencies.reduce((acc, key) => {
        acc[key] = tendaVersion;
        return acc;
      }, {}),
      additionalsDependencies
    ),
    engines: {
      node: '>=10.0.0',
      npm: '>=6.0.0',
    },
    license: 'MIT',
  };
};
