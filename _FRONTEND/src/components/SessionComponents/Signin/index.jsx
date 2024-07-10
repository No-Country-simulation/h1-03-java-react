import React from 'react'
import Input from '../../Resources/FormElements/InputLabel/Input'
import Button from '../../Resources/FormElements/Button'
import { useNavigate } from 'react-router-dom'

export default function Signin() {
    const navigate = useNavigate()

    return (
        <section className="grid justify-center gap-5">
            <img
                src=""
                className="w-40 h-40 text-center bg-slate-400 m-auto rounded-full object-cover"
                aria-label="Logo"
                alt="Logo"
                title="Justina.io"
                width={160}
                height={160}
            />

            <p>SIGN-IN</p>

            <Input
                id={'emailSignin'}
                type={'email'}
                placeholder={'E-MAIL'}
                title={'Ingrese su email'}
                isRequired={true}
                autoFocus={true}
                value=''
                onChangeHandler={()=>{}}
            />

            <Input
                id={'passwordSignin'}
                type={'password'}
                placeholder={'CONTRASEÑA'}
                title={'Ingrese su password'}
                isRequired={true}
                value=''
                onChangeHandler={()=>{}}
            />

            <p 
                className="text-end"
                role="button"
                onClick={()=>navigate()}
            >
                Olvidó su contraseña?
            </p>

            <Button 
                text={'INICIAR SESIÓN'}
                title={'Iniciar Sesión'}
                onClickHandler={()=>{}}
            />

            <p className="text-center">No tiene una cuenta?&nbsp;
                <span 
                    className="underline"
                    role="button"
                    title="Click para registrarse"
                    onClick={()=>navigate()}
                > 
                    Registrate.
                </span>
            </p>
        </section>
    )
}
