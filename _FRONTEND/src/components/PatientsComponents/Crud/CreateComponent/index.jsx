import React from 'react'
import Container from '../../../Resources/Others/Container'
import Form from '../../../Resources/FormElements/Form'
import InputLabel from '../../../Resources/FormElements/InputLabel'
import Select from '../../../Resources/FormElements/Select'
import { useSelector } from 'react-redux'
/* import i18n from '../../../../i18n/patients' */

export default function CreatePatientComponent() {   
    const language = useSelector((state)=>state.i18nReducer.language)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Container>
            <p>Alta de Paciente</p>

            <Form handleSubmit={(e)=>handleSubmit(e)}>
                <InputLabel 
                    type="text"
                    id="doc_identity"
                    placeholder="DNI"
                    title= "Documento de Identidad"
                    isRequired = {true}
                    autoFocus= {true}
                    maxLength="25"
                />
                <InputLabel 
                    type="text"
                    id="phone"
                    placeholder="+54 9 3492 123456"
                    title= "Teléfono"
                    isRequired = {true}
                    maxLength="25"
                />
                <InputLabel 
                    type="text"
                    id="address"
                    placeholder="Domicilio"
                    title= "Domicilio"
                    isRequired = {true}
                    maxLength="100"
                />
                <InputLabel 
                    type="date"
                    id="birthdate"
                    placeholder="Fecha de Nacimiento"
                    title= "Fecha de Nacimiento"
                    isRequired = {true}
                />
                <Select 
                    id="marital_status"
                    title="Estado Civil"
                    arrayOptions={[]}
                    onChangeHandler = {() => {}}
                    value = ""
                    displayLabel = "block"
                    isRequired = {true}
                    hasLabel = {true}
                />
            </Form>
            
        </Container>
    )
}
