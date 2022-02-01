import { IonButton, IonContent, IonHeader, IonMenu, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import React from 'react';
 
// import { NavButtons } from '../components/NavButtons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">Mushroom Farming</IonTitle>
          <IonButton slot="start">
            {/* <Menu /> */}
          </IonButton>
          
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* <IonButton expand="block" routerLink="/login">Login</IonButton>
        <IonButton expand="block" routerLink="/register" color="secondary">Register</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
