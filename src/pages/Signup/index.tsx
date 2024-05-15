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
import React, { useState } from 'react'
import logo from '../../assests/img/logo.png'
import RHeader from '../../components/RHeader'

const Signup = () => {
  const defaultState = {
    username: '',
    password: '',
    location: '',
    email: '',
    contact: ''
  }

  const [signup, setSignup] = useState(defaultState)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setSignup({ ...signup, [name]: value })
  }

  return (
    <IonPage>
      <RHeader headerName='Sign Up' />
      <IonContent>
        <IonImg src={logo} className='loginimage' />
        <IonCard className='card' mode='ios'>
          <IonCardContent>
            <IonLabel>User Name</IonLabel>
            <IonInput
              type='text'
              name='username'
              value={signup.username}
              onIonInput={handleChange}
              placeholder='User Name'
            />
            <IonLabel>Email</IonLabel>
            <IonInput
              type='text'
              name='email'
              value={signup.email}
              onIonInput={handleChange}
              placeholder='Email Address'
            />
            <IonLabel>Location</IonLabel>
            <IonInput
              type='text'
              name='location'
              value={signup.location}
              onIonInput={handleChange}
              placeholder='location'
            />
            <IonLabel>Password</IonLabel>
            <IonInput
              type='password'
              name='password'
              value={signup.password}
              onIonInput={handleChange}
              placeholder='Password'
            >
              <IonInputPasswordToggle slot='end'></IonInputPasswordToggle>
            </IonInput>
          </IonCardContent>

         <IonButton>Sign up</IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

export default Signup
