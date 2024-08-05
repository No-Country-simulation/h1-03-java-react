import React, { useState } from "react";
import {
  format,
  startOfWeek,
  addDays,
  isToday,
  subWeeks,
  addWeeks,
} from "date-fns";
import { es } from "date-fns/locale";
import arrowLeft from "../../../../assets/svg/others/arrowLeft.svg";
import arrowRight from "../../../../assets/svg/others/arrowRight.svg";

export default function Index() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startOfWeekDate, setStartOfWeekDate] = useState(
    startOfWeek(currentDate, { weekStartsOn: 1 })
  );

  const days = Array.from({ length: 7 }, (_, i) => addDays(startOfWeekDate, i));

  const handlePreviousWeek = () => {
    const newStartOfWeek = subWeeks(startOfWeekDate, 1);
    setStartOfWeekDate(newStartOfWeek);
    setCurrentDate(newStartOfWeek);
  };

  const handleNextWeek = () => {
    const newStartOfWeek = addWeeks(startOfWeekDate, 1);
    setStartOfWeekDate(newStartOfWeek);
    setCurrentDate(newStartOfWeek);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-[#E3E2E2] rounded-full flex-wrap sm:flex-nowrap">
      <button
        onClick={handlePreviousWeek}
        className="p-2 bg-[#E3E2E2] rounded-full border-none"
      >
        <img src={arrowLeft} alt="flecha izquierda" />
      </button>

      <div className="flex flex-1 mx-4 overflow-x-auto">
        <div className="flex flex-nowrap space-x-4 sm:space-x-8">
          {days.map((day) => {
            const isTodayDay = isToday(day);
            const dayClass = `flex flex-col items-center justify-center w-10 h-10 text-center rounded-[30%] cursor-pointer ${
              isTodayDay ? "bg-[#D98235B2]" : "bg-[#E3E2E2] hover:bg-white"
            }`;

            return (
              <div
                key={day.toString()}
                className={dayClass}
                onClick={() => setCurrentDate(day)}
              >
                <span
                  className={`text-xs sm:text-sm ${
                    isTodayDay
                      ? "text-white font-bold"
                      : "text-[#2C2C2C] font-normal"
                  }`}
                >
                  {format(day, "eee", { locale: es })}
                </span>
                <span
                  className={`text-xs sm:text-sm ${
                    isTodayDay
                      ? "text-white font-bold"
                      : "text-[#2C2C2C] font-normal"
                  }`}
                >
                  {format(day, "d")}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleNextWeek}
        className="p-2 bg-[#E3E2E2] rounded-full border-none"
      >
        <img src={arrowRight} alt="flecha derecha" />
      </button>
    </div>
  );
}
