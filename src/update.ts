import { useEffect } from 'react';
import { CapacitorUpdater, } from '@capgo/capacitor-updater'



const InitializeApp= ()=> {
//   let version:any
//   App.addListener('appStateChange', async (state) => {
//     if (state.isActive) {
//       // Ensure download occurs while the app is active, or download may fail
//       version = await CapacitorUpdater.download({
//         url: 'https://github.com/Sivaraman1530/autoTest/archive/refs/tags/test.zip',
//         version
//       })
//     }

//     if (!state.isActive && version) {
//       // Activate the update when the application is sent to background
//         await CapacitorUpdater.set(version);
//         // At this point, the new version should be active, and will need to hide the splash screen
     
//     }
// })
  // useEffect( () =>{
  //    // Register event to fire each time user resumes the app  
  // App.addListener('resume', async () => {
  //   if (localStorage.shouldReloadApp) {
  //     await LiveUpdates.reload();
  //   }
  //   else {
  //     const result = await LiveUpdates.sync();
  //     localStorage.shouldReloadApp = result.activeApplicationPathChanged;
  //   }
  // });
  //  // First sync on app load
  // const result = (async () => await LiveUpdates.sync())();
  // localStorage.shouldReloadApp = result.then((res)=>res.activeApplicationPathChanged);
  // }
  // )

  // return null
  // CapacitorUpdater.addListener("updateAvailable",()=>{
  useEffect(()=>{
  const downloadAndActivate = async () => {
    CapacitorUpdater.notifyAppReady()
    try {
      // Download the update
      const version = await CapacitorUpdater.download({
        url: 'https://github.com/Sivaraman1530/sample-test/archive/refs/tags/test_sample.zip',
        // You may need to specify the current version here
        version: '3.0.0'
      });

      // Activate the update
      await CapacitorUpdater.set(version);
      console.log("ver",JSON.stringify(version),JSON.stringify(CapacitorUpdater.getChannel()),JSON.stringify(CapacitorUpdater.getBuiltinVersion()),JSON.stringify(CapacitorUpdater.getLatest()))
      // Update has been activated
      console.log('Update activated successfully');
    } catch (error) {
      console.error('Error downloading or activating update:', error);
    }
    
  }
  downloadAndActivate();
// },[])
  })
  // Ensure download and activation occur when the app is initialized
 
  // console.log("test",CapacitorUpdater.notifyAppReady())
  return null

}


export default InitializeApp


