console.log('Main start working');
console.log('main.js');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; //browser which is providing
const path = require('path'); //path to save in desktop
const url = require('url');

let winOne, winTwo; // assume for window

function createWindow() {
    winOne = new BrowserWindow();
    winTwo = new BrowserWindow();

    winOne.loadURL(url.format({
        pathname: path.join(__dirname, 'oneIndex.html'),
        protocol: 'file',
        slashes: true
    }));
    
    winTwo.loadURL(url.format({
        pathname: path.join(__dirname, 'twoIndex.html'),
        protocol: 'file',
        slashes: true
    }));

    winOne.webContents.openDevTools();
    winTwo.webContents.openDevTools();

    winOne.on('closed', () => {
        winOne = null;
    });
    winTwo.on('closed', () => {
        winTwo = null;
    });
};

app.on('ready', createWindow);

// only for windows system
app.on('window-all-closed', () => {
    if (process.platform !== 'amitesh') {
        app.quit()
    }
});

// only for mac system
app.on('activate', () => {
    if (winOne === null) {
        createWindow()
    } else if (winTwo === null) {
        createWindow()
    }
});
