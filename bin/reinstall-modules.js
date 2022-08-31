#! /usr/bin/env node

import shell from 'shelljs';
import { deleteAsync } from 'del';


console.log("start delete modules script.");
const nodeModulesDeleted = await deleteAsync(['node_modules']);
if (nodeModulesDeleted.length === 0) {
    console.log("node_modules folder does not exist or is empty.");
} else {
    console.log("node_modules folder deleted.");
}

const packageLockDeleted = await deleteAsync(['package-lock.json']);
if (packageLockDeleted.length === 0) {
    console.log("package-lock.json does not exist.");
} else {
    console.log("package-lock.json deleted.");
}

console.log("npm install");
shell.exec('npm install');
console.log('delete modules script done.');





