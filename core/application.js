const electron = require("electron");
const path = require("path");

class ElectronApplication {
	static createElectronWindow() {
		const Window = new electron.BrowserWindow({
			width: 1280,
			height: 800,
			minWidth: 360,
			minHeight: 300,
			autoHideMenuBar: true,
			title: "X",
			icon: "assists/icon.png",
			titleBarOverlay: true,
			webPreferences: {
				nodeIntegration: false,
				nodeIntegrationInSubFrames: false,
				nodeIntegrationInWorker: false,
				plugins: false,
				javascript: true,
				images: true,
				devTools: false,
				contextIsolation: false,
				preload: path.join(__dirname, "../preload.js"),
			},
		});

		Window.loadURL("https://www.twitter.com");
	}
}


module.exports = ElectronApplication;
