# File Folder Generator Extension for VS Code

This extension allows you to generate files and folders structure based on a simple prompt.

## Features

- Right-click on a folder in the Explorer and select "Generate Files/Folders Structure"
- Enter a comma-separated list of paths to create
- The extension will create all necessary folders and files
- Basic templates for common file types

## Usage

1. Right-click on a folder in the Explorer
2. Select "Generate Files/Folders Structure"
3. Enter paths like:
   - `src/components/Button.jsx`
   - `src/utils/helpers.js, src/styles/main.css`
4. The extension will create the structure

## Supported File Types

The extension provides basic templates for:
- .js, .jsx, .ts, .tsx
- .html, .css
- And more (empty files for other extensions)

## Requirements

- VS Code 1.75.0 or higher