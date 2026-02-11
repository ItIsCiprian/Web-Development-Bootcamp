/**
 * Unix Command Line - Reference and Node.js Execution
 * Common Unix/shell commands and running them from Node.js.
 * Based on Angela Yu's The Complete Full-Stack Web Development Bootcamp.
 */

const unixCommandsReference = {
  navigation: {
    pwd: "Print working directory",
    cd: "Change directory (e.g. cd project, cd ..)",
    ls: "List directory contents (ls -la for long list)",
  },
  files: {
    touch: "Create empty file",
    mkdir: "Create directory (mkdir -p for nested)",
    cp: "Copy (cp -r for recursive)",
    mv: "Move or rename",
    rm: "Remove (rm -r for directories, rm -rf dangerous)",
    cat: "Output file contents",
  },
  other: {
    echo: "Print to stdout",
    clear: "Clear terminal",
    man: "Manual for a command",
  },
};

// Run a shell command from Node.js (Node built-in)
const { exec } = require("child_process");

function runCommand(command, callback) {
  exec(command, (err, stdout, stderr) => {
    if (callback) callback(err, stdout, stderr);
  });
}

// Example: list current directory
// runCommand("ls -la", (err, out) => console.log(err || out));

if (typeof module !== "undefined" && module.exports) {
  module.exports = { unixCommandsReference, runCommand };
}
