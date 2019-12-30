'use strict';
const path = require('path');
const express = require('express');
const fsExtra = require('fs-extra');
const chalk = require('chalk');
const terminalLink = require('terminal-link');
const packageJson = require('./package.json');
const generateNewProject = require('tenda-create-project');

const publicPath = "./public";

var argv = require('yargs')
    .version(packageJson.version)
    .usage('Usage: $0 <command> [options]')
    .command('create <project-name>', 'Create a new project',
      (yargs) => {
        yargs.positional('project-name', {
          type: 'string',
          describe: 'The name of the project to create'
        })
      },
      (argv) => {
        generateNewProject(argv['project-name']);
    })
    .command('start', 'Serve the admin panel',
      (yargs) => {
      },
      (argv) => {
        serveAdmin(parseInt(argv.port)).catch(err => console.error(err));
      })
    .option('port', {
      alias: 'p',
      type: 'string',
      description: 'Port to bind on',
      default: 8080
    })
    .help('h')
    .alias('h', 'help')
    .argv;

async function serveAdmin(port) {
  const app = express();

  console.log("Starting admin server on port "+port+"...");
  console.log();

  if(!fsExtra.existsSync(publicPath)) {
    console.log();
    console.log(`${chalk.red("ERROR")} Does not exists folder ${chalk.green(publicPath)}`);
    console.log(`Are you in a Tenda project folder? Run ${chalk.green("tenda start")} inside the project folder.`);
    console.log();
    throw "'"+publicPath+"' folder not found";
    return;
  }

  app.use(express.static(publicPath));
  app.get('/', serveIndex);
  app.get('/*', serveIndex);

  app.listen(port, function() {
    let url = "http://127.0.0.1:"+port;
    const link = terminalLink(url, url);
    console.log(chalk.green("Server running at ") + chalk.yellow(link));
    console.log();
  });
}

function serveIndex(request, response) {
  response.sendFile(path.resolve(publicPath+"/index.html"));
}
