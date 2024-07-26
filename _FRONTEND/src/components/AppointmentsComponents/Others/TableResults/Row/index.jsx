import React, { useState } from 'react'
import Button from "../../../../Resources/FormElements/Button";
import calendarReserveAppointment from "../../../../../assets/svg/others/calendarReserveAppointment.svg";
import { useSelector } from 'react-redux';
import i18n from "../../../../../i18n/appointments/reserveAppointment/index.json";
import pencilButton from "../../../../../assets/svg/others/pencilButton.svg";
import { Navigate, useNavigate } from 'react-router-dom';
import getPathRoutes from '../../../../../helpers/pathroutes';

export default function Row({ isButtonSchedule, isModificate=false }) {
    const language = useSelector((state) => state.i18nReducer.language);
    const navigate = useNavigate()
    const [modificate, setModificate] = useState(isModificate)

    return (
        <div className="">
            <div className={`grid grid-cols-4 border border-[#5666BF] rounded-3xl ${modificate ? 'rounded-b-none' : ''} transition-all duration-300 overflow-hidden`}>
                <div className={`flex justify-center items-center gap-5 text-center p-6 transition-colors duration-300 ${isButtonSchedule ? '' : modificate ? '' : 'bg-[#f0efef]'}`}>
                    <img 
                        className="w-[40px] h-[40px] hidden sm:block"
                        src={calendarReserveAppointment} 
                        alt={i18n[language].reserveAppointment.tableResults.calendarReserveAppointmentImage}
                        aria-label={i18n[language].reserveAppointment.tableResults.calendarReserveAppointmentImage}
                        title={i18n[language].reserveAppointment.tableResults.calendarReserveAppointmentImage}
                        loading="lazy"
                    />
                    <div className="flex flex-col justify-center items-center gap-5">
                        {modificate
                            ? <input type="date" className="py-2" />
                            : <div className="flex flex-col justify-center items-center gap-5">
                                <p>Jueves</p>
                                <p>27 de Julio</p>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className={`flex flex-col gap-3 justify-center items-center border-x border-[#5666BF] text-center p-6 text-xs sm:text-sm  transition-colors duration-300 ${isButtonSchedule ? '' : modificate ? '' : 'bg-[#f0efef]'}`}>
                    <p className="font-medium">Jorge Esquivel</p>
                    <p className="">Cardiólogo</p>
                </div>

                <div className={`flex flex-col gap-3 justify-center items-center border-e border-[#5666BF] text-center  transition-colors duration-300 ${isButtonSchedule ? '' : modificate ? '' : 'bg-[#f0efef]'}`}>
                    <p className="text-sm">
                        {modificate
                            ?i18n[language].reserveAppointment.tableResults.chooseTimeSlotTitle
                            :i18n[language].reserveAppointment.tableResults.chooseTimeSlotTitleModify
}
                    </p>
                    <div className="mb-2 sm:mb-0 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-1 sm:gap-0 text-center font-medium">
                        <div className={`border border-[#5666BF] rounded-full sm:rounded-none sm:border-e-0 sm:rounded-s-3xl p-1 sm:p-2 ${modificate ? 'cursor-pointer' : ''}`}>
                            {i18n[language].reserveAppointment.tableResults.timeSlotMorning}
                        </div>
                        <div className={`border border-[#5666BF] rounded-full sm:rounded-none sm:rounded-e-3xl p-1 sm:p-2 ${modificate ? 'cursor-pointer' : ''}`}>
                            {i18n[language].reserveAppointment.tableResults.timeSlotAfternoon}
                        </div>
                    </div>
                </div>

                <div className="m-auto px-1 sm:p-6">
                    <div className="rounded-full m-0">
                        {isButtonSchedule 
                            ? (<Button
                                type="button"
                                text={i18n[language].reserveAppointment.tableResults.scheduleButton.toUpperCase()}
                                textColor="#FFF"
                                bgColor="auto"
                                title={i18n[language].reserveAppointment.tableResults.scheduleButton}
                                aria-label={i18n[language].reserveAppointment.tableResults.scheduleButton}
                                isDisabled={false}
                                onClickHandler={() => {}}
                                classNames="text-[7px] sm:text-xs"
                            />)
                            : (<img
                                className="w-[40px] h-[40px] cursor-pointer"
                                src={pencilButton} 
                                alt={i18n[language].reserveAppointment.tableResults.pencilButtonTitle}
                                aria-label={i18n[language].reserveAppointment.tableResults.pencilButtonTitle}
                                title={i18n[language].reserveAppointment.tableResults.pencilButtonTitle}
                                loading="lazy"
                                role="button"
                                /* onClick={() => {navigate( `${getPathRoutes(language, 'modify_appointments', {isForNavBar: false})}`)}} */
                                onClick={() => setModificate(!modificate)}
                            />)
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-row mt-1 overflow-hidden">
            <div className={`${modificate ? "transform translate-y-0" : "transform -translate-y-full"}  flex justify-center items-center text-white font-bold bg-[#12b00f] p-2 rounded-bl-full duration-300 flex-1 cursor-pointer`}>
                    Guardar cambios
                </div>
                <div className={`${modificate ? "transform translate-y-0" : "transform -translate-y-full"}  flex justify-center items-center text-white font-bold bg-[#b00f0f] p-2 rounded-br-full duration-300 flex-1 cursor-pointer`}>
                    Cancelar turno
                </div>
            </div>
        </div>
    )
}
