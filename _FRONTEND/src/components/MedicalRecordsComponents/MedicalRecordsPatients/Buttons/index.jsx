import React from 'react'
import Button from '../../../Resources/FormElements/Button'
import download from "../../../../assets/svg/others/downloadCircle.svg"
import share from "../../../../assets/svg/others/shareCircle.svg"
import print from "../../../../assets/svg/others/printCircle.svg"

export default function index() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative'>
        <Button text="DESCARGAR HISTORIA CLÍNICA" bgColor="[#5666BE]" textColor='white' classNames='pl-12 font-bold' />
        <div className='absolute top-2 left-2'>
          <img src={download} alt="icono de descarga" width={38} />
        </div>
      </div>
      <div className='relative'>
        <Button text="COMPARTIR HISTORIA CLÍNICA" bgColor="[#5666BE]" textColor='white' classNames='pl-12 font-bold' />
        <div className='absolute top-2 left-1'>
          <img src={share} alt="icono de compartir" width={38} />
        </div>
      </div>
      <div className='relative'>
        <Button text="IMPRIMIR HISTORIA CLÍNICA" bgColor="[#5666BE]" textColor='white' classNames='pl-12 font-bold' />
        <div className='absolute top-2 left-2'>
          <img src={print} alt="icono de imprimir" width={38} />
        </div>
      </div>
    </div>
  )
}
