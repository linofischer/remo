#! /usr/bin/env node

import shell from 'shelljs';
import { deleteAsync } from 'del';

console.log('------------------');
console.log("--- REMO start ---");
console.log('------------------');

// Delete node_modules
let nodeModulesDeleted = [];
try {
    nodeModulesDeleted = await deleteAsync(['node_modules']);
} catch (e) {
    console.error("node_modules could not be deleted.");
    console.error(e);
}
if (nodeModulesDeleted.length === 0) {
    console.log("node_modules folder does not exist or is empty.");
} else {
    console.log("node_modules folder is deleted.");
}

// Delete package.lock.json
let packageLockDeleted = [];
try {
    packageLockDeleted = await deleteAsync(['package-lock.json'])
} catch (e) {
    console.error("package-lock.json could not be deleted.");
    console.error(e);
};
if (packageLockDeleted.length === 0) {
    console.log("package-lock.json does not exist.");
} else {
    console.log("package-lock.json is deleted.");
}

// Run npm install
console.log("run 'npm install':");
const npmInstallResult = shell.exec('npm install');
if (npmInstallResult.code != 0) {
    console.error("'npm install' could not be executed.")
} else {
    console.log("'npm install' successfully executed.")

}

console.log('----------------');
console.log('--- REMO end ---');
console.log('----------------');


