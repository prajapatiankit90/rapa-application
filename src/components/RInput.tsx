import { IonInput } from "@ionic/react"

type RinputProps = {

    type : string,
    name : string,
    value : string,
    click : Function

}


const RInput:React.FC<RinputProps> =({name, value, type, click}) => {

    return(
        <IonInput 
        name={name}
        
        />
    )
}

export default RInput