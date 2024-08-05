import React, { memo, useEffect, useState } from 'react'
import Button from "../../../../Resources/FormElements/Button";
import calendarReserveAppointment from "../../../../../assets/svg/others/calendarReserveAppointment.svg";
import { useSelector } from 'react-redux';
import i18n from "../../../../../i18n/appointments/reserveAppointment/index.json";
import pencilButton from "../../../../../assets/svg/others/pencilButton.svg";
import { useNavigate } from 'react-router-dom';
import getPathRoutes from '../../../../../helpers/pathroutes';
import i18nDoctors from '../../../../../i18n/doctors/index.json';
import checkMark from '../../../../../assets/svg/others/checkMark.svg';
import { useQuery } from '@tanstack/react-query';
import { postFetch } from '../../../../../services';
import endpoints from '../../../../../helpers/endpoints';

const toCapitalized = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

const getFormatterDate = (data) => {
    const newDate = new Date(data.startDate);
    
    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric' };
    const formattedDate = newDate.toLocaleDateString('es-ES', options).split(',');
    
    const day = toCapitalized(formattedDate[0])
    const splittedDate = formattedDate[1].split(' ')
    const date = `${splittedDate[0]} ${splittedDate[1]} ${splittedDate[2]} ${toCapitalized(splittedDate[3])}`
    const startingHourShift = formattedDate[2]

    return {
        day: day,
        date: date,
        timeSlot: startingHourShift
    }
}

/* const isMorning = (data) => {
    if(Number(getFormatterDate(data.startDate).timeSlot) < 14) {
        return true
    } 
    return false
} */

const Row = ({ isButtonSchedule, isModificate=false, data }) => {
    const language = useSelector((state) => state.i18nReducer.language);
    const navigate = useNavigate()
    const [modificate, setModificate] = useState(isModificate)
    const [entriesData, setEntriesData] = useState(null);

    //const params= `?page=${pageNumber}`
    const url = endpoints.postScheduleAppointment //+ params
	const token = sessionStorage.getItem('token')
    const { data:dataPostScheduleAppointment, refetch: refetchPostScheduleAppointment } = useQuery({
		queryKey: ["key-postScheduleAppointment"],
		queryFn: ()=> postFetch(url, entriesData, token),
		enabled: false,
	}) 

    const onClickHandlerSchedule = () => {
        const objToSend = {
            shift: {id: data.id}
        }
        setEntriesData({...objToSend})

    }
    //console.log(entriesData)
    //console.log(dataPostScheduleAppointment)

    useEffect(()=>{
        if (entriesData) {
            refetchPostScheduleAppointment()
                .then((res)=>{
                    if(res.data.message){
                        alert(res.data.message)
                    } else {
                        alert('Turno agendado!')
                    }
                })
                .catch((err)=> alert('Hubo un error al agendar tu turno: '+ err))
        }

    },[entriesData])

    return (
        <div>
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
                                <p>{getFormatterDate(data).day}</p>
                                <p>{getFormatterDate(data).date}</p>
                            </div>
                        }
                    </div>
                    
                </div>

                <div className={`flex flex-col gap-3 justify-center items-center border-x border-[#5666BF] text-center p-6 text-xs sm:text-sm  transition-colors duration-300 ${isButtonSchedule ? '' : modificate ? '' : 'bg-[#f0efef]'}`}>
                    <p className="font-medium">{data.doctor.user.name} {data.doctor.user.lastname}</p>
                    <p className="">
                        {Object.values(
                            i18nDoctors[language].specialty.arrayOptions.filter((element, i)=>{
                                return Number(Object.keys(element)) === data.specialty.id
                            })[0]
                        )[0]}
                    </p>
                </div>

                <div className={`flex flex-col gap-3 justify-center items-center border-e border-[#5666BF] text-center  transition-colors duration-300 ${isButtonSchedule ? '' : modificate ? '' : 'bg-[#f0efef]'}`}>
                    <p className="text-sm">
                        {modificate
                            ?i18n[language].reserveAppointment.tableResults.chooseTimeSlotTitle
                            :i18n[language].reserveAppointment.tableResults.chooseTimeSlotTitleModify
}
                    </p>
                    <div className="mb-2 sm:mb-0 grid grid-rows-2 sm:grid-rows-none sm:grid-cols-2 gap-1 sm:gap-0 text-center font-medium">
                        <div className={`flex flex-row gap-1 justify-center items-center border border-[#5666BF] rounded-full sm:rounded-none sm:border-e-0 sm:rounded-s-3xl p-1 sm:p-2 ${modificate ? 'cursor-pointer' : ''} ${data.shiftTime===0 ? 'bg-[#e8def8] text-[#5666be]' : ''} `}>
                            {data.shiftTime===0 ? <img src={checkMark} alt="" className="w-[1rem]" /> : ''}
                            {i18n[language].reserveAppointment.tableResults.timeSlotMorning}
                        </div>
                        <div className={`flex flex-row gap-1 justify-center items-center border border-[#5666BF] rounded-full sm:rounded-none sm:rounded-e-3xl p-1 sm:p-2 ${modificate ? 'cursor-pointer' : ''} ${data.shiftTime===1 ? 'bg-[#e8def8] text-[#5666be]' : ''} `}>
                            {data.shiftTime===1 ? <img src={checkMark} alt="" className="w-[1rem]" /> : ''}
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
                                onClickHandler={() => onClickHandlerSchedule()}
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

export default memo(Row)
