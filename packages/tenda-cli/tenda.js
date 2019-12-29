'use strict';

const commander = require('commander');
const packageJson = require('./package.json');
const generateNewProject = require('tenda-create-project');

const program = new commander.Command(packageJson.name);

let projectName;

program
.version(packageJson.version)
.arguments('<directory>')
.option('--no-run', 'Do not start the admin after it is created')
.option('--debug', 'Display debug messages')
.description('create a new project')
.action(directory => {
  projectName = directory;
})
.parse(process.argv);

if (projectName === undefined) {
console.error('Please specify the <directory> of your project');
  process.exit(1);
}

generateNewProject(projectName, program);
