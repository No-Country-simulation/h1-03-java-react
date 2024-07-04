import React from 'react'
import { useSelector } from "react-redux"
import InputLabel from '../Resources/FormElements/InputLabel'
import i18nPatients from '../../i18n/patients'
import i18nRadio from '../../i18n/form'
import Form from '../Resources/FormElements/Form'
import Button from '../Resources/FormElements/Button'
import Radio from '../Resources/FormElements/Radio'
import Select from '../Resources/FormElements/Select'

export default function HomeComponent() {
    const language = useSelector((state)=>state.i18nReducer.language)

    const handleSubmitPatient = (e) => {
        e.preventDefault()
        alert('enviado!')
        e.target.reset()
    }

    return (
        <section className=''>
            <Form handleSubmit={handleSubmitPatient}>
                <InputLabel 
                    type={'text'}
                    id={'firstName'}
                    placeholder={i18nPatients[language].firstName.placeholder}
                    title={i18nPatients[language].firstName.title}
                />
                <InputLabel 
                    type={'text'}
                    id={'lastName'}
                    placeholder={i18nPatients[language].lastName.placeholder}
                    title={i18nPatients[language].lastName.title}
                />

                <Radio 
                    legend={i18nRadio[language].radioGender.legend}
                    arrayItems={[...i18nRadio[language].radioGender.items]}
                />

                <Select 
                    id={'bloodType'} 
                    title={i18nPatients[language].bloodType.title}
                    arrayOptions={i18nPatients[language].bloodType.list}
                />

                <Button />
            </Form>
        </section>
    )
}
