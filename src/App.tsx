import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InitializeApp from './update';
import { BundleInfo, CapacitorUpdater } from '@capgo/capacitor-updater';
import { App } from '@capacitor/app'
import { SplashScreen } from '@capacitor/splash-screen';

setupIonicReact();

const App1: React.FC = () =>{
  let data:any|BundleInfo
CapacitorUpdater.notifyAppReady()
App.addListener('appStateChange', async(state) => {
     if (state.isActive) {
       // Do the download during user active app time to prevent failed download
       data = await CapacitorUpdater.download({
       version: '9.0.0',
       url: 'https://github.com/Sivaraman1530/sample-test/archive/refs/tags/v-8.zip',
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

  return  (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1 veration 8</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}

export default App1;
