import { app, BrowserWindow } from 'electron'
import { join } from 'path'

process.env.DIST = join(__dirname, '..')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

function launchApp() {
    const win = new BrowserWindow({
        title: 'Main window',
    })

    if (process.env.VITE_DEV_SERVER_URL) {
     win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
    // load your file
    win.loadFile(join(process.env.DIST, 'index.html'))
    }
}

app.whenReady().then(launchApp)