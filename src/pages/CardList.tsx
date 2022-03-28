import React from 'react'
import { Exercise } from '../types'
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
    IonLoading,

} from '@ionic/react'
import ExerciseCard from './ExerciseCard'
import titleCase from '../util/titlecase'


type CardListProps = {
    group: String
    getOptions: () => Promise<any>
    getExercises: (index: Number) => Promise<any>
    // setSelection: (index: Number) => void
}

const CardList = (props: CardListProps) => {
    const [ options, setOptions ] = React.useState([])
    const [ selection, setSelection ] = React.useState(0)
    const [ exercises, setExercises ] = React.useState<Array<Exercise>>([])
    const [ loading, setLoading ] = React.useState<boolean>(true)
    
    
    /**
     * load useful information:
     *  options for user to select
     *  exercises based on chosen option
     */
    React.useEffect(() => {
        setLoading(true)
        props.getOptions()
            .then(list => setOptions(list))
        
        props.getExercises(selection)
            .then(list => {
                setExercises(list)
                console.log(list)
                setLoading(false)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selection])

    const displayOptions = () =>
      options.map((group, i) =>
        <IonSelectOption value={i}>{titleCase(group)}</IonSelectOption>   
      )

    const displayExercises = () =>
        exercises.map((ex: Exercise, i ) => 
            <ExerciseCard ex={ex} />
        )

    return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton />
                </IonButtons>
                <IonTitle>{props.group}</IonTitle>
            </IonToolbar>
            
            <IonItem>
                <IonLabel>Select {props.group}</IonLabel>
                <IonSelect onIonChange={e => setSelection(e.detail.value)}>
                    {displayOptions()}
                </IonSelect>
            </IonItem>
        </IonHeader>


        <IonLoading isOpen={loading} message={'Please wait...'}></IonLoading> 

        <IonContent className='exCards'>
            {/* <IonHeader collapse='condense'>
                <IonToolbar>
                    <IonTitle size="large">{props.group}</IonTitle>
                </IonToolbar>
            </IonHeader> */}
            {displayExercises()}
        </IonContent>
    </IonPage>)
}

export default CardList;