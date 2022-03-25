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

} from '@ionic/react'
import React from 'react'
import * as api from '../util/api'
import ExerciseCard from './ExerciseCard'
import { Exercise } from '../types'


const Equipment = () => {

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
        api.getEquipment()
            .then(list => setTempdata(list))
        api.getExerciseByEquipment(selection)
            .then(list => setExercises(list))
    }, [selection])


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Equipment</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonHeader collapse='condense'>
                    <IonToolbar>
                        <IonTitle size="large">Equipment</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonItem>
                    <IonLabel>Select Equipment</IonLabel>
                    <IonSelect onIonChange={e => setSelection(e.detail.value)}>
                        {displayOptions()}
                    </IonSelect>
                </IonItem>
                {displayExercises()}
            </IonContent>
        </IonPage>
    )
}

export default Equipment
