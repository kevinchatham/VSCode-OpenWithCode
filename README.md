# Open With Code

[Grab the extension here!](vscode:extension/kevinchatham.openwithcode)

![](https://github.com/kevinchatham/VSCode-OpenWithCode/raw/master/media/open.gif)

VSCode extension which adds an 'Open in New Window' option to the right-click context menu in the Explorer.

If using macOs, `code` must be manually registered in the system's path for this extension to work. You can do so by running this in terminal...

`export PATH="\$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"`

## Known Issues

- The extension is currently launching a terminal and running `code -n --folder-uri ${folderUri}`. There is probably a better alternative so suggestions are welcome!

## Version Log

- 1.0.0 - Initial Release
- 1.0.1 - GIF Fixes
- 1.0.2 - Readme / Name Corrections
- 1.0.3 - Install Link Updated
