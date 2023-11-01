const electron = require("electron");

const ElectronApplication = require("./core/application");

const Application = electron.app;

Application.whenReady().then(() => {
	ElectronApplication.createElectronWindow();

	
  Application.on('activate', () => {
    if (electron.BrowserWindow.getAllWindows().length === 0) {
			ElectronApplication.createElectronWindow();
    }
  })
});

Application.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		Application.quit();
	}
});
