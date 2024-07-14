import React from 'react'
import Container from '../../../Resources/Others/Container'
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
        <Container>
            <p>Alta de Médico</p>

            <Form handleSubmit={(e)=>handleSubmit(e)}>
                <InputLabel 
                    type="text"
                    id="phone"
                    placeholder="+54 9 3492 123456"
                    title= "Teléfono"
                    isRequired = {true}
                    autoFocus = {true}
                    maxLength="25"
                    pattern="(\+?[0-9]{1,24})"
                />
                <InputLabel 
                    type="text"
                    id="address"
                    placeholder="Domicilio"
                    title= "Domicilio"
                    isRequired = {true}
                    maxLength="100"
                    pattern="[A-Za-z0-9]{1,100}"
                />
                <InputLabel 
                    type="text"
                    id="license"
                    placeholder="Licencia"
                    title= "Licencia"
                    isRequired = {true}
                    maxLength="10"
                />
            </Form>            
        </Container>
    )
}
