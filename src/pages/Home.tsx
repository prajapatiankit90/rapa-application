import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/react';
import './Home.css';
import { Button } from '@mui/material';
import { useHistory } from 'react-router';



const Home: React.FC = () => {
  const navigate = useHistory();

  const login = () => {
    navigate.push("/login")
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton onClick={login}>Contained</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
