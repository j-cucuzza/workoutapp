import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactHashRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import React from 'react'
import Menu from './components/Menu';
import Page from './pages/Page';
import TestPage from './pages/TestPage';
import CardList from './pages/CardList';
import * as api from './util/api'

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
import GenerateWorkout from './pages/GenerateWorkout';

setupIonicReact();

const App: React.FC = () => {


  return (
    <IonApp>
      <IonReactHashRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Page />
            </Route>
            <Route path="/MuscleGroups" exact={true}>
              <CardList
                  group={'Muscle Group'}
                  getOptions={api.getMuscles}
                  getExercises={api.getExerciseByMuscle}
                />
            </Route>
            <Route path="/Equipment" exact={true}>
              <CardList
                  group={'Equipment'}
                  getOptions={api.getEquipment}
                  getExercises={api.getExerciseByEquipment} 
                />
            </Route>
            {/* <Route path="/Cardio" exact={true}>
              <TestPage/>
            </Route>
            <Route path='/GenerateWorkout' exact={true}>
              <GenerateWorkout />
            </Route> */}
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactHashRouter>
    </IonApp>
  );
};

export default App;
