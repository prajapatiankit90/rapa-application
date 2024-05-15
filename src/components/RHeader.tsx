import { IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

type HeaderProps = {
    headerName : string
}

const RHeader:React.FC<HeaderProps> = ({headerName}) => {
  return (
    <IonHeader mode='ios'>
        <IonToolbar>
          <IonTitle>{headerName}</IonTitle>
        </IonToolbar>
      </IonHeader>
  )
}

export default RHeader