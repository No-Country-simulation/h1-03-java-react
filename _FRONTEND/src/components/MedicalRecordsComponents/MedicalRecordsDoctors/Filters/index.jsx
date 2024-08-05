import React, { useState } from "react";
import downArrow from "../../../../assets/svg/others/downArrowOrange.svg";
import orangeCalendar from "../../../../assets/svg/others/orangeCalendar.svg";
import Button from "../../../Resources/FormElements/Button";

export default function index() {
  const [formData, setFormData] = useState({
    professional: "",
    specialty: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col py-4 px-8 text-center border-2 border-[#5666BE80] w-full rounded-2xl gap-4">
      <p className="text-xl font-semibold color-[#1D1D1D]">Filtros</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="gap-2.5 relative w-full lg:w-auto">
          <select
            name="professional"
            id="professional"
            value={formData.professional}
            onChange={handleChange}
            className="border-[#B7B7B7] border rounded-full w-full text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-4 px-6"
            required
          >
            <option value="professional" selected>
              PROFESIONAL
            </option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          <div className="absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none">
            <img src={downArrow} alt="flecha hacia abajo" />
          </div>
        </div>

        <div className="gap-2.5 relative w-full lg:w-auto">
          <select
            name="specialty"
            id="specialty"
            value={formData.specialty}
            onChange={handleChange}
            className="border-[#B7B7B7] border rounded-full w-full text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-4 px-6"
            required
          >
            <option value="specialty" selected>
              ESPECIALIDAD
            </option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
          <div className="absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none">
            <img src={downArrow} alt="flecha hacia abajo" />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-auto">
          <p className=" text-xs mb-2">POR PERIODO:</p>
          <div className="flex flex-col gap-3 items-center">
            <div className="gap-2.5 relative w-full lg:w-auto">
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="border-[#B7B7B7] rounded-full w-full text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-4 px-6"
                required
              />
              <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                <img src={orangeCalendar} alt="icono de calendario" />
              </div>
            </div>
            <p className="text-xs">HASTA</p>
            <div className="gap-2.5 relative w-full lg:w-auto">
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="border-[#B7B7B7] rounded-full w-full text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-4 px-6"
                required
              />
              <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none">
                <img src={orangeCalendar} alt="icono de calendario" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-auto">
          <Button
            type="submit"
            text="Buscar"
            bgColor="#5666BE"
            title="Buscar"
            textColor="white"
            classNames="border text-xl font-bold py-3 lg:px-10 border-white rounded-full"
          />
        </div>
      </form>
    </div>
  );
}
