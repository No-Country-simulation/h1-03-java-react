import React from 'react'
import signupDesktopImage from '../../../../assets/svg/others/signupDesktopImage.svg'

export default function LeftImage() {    

    return (
        <img 
            src={signupDesktopImage}
            className="w-[50%] lg:w-[35%] hidden md:block m-auto"
            aria-label="Left Image"
            alt="Left Image"
            title="Justina.io"
            loading="lazy"
        />
    )
}
