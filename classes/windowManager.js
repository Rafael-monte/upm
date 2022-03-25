const NodePackageManager = require("./packageManagers/npm")

module.exports = class TerminalController {
    nodePackageManager = new NodePackageManager();
    terminalScreen = require('terminal-kit').terminal;

    constructor() {
        this.boasVindas();
        this.perguntarGerenciadorQueSeraUsado();
    }

    getNPM() {
        return this.nodePackageManager;
    }

    boasVindas() {
        this.terminalScreen("Bem vindo ao ").yellow("Package manager!\n");
        this.terminalScreen("Este é um centralizador de ").green('gerenciadores de pacotes\n');
    }

    perguntarGerenciadorQueSeraUsado() {
        this.terminalScreen("Por favor, informe qual será o gerenciador que irá usar: \n");
        this.invocarMenuSelecaoGerenciadores();
    }

    invocarMenuSelecaoGerenciadores() {
        let opcoes = ['Node Package Manager (NPM)', 'Python Installer (PIP)', 'Yarn'];
        let optionIndex;
        this.terminalScreen.singleColumnMenu(opcoes, (error, response) => {
            this.terminalScreen.green(`Gerenciador escolhido: ${response.selectedText} \n`);
            this.determinarGerenciadorPelaEscolha(response.selectedIndex);
        })

    }

    determinarGerenciadorPelaEscolha(responseIndex) {
        if (responseIndex === 0) {
            this.terminalScreen.green("Abrindo a command line do npm... \n");
            return this.nodePackageManager.displayOpenTextMode();
        }

        this.terminalScreen.red("A opção selecionada ainda não foi implementada!");
    }
}