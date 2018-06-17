const {app, BrowserWindow} = require('electron');
const settings = require("./settings.json");
const minerjs = require("./miner.js");

function createWindow () {
  Window = new BrowserWindow({width: 800, height: 600});
  Window.maximize();
  Window.loadFile('index.html');
  Window.on('closed', () => {
    Window = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (Window === null) {
    createWindow();
  }
});