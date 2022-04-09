import React from 'react'
import { IonButtons, IonCheckbox, IonHeader, IonItem, IonLabel, IonLoading, IonMenuButton, IonPage, IonSelect, IonSelectOption, IonTitle, IonToolbar } from "@ionic/react"
import { Exercise } from '../types'
import titleCase from '../util/titlecase'
import * as api from '../util/api'

const GenerateWorkout = () => {
    const [ type, setType ] = React.useState<string>('')
    const [ typeOptions, setTypeOptions ] = React.useState<Array<string>>([])
    const [ showEquipment, setShowEquipment ] = React.useState<boolean>(false)
    const [ equipment, setEquipment ] = React.useState<Array<string>>([])
    const [ exercises, setExercises ] = React.useState<Array<Exercise>>([])
    const [ selection, setSelection ] = React.useState<string>('')
    const [ equipSelection, setEquipSelection ] = React.useState<string>('')
    const [ loading, setLoading ] = React.useState<boolean>(false)

    React.useEffect(() => {

        /**
         * pull either body parts or muscles depending on what the user has selected
         */
        if (type !== ''){
            setLoading(true)
            if (type === 'Body Part') {
                api.getBodyParts()
                    .then(list => {
                        setTypeOptions(list)
                        setLoading(false)
                    })
            } else {
                api.getMuscles()
                    .then(list => {
                        setTypeOptions(list)
                        setLoading(false)
                    })
            }
        }

        if (selection !== '') {
            
        }

        /**
         * if the user had decided to select an equipment to use, pull equipment list
         */
        if (showEquipment) {
            setLoading(true)
            api.getEquipment()
                .then(list => {
                    setEquipment(list)
                    setLoading(false)
                })
        }

    }, [type, selection, showEquipment])


    /**
     * Display either muscles or body parts to search with
     * 
     * @returns select options group with the options dynamically chosen
     */
    const displayTypeOptions = () => {
        if (typeOptions.length !== 0) {
            return (
            <IonItem>
                <IonLabel>Select {type}</IonLabel>
                <IonSelect onIonChange={e => setSelection(e.detail.value)}>
                    {typeOptions.map((group, i) => 
                        <IonSelectOption value={group}>{titleCase(group)}</IonSelectOption>
                    )}
                </IonSelect>
            </IonItem>
            )
        }
    }
    
    /**
     * Display a list equipment for selection to narrow down search
     * 
     * @returns select options that display equipment
     */
    const displayEquipment = () => {
        if (showEquipment && equipment.length !== 0) {
            return (
            <IonItem>
                <IonLabel>Select Equipment</IonLabel>
                <IonSelect onIonChange={e => setEquipSelection(e.detail.value)}>
                    {equipment.map((group, i) => 
                        <IonSelectOption value={group}>{titleCase(group)}</IonSelectOption>
                    )}
                </IonSelect>
            </IonItem>
            )
        }
    }




    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle></IonTitle>
                </IonToolbar>
                
            <IonItem>
                <IonLabel>Specific Muscle(s) or Body Part?</IonLabel>
                <IonSelect onIonChange={e => setType(e.detail.value)}>
                    <IonSelectOption value='Body Part'>Body Part</IonSelectOption>
                    <IonSelectOption value='Muscle(s)'>Muscle(s)</IonSelectOption>
                </IonSelect>
            </IonItem>
            {displayTypeOptions()}
            <IonItem>
                <IonLabel>Choose Equipment?</IonLabel>
                <IonCheckbox onIonChange={e => setShowEquipment(!showEquipment)}/>
            </IonItem>
            {displayEquipment()}
            </IonHeader>

            <IonLoading isOpen={loading} message={'Please wait...'}></IonLoading> 

        </IonPage>
    )
}

export default GenerateWorkout