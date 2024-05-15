import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonContent,
  IonImg,
  IonInput,
  IonInputPasswordToggle,
  IonLabel,
  IonPage
} from '@ionic/react'
import React, { useState } from 'react';
import logo from "../../assests/img/logo.png"
import RHeader from '../../components/RHeader';
import { useHistory} from 'react-router-dom'


const Login: React.FC = () => {
  const history = useHistory();
  
  const defaultState = {
    username: '',
    password: ''
  }

  const [login, setLogin] = useState(defaultState)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  

  return (
    <IonPage>
      <RHeader headerName='Login' />  
      <IonContent>
        <IonImg src={logo} className='loginimage' />
        <IonCard className='card' mode='ios'>
         
          <IonCardContent>
            <IonLabel>User Name</IonLabel>
            <IonInput
            mode='ios'
              type='text'
              name='username'
              value={login.username}
              onIonInput={handleChange}
              placeholder='User Name'
              autoFocus
            />
            <IonLabel>Password</IonLabel>
            <IonInput
            mode='ios'
              type='password'
              name='password'
              value={login.password}
              onIonInput={handleChange}
              placeholder='Password'
            >
              <IonInputPasswordToggle slot='end'></IonInputPasswordToggle>
            </IonInput>
          </IonCardContent>
          
            <IonButton >Login</IonButton>
            <IonButton fill='clear' onClick={() => history.replace("/signup")}>Sign up</IonButton>
          
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default Login
