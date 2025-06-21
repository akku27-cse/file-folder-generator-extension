# File Folder Generator for VS Code

[![Version](https://img.shields.io/visual-studio-marketplace/v/santujana.file-folder-generator.svg)](https://marketplace.visualstudio.com/items?itemName=santujana.file-folder-generator)
[![Downloads](https://img.shields.io/visual-studio-marketplace/d/santujana.file-folder-generator.svg)](https://marketplace.visualstudio.com/items?itemName=santujana.file-folder-generator)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/santujana.file-folder-generator.svg)](https://marketplace.visualstudio.com/items?itemName=santujana.file-folder-generator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/YOUR-USERNAME/file-folder-generator/blob/master/LICENSE)

A VS Code extension to quickly scaffold file and folder structures using customizable templates and simple prompts.


# Demo Video
<video src="demo/video.mp4" width="400" height="200" controls>
  Your browser does not support the video tag.
</video>

![image](https://github.com/user-attachments/assets/6008bd3f-d3c3-4f5d-ae61-61894caba18e)

- Use it and if face any problems feel free to contact me or clone the repo and after solve raise a pr

## Features

- Scaffold project structures with a single command
- Supports templates for common file types (JS, JSX, TS, HTML, CSS, etc.)
- Recursive folder creation
- Context menu integration in Explorer
- Overwrite confirmation prompts
- Customizable templates

## Installation

1. Open VS Code
2. Go to Extensions view (`Ctrl+Shift+X` or `Cmd+Shift+X`)
3. Search for "File Folder Generator"
4. Click **Install**

Or install via terminal:

```bash
code --install-extension santujana.file-folder-generator
```

## Usage

### Method 1: Command Palette

1. Open Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
2. Type `Generate Files/Folders Structure`
3. Enter your desired structure (comma-separated paths)

### Method 2: Context Menu

1. Right-click a folder in Explorer
2. Select `Generate Files/Folders Structure`
3. Enter your desired structure

### Examples

**React components:**

```
src/components/Header.jsx, src/components/Footer.jsx, src/styles/main.css
```

**Node.js project:**

```
src/routes/api.js, src/models/User.js, tests/unit/, .env.example
```

**Python project:**

```
src/main.py, tests/__init__.py, requirements.txt, docs/README.md
```

## Templates

The extension includes basic templates for:

- `.js` (JavaScript)
- `.jsx` (React)
- `.ts` (TypeScript)
- `.html` (HTML)
- `.css` (CSS)

To use your own templates, create a `templates` folder in your project and add your files (e.g., `component.jsx`). The extension will use these instead of the defaults.

## Configuration

Add settings to your `settings.json`:

```json
{
  "fileFolderGenerator.defaultTemplatesPath": "./templates",
  "fileFolderGenerator.autoOpenCreatedFiles": true,
  "fileFolderGenerator.defaultIndentation": "spaces" // or "tabs"
}
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



## 💼 Hire Me / Referral Opportunity

If you or your company are looking for a skilled developer, I'm available for:

[![View Resume](https://img.shields.io/badge/View_My_Resume-4285F4?style=for-the-badge&logo=google-drive&logoColor=white)](https://drive.google.com/file/d/1dw0IlXy2QaXylkZObuW9DU8rf4C1KX7T/view?usp=drive_link)
[![LinkedIn](https://img.shields.io/badge/Connect_on_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/santu-jana-29a923257/)
[![Email](https://img.shields.io/badge/Contact_via_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:your.santujana1827@gmail.com)

Referrals and opportunities are greatly appreciated!
