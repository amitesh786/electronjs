console.log('Main start working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow; //browser which is providing
const path = require('path'); //path to save in desktop
const url = require('url');

let parentWindow, childWindow;

function configureTimeout() {
    var timeout = 5 * 1000;
    console.log('Configuring timeout of ' + timeout + "ms");
}

function createWindow() {
    parentWindow = new BrowserWindow({title: 'parent'});
    parentWindow.loadURL('https://github.com/amitesh786');
    configureTimeout();
    childWindow = new BrowserWindow({show: false, parent: parentWindow, title: 'child'}); // add parent: parentWindow if you want parent window
    childWindow.loadURL('https://github.com');
    childWindow.once('ready-to-show', () => {
        childWindow.show()
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
