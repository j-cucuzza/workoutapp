import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonImg,
    IonCardSubtitle,

} from '@ionic/react';
import { Exercise } from '../types';
import titleCase from '../util/titlecase';



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
            <IonCardSubtitle>{titleCase(props.ex.bodyPart)}: {titleCase(props.ex.target)}</IonCardSubtitle>
            <IonCardTitle>{titleCase(props.ex.name)}</IonCardTitle>
        </IonCardHeader> 
    </IonCard>
    )
}

export default ExerciseCard