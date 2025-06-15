# File Folder Generator for VS Code

[![Version](https://img.shields.io/visual-studio-marketplace/v/YOUR-PUBLISHER-NAME.file-folder-generator.svg)](https://marketplace.visualstudio.com/items?itemName=YOUR-PUBLISHER-NAME.file-folder-generator)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/YOUR-PUBLISHER-NAME.file-folder-generator.svg)](https://marketplace.visualstudio.com/items?itemName=YOUR-PUBLISHER-NAME.file-folder-generator)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/YOUR-PUBLISHER-NAME.file-folder-generator.svg)](https://marketplace.visualstudio.com/items?itemName=YOUR-PUBLISHER-NAME.file-folder-generator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/YOUR-USERNAME/file-folder-generator/blob/master/LICENSE)

A VS Code extension that generates complete file and folder structures with templates based on simple prompts.

![Demo](images/preview.gif)

## Features

- Quickly scaffold project structures with a single command
- Supports file templates for common file types (JS, JSX, TS, HTML, CSS, etc.)
- Recursive folder creation
- Context menu integration in Explorer
- Smart prompts for overwrite confirmation
- Customizable templates

## Installation

1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "File Folder Generator"
4. Click Install

## Usage

### Method 1: Command Palette
1. Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type "Generate Files/Folders Structure"
3. Enter your desired structure when prompted (comma-separated paths)

### Method 2: Context Menu
1. Right-click on a folder in Explorer
2. Select "Generate Files/Folders Structure"
3. Enter your desired structure when prompted

### Examples

Create React components:
src/components/Header.jsx, src/components/Footer.jsx, src/styles/main.css

text

Create Node.js project:
src/routes/api.js, src/models/User.js, tests/unit/, .env.example

text

## Templates

The extension includes basic templates for:
- `.js` (JavaScript files)
- `.jsx` (React components)
- `.ts` (TypeScript files)
- `.html` (HTML documents)
- `.css` (Stylesheets)

You can add your own templates by creating files in the `templates` directory of your project.

## Configuration

Currently supports these settings in `settings.json`:

```json
{
  "fileFolderGenerator.defaultTemplatesPath": "./templates",
  "fileFolderGenerator.autoOpenCreatedFiles": true
}
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository

Create a new branch (git checkout -b feature-branch)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-branch)

Open a Pull Request

License
This project is licensed under the MIT License - see the LICENSE file for details.