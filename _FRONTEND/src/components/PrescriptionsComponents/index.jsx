import React from 'react'
import InputLabel from '../Resources/FormElements/InputLabel'

export default function PrescriptionsMainComponent() {    

    return (
        <section className="min-h-screen flex flex-col lg:flex-row justify-center items-start gap-8 p-10 pt-0">
            <div className="w-full flex-1">
                <InputLabel 
                    type="text"
                    id="searchPrescription"
                    placeholder=""
                    title="Buscar Receta"
                    isRequired = {false}
                    autoFocus = {true}
                    value = ""
                    onChangeHandler = {()=>{}}
                    pattern = ""
                />
            </div>
            <div className="w-full flex-1">
                lista de recetas
            </div>
        </section>
    )
}
