const { spawn } = require('child_process');

module.exports = class NodePackageManager {
    DEFAULT_OPERATOR = 'npm';
    keywords = [
        'npm install', '--force', '--global', 'npm', 'npm run', 'npm init', 'npm uninstall'
    ]

    terminalScreen = require('terminal-kit').terminal;
    installDependency(dependencyName, ...flags) {
        console.log(`${this.DEFAULT_OPERATOR} install ${dependencyName} ` + flags.join(' '));
    }

    displayOpenTextMode() {
        this.terminalScreen.green("npm>");
        this.terminalScreen.inputField(
            {history:[], autoComplete: this.keywords, autoCompleteMenu: true },
            (error, input) => {
                this.terminalScreen.green(`\nObrigado por testar! Seu comando foi: ${input}`);
                process.exit();
            }
        )
    }

}