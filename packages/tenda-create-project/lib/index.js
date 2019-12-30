'use strict';

const { join, resolve, basename } = require('path');
const os = require('os');
const crypto = require('crypto');
const chalk = require('chalk');
const { machineIdSync } = require('node-machine-id');
const uuid = require('uuid/v4');

const createProject = require('./create-project');

module.exports = (projectDirectory) => {
  checkRequirements();

  const rootPath = resolve(projectDirectory);
  const tmpPath = join(
    os.tmpdir(),
    `tenda${crypto.randomBytes(6).toString('hex')}`
  );

  const scope = {
    rootPath,
    name: basename(rootPath),
    quickstart: true,
    debug: true,
    uuid: uuid(),
    deviceId: machineIdSync(),
    tendaVersion: require('../package.json').version,
    tmpPath,
    installDependencies: true,
    tendaDependencies: [
    ],
    additionalsDependencies:
    {
      "chalk": "^2.4.2",
      "fs-extra": "^8.0.1"
    }
  };

  console.log(`Creating a new Tenda project at ${chalk.green(rootPath)}.`);
  console.log();

  return createProject(scope).catch(error => {
    console.error(error);
    return captureException(error).then(() => {
      return trackError({ scope, error }).then(() => {
        process.exit(1);
      });
    });
  });
};

function checkRequirements() {
  var currentNodeVersion = process.versions.node;
  var semver = currentNodeVersion.split('.');
  var major = semver[0];

  if (major < 10) {
    console.error(`You are running Node ${currentNodeVersion}`);
    console.error('Tenda requires Node 10 and higher.');
    console.error('Please make sure to use the right version of Node.');
    process.exit(1);
  }
}
