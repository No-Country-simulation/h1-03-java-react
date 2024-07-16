import React, { useEffect, useState } from 'react'
import Button from '../../../Resources/FormElements/Button'
import Radio from '../../../Resources/FormElements/Radio'
import i18n from '../../../../i18n/session/signup/index.json'
import { useSelector } from 'react-redux'

export default function RolePopup() {
    const language = useSelector((state)=>state.i18nReducer.language)
    const [closePopup, setClosePopup] = useState(false)

    useEffect(() => {
        setClosePopup(false)
    }, [])

    const onClickHandler = ()=>{
        setClosePopup(true)
    }

    return (
        <section className={`${closePopup ? 'hidden' : 'fixed'} top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[2000] pointer-events-none backdrop-blur-[10px]  backdrop-saturate-[50%]`}>
            <div className=" absolute w-2/3 h-4/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 bg-white rounded-xl grid justify-center items-center pointer-events-auto">
                <p className="text-center">{i18n[language].titlePopup}</p>

                <form className="m-auto">
                    <Radio 
                        legend= ''
                        arrayItems= {i18n[language].roleList}
                        isItVertical={true}
                    />
                </form>

                <div className="w-3/5 sm:w-2/5 xl:w-3/5 m-auto mt-10">
                    <Button 
                        text={i18n[language].buttonPopupText}
                        textColor='#FFF'
                        title={i18n[language].buttonPopupTitle}
                        isDisabled={false}
                        onClickHandler={onClickHandler}
                    />
                </div>
            </div>
        </section>
    )
}
