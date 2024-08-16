import React, { useState } from "react";
import downArrow from "../../../../assets/svg/others/downArrowOrange.svg";
import orangeCalendar from "../../../../assets/svg/others/orangeCalendar.svg";
import Button from "../../../Resources/FormElements/Button";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/medicalRecords/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);
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
      <p className="text-xl font-semibold color-[#1D1D1D]">
        {i18n[language].filters.title}
      </p>
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
            <option value="professional">
              {i18n[language].filters.form.selects.professional.option0}
            </option>
            <option value="opcion1">
              {i18n[language].filters.form.selects.professional.option1}
            </option>
            <option value="opcion2">
              {i18n[language].filters.form.selects.professional.option2}
            </option>
            <option value="opcion3">
              {i18n[language].filters.form.selects.professional.option3}
            </option>
          </select>
          <div className="absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none">
            <img
              src={downArrow}
              alt={i18n[language].icons.downArrow}
              aria-label={i18n[language].icons.downArrow}
              title={i18n[language].icons.downArrow}
            />
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
            <option value="specialty">
              {i18n[language].filters.form.selects.specialty.option0}
            </option>
            <option value="opcion1">
              {i18n[language].filters.form.selects.specialty.option1}
            </option>
            <option value="opcion2">
              {i18n[language].filters.form.selects.specialty.option2}
            </option>
            <option value="opcion3">
              {i18n[language].filters.form.selects.specialty.option3}
            </option>
          </select>
          <div className="absolute inset-y-0 right-1 pl-3 flex items-center pointer-events-none">
            <img
              src={downArrow}
              alt={i18n[language].icons.downArrow}
              aria-label={i18n[language].icons.downArrow}
              title={i18n[language].icons.downArrow}
            />
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-auto">
          <p className=" text-xs mb-2">{i18n[language].filters.form.period}</p>
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
                <img
                  src={orangeCalendar}
                  alt={i18n[language].icons.calendar}
                  aria-label={i18n[language].icons.calendar}
                  title={i18n[language].icons.calendar}
                />
              </div>
            </div>
            <p className="text-xs">{i18n[language].filters.form.until}</p>
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
                <img
                  src={orangeCalendar}
                  alt={i18n[language].icons.calendar}
                  aria-label={i18n[language].icons.calendar}
                  title={i18n[language].icons.calendar}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-auto">
          <Button
            type="submit"
            text={i18n[language].filters.form.button}
            bgColor="#5666BE"
            title={i18n[language].filters.form.button}
            textColor="white"
            classNames="border text-xl font-bold py-3 lg:px-10 border-white rounded-full"
          />
        </div>
      </form>
    </div>
  );
}
