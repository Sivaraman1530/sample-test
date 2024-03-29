import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater'
import { SplashScreen } from '@capacitor/splash-screen'
import { App } from '@capacitor/app'

const InitializeApp= ()=> {
  console.log("ver 7")
let data:any|BundleInfo
CapacitorUpdater.notifyAppReady()
App.addListener('appStateChange', async(state) => {
     if (state.isActive) {
       // Do the download during user active app time to prevent failed download
       data = await CapacitorUpdater.download({
       version: '8.0.0',
       url: 'https://github.com/Sivaraman1530/sample-test/archive/refs/heads/master.zip',
       })
     }
     console.log("data",JSON.stringify(data))
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