import React from 'react'
import Form from '../../../Resources/FormElements/Form'
import InputLabel from '../../../Resources/FormElements/InputLabel'
import Select from '../../../Resources/FormElements/Select'
import { useSelector } from 'react-redux'

export default function CreateDoctorComponent() {   
    const language = useSelector((state)=>state.i18nReducer.language)
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="grid sm:justify-center gap-5">
            <p>Alta de Médico</p>

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
            
        </section>
    )
}
