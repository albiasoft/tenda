const fsExtra = require('fs-extra');
const path = require('path');
const chalk = require('chalk');

async function run() {

  console.log('Copying admin bundle files.');

  // sourcePath and destPath must be relative paths
  let sourcePath = "packages/tenda-admin/dist/tenda-admin";
  let destPath = "packages/tenda-create-project/lib/resources/files/public";

  if(!fsExtra.existsSync(sourcePath)) {
      console.log(`${chalk.red("ERROR")} Does not exists folder ${chalk.green(sourcePath)}`);
      throw "Source folder not found";
      return;
  }

  if(!fsExtra.existsSync(destPath)) {
      console.log(`${chalk.red("ERROR")} Does not exists folder ${chalk.green(destPath)}`);
      throw "Destination folder not found";
      return;
  }

  // Ensure the destPath is a relative path
  destPath = destPath.startsWith("/") ? destPath.slice(1,destPath.length) : destPath;

  // Delete current files in destination folder
  fsExtra.emptyDirSync(destPath);

  // Copy files from sourcePath to destPath
  fsExtra.copySync(sourcePath, destPath)
}

run().catch(err => console.error(err));
