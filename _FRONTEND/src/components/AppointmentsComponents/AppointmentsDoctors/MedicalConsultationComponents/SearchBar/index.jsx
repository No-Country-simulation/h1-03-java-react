import React, { useState } from "react";
import search from "../../../../../assets/svg/others/magnifyingGlass.svg";
import downArrow from "../../../../../assets/svg/others/downArrowOrange.svg";
import orangeCalendar from "../../../../../assets/svg/others/orangeCalendar.svg";
import Button from "../../../../Resources/FormElements/Button";

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
    <div
      className="box-border flex flex-col justify-start w-full h-auto rounded-3xl py-8 px-8 lg:px-16 gap-6"
      style={{
        background:
          "linear-gradient(180deg, rgba(86, 102, 190, 0.8) 58.4%, rgba(217, 130, 53, 0.56) 100%)",
      }}
    >
      <div className="flex items-center gap-4 py-4 px-2">
        <img src={search} alt="" width="44px" height="44px" />
        <p className="text-white font-bold text-lg lg:text-xl">
          Buscar Turnos médicos
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="box-border flex flex-col md:flex-row justify-between items-start text-center gap-4"
      >
        <div className="gap-2.5 relative w-full lg:w-auto">
          <select
            name="professional"
            id="professional"
            value={formData.professional}
            onChange={handleChange}
            className="border-[#B7B7B7] border rounded-full w-full lg:w-[230px] text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-4 px-6"
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
            className="border-[#B7B7B7] border rounded-full w-full lg:w-[230px] text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-4 px-6"
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
          <p className="text-white font-semibold text-base mb-2">
            POR PERIODO:
          </p>
          <div className="flex flex-col xl:flex-row gap-3 items-center">
            <div className="gap-2.5 relative w-full lg:w-auto">
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="border-[#B7B7B7] rounded-full w-full text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-2 px-3"
                required
              />
              <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
                <img src={orangeCalendar} alt="icono de calendario" />
              </div>
            </div>
            <p className="text-white text-base font-semibold">HASTA</p>
            <div className="gap-2.5 relative w-full lg:w-auto">
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="border-[#B7B7B7] rounded-full w-full text-[#1D1D1D] placeholder-[#1D1D1D] placeholder:text-sm py-2 px-3"
                required
              />
              <div className="absolute inset-y-0 right-2 pl-3 flex items-center pointer-events-none">
                <img src={orangeCalendar} alt="icono de calendario" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between w-full lg:w-auto">
          <Button type="submit" text="Buscar" bgColor="#5666BE" title="Buscar" textColor="white" classNames="border text-xl font-bold py-3 md:px-20 border-white rounded-full" />
        </div>
      </form>
    </div>
  );
}
