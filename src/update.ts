import { CapacitorUpdater } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'
import { App } from '@capacitor/app'

const InitializeApp= ()=> {
let data:any
CapacitorUpdater.notifyAppReady()
App.addListener('appStateChange', async(state) => {
     if (state.isActive) {
       // Do the download during user active app time to prevent failed download
       data = await CapacitorUpdater.download({
       version: '5.0.0',
       url: 'https://github.com/Sivaraman1530/sample-test/archive/refs/tags/test_sample.zip',
       })
     }
     if (!state.isActive && data.version !== "") {
       // Do the switch when user leave app
       SplashScreen.show()
       try {
         await CapacitorUpdater.set(data)
       } catch (err) {
         console.log(err)
         SplashScreen.hide() // in case the set fail, otherwise the new app will have to hide it
       }
     }
 })

 return null
}

export default InitializeApp