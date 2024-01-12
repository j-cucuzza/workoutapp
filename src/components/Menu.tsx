import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { barbellOutline, barbellSharp, bodyOutline, bodySharp, 
  fileTrayFullOutline, fileTrayFullSharp, gridOutline, gridSharp, 
  walkOutline, walkSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  // {
  //   title: 'Favorites',
  //   url: '/page/Favorites',
  //   iosIcon: heartOutline,
  //   mdIcon: heartSharp
  // },
  {
    title: 'Muscle Groups',
    url: '/MuscleGroups',
    iosIcon: bodyOutline,
    mdIcon: bodySharp
  },
  {
    title: 'Equipment',
    url: '/Equipment',
    iosIcon: barbellOutline,
    mdIcon: barbellSharp
  },
  // {
  //   title: 'Generate Workout',
  //   url: '/GenerateWorkout',
  //   iosIcon: gridOutline,
  //   mdIcon: gridSharp
  // },
  // {
  //   title: 'Cardio',
  //   url: '/Cardio',
  //   iosIcon: walkOutline,
  //   mdIcon: walkSharp
  // },
  // {
  //   title: 'All Workouts',
  //   url: '/',
  //   iosIcon: fileTrayFullOutline,
  //   mdIcon: fileTrayFullSharp
  // }
];

// const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Workout!</IonListHeader>
          <IonNote>Welcome!</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* Don't need this right now
        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
