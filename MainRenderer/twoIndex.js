console.log('From two index.js');

const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtnUpd');
newWindowBtn.addEventListener('click', function(event) {
    let winFour = new BrowserWindow();

    winFour.loadURL(url.format({
        pathname: path.join(__dirname, 'fourIndex.html'),
        protocol: 'file',
        slashes: true
    }));
    winFour.webContents.openDevTools();
    
})
