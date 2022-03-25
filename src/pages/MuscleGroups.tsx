import { IonButtons, 
    IonContent, 
    IonHeader, 
    IonMenuButton, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonImg,

} from '@ionic/react';
import React from 'react'
import { Exercise } from '../types';
import ExerciseCard from './ExerciseCard';
import * as api from '../util/api'

const MuscleGroups = () => {
    const [ tempdata, setTempdata ] = React.useState([])
    const [ selection, setSelection ] = React.useState(0)
    const [ exercises, setExercises ] = React.useState([])
    
  
    const displayOptions = () =>
      tempdata.map((group, i) =>
        <IonSelectOption value={i}>{group}</IonSelectOption>   
      )

    const displayExercises = () =>
        exercises.map((ex: Exercise, i ) => 
            <ExerciseCard ex={ex} />
        )

    React.useEffect(() => {
        api.getMuscles()
            .then(list => setTempdata(list))
        api.getExerciseByMuscle(selection)
            .then(list => setExercises(list))
    }, [selection])

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Muscle Groups</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size="large">Muscle Groups</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonLabel>Select Muscle Group</IonLabel>
                    <IonSelect onIonChange={e => setSelection(e.detail.value)}>
                        {displayOptions()}
                    </IonSelect>
                </IonItem>
                {displayExercises()}
            </IonContent>
        </IonPage>
    )
}

export default MuscleGroups