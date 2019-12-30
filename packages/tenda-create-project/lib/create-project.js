'use strict';

const { join } = require('path');
const chalk = require('chalk');
const fse = require('fs-extra');
const execa = require('execa');
const ora = require('ora');

const packageJSON = require('./resources/json/package.json');

module.exports = async scope => {

  // check rootPath is empty
  if (await fse.exists(scope.rootPath)) {
    const stat = await fse.stat(scope.rootPath);

    if (!stat.isDirectory()) {
      stopProcess(
        `⛔️ ${chalk.green(
          scope.rootPath
        )} is not a directory. Make sure to create a Tenda project in an empty directory.`
      );
    }

    const files = await fse.readdir(scope.rootPath);
    if (files.length > 1) {
      stopProcess(
        `⛔️ You can only create a Tenda project in an empty directory.\nMake sure ${chalk.green(
          scope.rootPath
        )} is empty.`
      );
    }
  }

  console.log('Creating project.');

  await createProject(scope);

  if (scope.quickstart !== true) return;

  try {
    await execa('npm', ['run', 'start'], {
      stdio: 'inherit',
      cwd: scope.rootPath,
      env: {
        FORCE_COLOR: 1,
      },
    });
  } catch (error) {
    process.exit(1);
  }

  console.log(`Running Tenda admin panel.`);
};

async function createProject(scope) {
  console.log('Creating files.');

  const { rootPath } = scope;
  const resources = join(__dirname, 'resources');

  try {
    // copy files
    await fse.copy(join(resources, 'files'), rootPath);

    // copy dot files
    const dotFiles = await fse.readdir(join(resources, 'dot-files'));
    await Promise.all(
      dotFiles.map(name => {
        return fse.copy(
          join(resources, 'dot-files', name),
          join(rootPath, `.${name}`)
        );
      })
    );

    // copy templates
    await fse.writeJSON(
      join(rootPath, 'package.json'),
      packageJSON({
        tendaDependencies: scope.tendaDependencies,
        additionalsDependencies: scope.additionalsDependencies,
        tendaVersion: scope.tendaVersion,
        projectName: scope.name,
        uuid: scope.uuid,
      }),
      {
        spaces: 2,
      }
    );

    // ensure node_modules is created
    await fse.ensureDir(join(rootPath, 'node_modules'));

  } catch (err) {
    await fse.remove(scope.rootPath);
    throw err;
  }

  const installPrefix = chalk.yellow('Installing dependencies:');
  const loader = ora(installPrefix).start();

  const logInstall = (chunk = '') => {
    loader.text = `${installPrefix} ${chunk
      .toString()
      .split('\n')
      .join(' ')}`;
  };

  try {
    if (scope.installDependencies !== false) {
      const runner = execa('npm', ['install', '--production', '--no-optional'], { cwd: scope.rootPath, stdin: 'ignore' });

      runner.stdout.on('data', logInstall);
      runner.stderr.on('data', logInstall);

      await runner;
    }

    loader.stop();
    console.log(`Dependencies installed ${chalk.green('successfully')}.`);
  } catch (error) {
    loader.stop();

    console.error(`${chalk.red('Error')} while installing dependencies:`);
    console.error(error.stderr);

    console.log(chalk.black.bgWhite(' Keep trying! '));
    console.log();
    console.log(
      chalk.bold(
        'Oh, it seems that you encountered errors while installing dependencies in your project.'
      )
    );
    console.log(`Don't give up, your project was created correctly.`);
    console.log(
      `Fix the issues mentionned in the installation errors and try to run the following command:`
    );
    console.log();
    console.log(
      `cd ${chalk.green(rootPath)} && ${chalk.cyan('npm')} install`
    );
    console.log();

    stopProcess();
  }

  console.log();
  console.log(`Your project was created at ${chalk.green(rootPath)}.\n`);

  console.log('Available commands in your project:');
  console.log();
  console.log(`  ${chalk.green("tenda start")}`);
  console.log('  Start the project admin panel on http://127.0.0.1:8080');
  console.log();
}

function stopProcess(message) {
  if (message) console.error(message);
  process.exit(1);
}
