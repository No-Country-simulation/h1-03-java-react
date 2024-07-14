import React from 'react'
import Input from '../../Resources/FormElements/InputLabel/Input'
import Button from '../../Resources/FormElements/Button'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import i18n from '../../../i18n/session/signin/index.json'
import logo from '../../../assets/svg/logo/logo.svg'
import getPathRoutes from '../../../helpers/pathroutes'

export default function Signin() {
    const navigate = useNavigate()
    const language = useSelector((state)=>state.i18nReducer.language)

    return (
        <section className="grid sm:justify-center gap-5">
            <img
                src={logo}
                className="w-70 h-70 text-center m-auto bg-white"
                aria-label="Logo"
                alt="Logo"
                title="Justina.io"
                width={160}
                height={160}
                loading="lazy"
            />

            <p>{i18n[language].pageTitle}</p>

            <Input
                id={'emailSignin'}
                type={'email'}
                placeholder={i18n[language].emailPlaceholder}
                title={i18n[language].emailTitle}
                isRequired={true}
                autoFocus={true}
                value=''
                onChangeHandler={()=>{}}
            />

            <Input
                id={'passwordSignin'}
                type={'password'}
                placeholder={i18n[language].passwordPlaceholder}
                title={i18n[language].passwordTitle}
                isRequired={true}
                value=''
                onChangeHandler={()=>{}}
            />

            <p 
                className="text-end"
                role="button"
                title={i18n[language].forgotPassword}
                aria-label={i18n[language].forgotPassword}
                onClick={()=>navigate()}
            >
                {i18n[language].forgotPassword}
            </p>

            <Button 
                text={i18n[language].buttonSigninText}
                title={i18n[language].buttonSigninTitle}
                onClickHandler={()=>{}}
                textColor="#FFF"
            />

            <p 
                className="text-center"
                title={i18n[language].dontHaveAccountTitle}
                aria-label={i18n[language].dontHaveAccountTitle}
            >
                {i18n[language].dontHaveAccountText}&nbsp;
                <span 
                    className="underline"
                    role="button"
                    title={i18n[language].signInLinkTitle}
                    aria-label={i18n[language].signInLinkTitle}
                    onClick={() => navigate(getPathRoutes(language, 'signup'))}
                > 
                    {i18n[language].signInLinkText}
                </span>
            </p>
        </section>
    )
}
