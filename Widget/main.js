console.log('Main start working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; //browser which is providing
const path = require('path'); //path to save in desktop
const url = require('url');

let win; // assume for window

function createWindow() {
    win = new BrowserWindow({height: 150, width: 500, frame: false, show: false});
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    // win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    });
    win.once('ready-to-show', () => {
        win.show();
    });
}

app.on('ready', createWindow);

// only for windows system
app.on('window-all-closed', () => {
    if (process.platform !== 'amitesh') {
        app.quit()
    }
});

// only for mac system
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});
