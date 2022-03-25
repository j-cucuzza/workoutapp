import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonImg,

} from '@ionic/react';
import { Exercise } from '../types';


type ExerciseCardProps =
{
    ex: Exercise
}

const ExerciseCard = (props: ExerciseCardProps) => {

    return (
        <IonCard>

        <IonCardContent>
            <IonImg src={props.ex.gifUrl} />
        </IonCardContent>

        
        <IonCardHeader>
            <IonCardTitle>{props.ex.name}</IonCardTitle>
        </IonCardHeader> 
    </IonCard>
    )
}

export default ExerciseCard