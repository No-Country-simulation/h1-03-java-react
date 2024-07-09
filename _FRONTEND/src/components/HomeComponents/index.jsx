import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import InputLabel from '../Resources/FormElements/InputLabel'
import i18nPatients from '../../i18n/patients'
import i18nForm from '../../i18n/form'
import Form from '../Resources/FormElements/Form'
import Button from '../Resources/FormElements/Button'
import Radio from '../Resources/FormElements/Radio'
import Select from '../Resources/FormElements/Select'
import Table from '../Resources/Table'
//import { mockTableData } from '../Resources/Table/mockTableData'
import { useQuery } from '@tanstack/react-query'
import { fetchTest } from '../../services'
import { setI18n } from '../../redux/actions'

export default function HomeComponent() {
    const language = useSelector((state)=>state.i18nReducer.language)
    const dispatch = useDispatch()

    const { data, error, isLoading, isFetching} = useQuery({
        queryKey: ["key-test"], 
        queryFn: fetchTest
    })

    if(error) console.log(error)

    const handleSubmitPatient = (e) => {
        e.preventDefault()
        alert('enviado!')
        e.target.reset()
    }
const [val, setVal] = useState()
    return (
        <section className="flex flex-col bg-slate-700 py-5">

            <p 
                className="cursor-pointer text-green-500 fw-bolder underline text-center"
                onClick={()=>dispatch(setI18n(language==='en' ? 'sp' : 'en'))}
            >
                {language==='en' ? 'Cambiar IDIOMA' : 'Change LANGUAGE'}
            </p>

            {isLoading 
            ? (<p className="text-center">⌛ Cargando tabla..</p>)
            : (
            <>
                <span className="text-center py-1">{isFetching ? '⌛ Comprobando si los datos estan actualizados' : <>&nbsp;</>}</span>
                <Table data={data} showSelectionColumn={true} />               
            </>
            )}

            <Form handleSubmit={handleSubmitPatient}>
                <InputLabel 
                    type={'text'}
                    id={'firstName'}
                    placeholder={i18nPatients[language].firstName.placeholder}
                    title={i18nPatients[language].firstName.title}
                    isRequired={true}
                    value="test"
                    /* value={val}
                    onChangeHandler={setVal} */
                />
                <InputLabel 
                    type={'text'}
                    id={'lastName'}
                    placeholder={i18nPatients[language].lastName.placeholder}
                    title={i18nPatients[language].lastName.title}
                    isRequired={true}
                    value="test"
                />

                <InputLabel 
                    type={'date'}
                    id={'bornDate'}
                    placeholder={i18nPatients[language].bornDate.placeholder}
                    title={i18nPatients[language].bornDate.title}
                    isRequired={true}
                    value={val}
                    onChangeHandler={setVal}
                />

                <Radio 
                    legend={i18nForm[language].radioGender.legend}
                    arrayItems={[...i18nForm[language].radioGender.items]}
                />

                <Select 
                    id={'bloodType'} 
                    title={i18nPatients[language].bloodType.title}
                    arrayOptions={i18nPatients[language].bloodType.list}
                    isRequired={true}
                />

                <Button 
                    type={'submit'}
                    text={i18nForm[language].buttonSubmit} 
                    title={i18nForm[language].buttonSubmit} 
                />
            </Form>
            
        </section>
    )
}
