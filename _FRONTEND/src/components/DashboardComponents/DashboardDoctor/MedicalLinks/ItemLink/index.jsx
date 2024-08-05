import React from 'react'

export default function index({icon, title}) {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-6">
          <img
            src={icon}
            alt=""
            aria-label=""
            title=""
            width={100}
            height={100}
            loading="lazy"
          />
          <p className="text-center">{title}</p>
        </div>
  )
}
