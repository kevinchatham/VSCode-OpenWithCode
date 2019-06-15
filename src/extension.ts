import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.openWithCode",
    async folderUri => {
      let command = `code -n --folder-uri ${folderUri}`;
      let terminal = vscode.window.createTerminal();
      terminal.sendText(command);
      terminal.sendText("exit");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
