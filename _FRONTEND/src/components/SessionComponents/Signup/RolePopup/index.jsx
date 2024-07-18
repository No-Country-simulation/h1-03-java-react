import React, { useEffect, useState } from 'react'
import Button from '../../../Resources/FormElements/Button'
import Radio from '../../../Resources/FormElements/Radio'
import i18n from '../../../../i18n/session/signup/index.json'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getPathRoutes from '../../../../helpers/pathroutes'
import closePopupSvg from '../../../../assets/svg/others/closePopup.svg'

export default function RolePopup() {
    const navigate = useNavigate()
    const language = useSelector((state)=>state.i18nReducer.language)
    const [closePopup, setClosePopup] = useState(false)

    useEffect(() => {
        setClosePopup(false)
    }, [])

    const onClickHandler = ()=>{
        setClosePopup(true)
    }

    const closePopupAndGoToHome = ()=>{
        setClosePopup(true)
        navigate(getPathRoutes(language, 'home', true))
    }

    return (
        <section 
            onClick={()=>closePopupAndGoToHome() } 
            className={`${closePopup ? 'hidden' : 'fixed'} top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[2000] pointer-events-all backdrop-blur-[10px] backdrop-saturate-[50%]`}
        >
            <div 
                className=" absolute w-2/3 h-4/5 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 bg-white rounded-xl grid justify-center items-center" 
                onClick={(e)=>e.stopPropagation()}
                role="dialog"
            >
                <img 
                    className="absolute top-0 right-0 me-5 mt-5 cursor-pointer" 
                    src={closePopupSvg} 
                    alt="Close Popup" //poner desde i18n
                    aria-label="Close Popup"
                    onClick={() => closePopupAndGoToHome()}
                    title="Close Popup"
                    role="button"
                    loading="lazy"
                    width={30}
                    height={30}
                />
                <p className="text-center mt-10" role="heading">{i18n[language].titlePopup}</p>

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
