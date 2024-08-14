import React from 'react'

export default function index({porcentage, icon, iconAlt, title}) {
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-2">
          <p className="text-center text-sm">{porcentage}</p>
            <img
              src={icon}
              alt={iconAlt}
              aria-label={iconAlt}
              title={iconAlt}
              width={100}
              height={100}
              loading="lazy"
            />
            <p className="text-center text-sm whitespace-nowrap">{title}</p>
          </div>
  )
}
