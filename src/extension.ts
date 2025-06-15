import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('file-folder-generator.generate', async (uri?: vscode.Uri) => {
        try {
            // Get the target folder (either the right-clicked folder or workspace root)
            let targetFolder = uri?.fsPath;
            if (!targetFolder) {
                if (vscode.workspace.workspaceFolders) {
                    targetFolder = vscode.workspace.workspaceFolders[0].uri.fsPath;
                } else {
                    vscode.window.showErrorMessage('No workspace folder is open');
                    return;
                }
            }

            // Ask for the folder/file structure
            const structure = await vscode.window.showInputBox({
                prompt: 'Enter the folder/file structure (e.g., "src/components/Button.js, src/index.js")',
                placeHolder: 'Comma-separated list of paths to create'
            });

            if (!structure) {
                return;
            }

            // Parse the input
            const items = structure.split(',').map(item => item.trim());

            // Process each item
            for (const item of items) {
                const fullPath = path.join(targetFolder, item);
                const dirname = path.dirname(fullPath);

                // Create directories if they don't exist
                if (!fs.existsSync(dirname)) {
                    fs.mkdirSync(dirname, { recursive: true });
                }

                // Check if it's a file (has extension) or folder
                const isFile = path.extname(item) !== '';

                if (isFile) {
                    // Check if file exists
                    if (fs.existsSync(fullPath)) {
                        const overwrite = await vscode.window.showQuickPick(['Overwrite', 'Skip'], {
                            placeHolder: `File ${item} already exists. What would you like to do?`
                        });

                        if (overwrite !== 'Overwrite') {
                            continue;
                        }
                    }

                    // Get template if available
                    const templatePath = path.join(context.extensionPath, 'templates', path.basename(item));
                    let content = '';

                    if (fs.existsSync(templatePath)) {
                        content = fs.readFileSync(templatePath, 'utf8');
                    } else {
                        // Default content based on file type
                        const ext = path.extname(item);
                        switch (ext) {
                            case '.js':
                                content = `// ${path.basename(item)}\n\n`;
                                break;
                            case '.jsx':
                                content = `import React from 'react';\n\nconst ${path.basename(item, ext)} = () => {\n  return (\n    <div>\n      {/* Your component here */}\n    </div>\n  );\n};\n\nexport default ${path.basename(item, ext)};`;
                                break;
                            case '.ts':
                                content = `// ${path.basename(item)}\n\n`;
                                break;
                            case '.tsx':
                                content = `import React from 'react';\n\ninterface ${path.basename(item, ext)}Props {}\n\nconst ${path.basename(item, ext)}: React.FC<${path.basename(item, ext)}Props> = () => {\n  return (\n    <div>\n      {/* Your component here */}\n    </div>\n  );\n};\n\nexport default ${path.basename(item, ext)};`;
                                break;
                            case '.html':
                                content = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>`;
                                break;
                            case '.css':
                                content = `/* ${path.basename(item)} */\n\n`;
                                break;
                            default:
                                content = '';
                        }
                    }

                    // Create the file
                    fs.writeFileSync(fullPath, content);
                    vscode.window.showInformationMessage(`Created file: ${item}`);
                } else {
                    // It's a folder
                    if (!fs.existsSync(fullPath)) {
                        fs.mkdirSync(fullPath, { recursive: true });
                        vscode.window.showInformationMessage(`Created folder: ${item}`);
                    } else {
                        vscode.window.showInformationMessage(`Folder already exists: ${item}`);
                    }
                }
            }

            vscode.window.showInformationMessage('File/folder structure created successfully!');
        } catch (error) {
            vscode.window.showErrorMessage(`Error creating structure: ${error instanceof Error ? error.message : String(error)}`);
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}