import React from "react";
import closePopUp from "../../../assets/svg/others/closePopup.svg";
import Button from "../../Resources/FormElements/Button";
import trashCan from "../../../assets/svg/others/trashCan.svg";
import ready from "../../../assets/svg/others/ready.svg";
import { useSelector } from "react-redux";
import i18n from "../../../i18n/createPrescriptions/index.json";

export default function index({ closeModal }) {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <section
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="pointer-events-all absolute w-3/4 h-[90%] overflow-y-auto top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 border-2 bg-white rounded-xl grid p-1 sm:p-3 md:p-8"
        style={{
          scrollbarColor: "#D9D9D9 #ffff",
        }}
      >
        <div
          className="absolute right-2 top-1 cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={closePopUp}
            alt={i18n[language].icons.closePopUp}
            aria-label={i18n[language].icons.closePopUp}
            title={i18n[language].icons.closePopUp}
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-2xl text-center">
            {i18n[language].title}
          </p>
          <div className="flex flex-col sm:flex-row items-start justify-between text-[#5666BE] font-semibold gap-3">
            <p>
              {i18n[language].personInfo.name}{" "}
              <span className="text-black font-normal">
                {i18n[language].personData.name}
              </span>
            </p>
            <p>
              {i18n[language].personInfo.age}{" "}
              <span className="text-black font-normal">
                {i18n[language].personData.age}
              </span>
            </p>
            <p>
              {i18n[language].personInfo.date}{" "}
              <span className="text-black font-normal">
                {i18n[language].personData.date}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-[#5666BE] font-semibold">
              {i18n[language].personInfo.diagnosis}{" "}
              <span className="text-black font-normal">
                {i18n[language].personData.diagnosis}
              </span>
            </p>
            <p className="text-[#5666BE] font-semibold">
              {i18n[language].personInfo.addMedicine}{" "}
              <span className="text-[#1D1D1D80] font-normal border border-[#1D1D1D80] rounded-2xl p-1">
                {i18n[language].medication.title}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col justify-center items-center flex-1 gap-4">
              <p className="text-[#5666BE] font-semibold">
                {i18n[language].medication.title}
              </p>
              <div className="flex flex-col lg:flex-row gap-2">
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].medication.medicine.title}
                  </p>
                  <p>{i18n[language].medication.medicine.result}</p>
                  <input type="text" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].medication.concentration.title}
                  </p>
                  <p>{i18n[language].medication.concentration.result}</p>
                  <input type="text" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].medication.presentation.title}
                  </p>
                  <p>{i18n[language].medication.presentation.result}</p>
                  <select name="" id="">
                    <option value="opciones" selected disabled>
                      {i18n[language].medication.presentation.options}
                    </option>
                    <option value="tableta">
                      {i18n[language].medication.presentation.result}
                    </option>
                  </select>
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].medication.description.title}
                  </p>
                  <p>{i18n[language].medication.description.result}</p>
                  <input type="text" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].medication.amount.title}
                  </p>
                  <p>{i18n[language].medication.amount.result}</p>
                  <input type="number" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1 gap-4">
              <p className="text-[#5666BE] font-semibold">
                {i18n[language].indications.title}
              </p>
              <div className="flex flex-col lg:flex-row gap-2">
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].indications.date.title}
                  </p>
                  <p>{i18n[language].indications.date.result}</p>
                  <input type="date" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].indications.frequency.title}
                  </p>
                  <p>{i18n[language].indications.frequency.result}</p>
                  <input type="number" name="" id="" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].indications.amount.title}
                  </p>
                  <p>{i18n[language].indications.amount.result}</p>
                  <input type="number" name="" id="" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].indications.duration.title}
                  </p>
                  <p>{i18n[language].indications.duration.result}</p>
                  <input type="number" name="" id="" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    {i18n[language].indications.route.title}
                  </p>
                  <p>{i18n[language].indications.route.result}</p>
                  <select name="" id="">
                    <option value="opciones" selected disabled>
                      {i18n[language].indications.route.options}
                    </option>
                    <option value="oral">
                      {i18n[language].indications.route.result}
                    </option>
                  </select>
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#C60000] font-semibold">
                    {i18n[language].indications.action}
                  </p>
                  <div className="flex items-center justify-center">
                    <img src={trashCan} alt="icono de tacho de basura" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={trashCan}
                      alt={i18n[language].icons.trash}
                      aria-label={i18n[language].icons.trash}
                      title={i18n[language].icons.trash}
                    />
                    <img
                      src={ready}
                      alt={i18n[language].icons.ready}
                      aria-label={i18n[language].icons.ready}
                      title={i18n[language].icons.ready}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              text={i18n[language].buttons.cancel}
              bgColor="#D98235"
              textColor="white"
              classNames="px-10"
            />
            <Button
              text={i18n[language].buttons.confirm}
              bgColor="#5666BE"
              textColor="white"
              classNames="px-10"
            />
          </div>
          <div className="flex flex-col">
            <p className="flex items-start">
              {i18n[language].doctorData.title}
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <p>{i18n[language].doctorData.name}</p>
              <p>{i18n[language].doctorData.specialty}</p>
              <p>{i18n[language].doctorData.license}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
