import React from "react";
import Button from "../../../Resources/FormElements/Button";
import audio from "../../../../assets/svg/others/audio.svg";
import recipe from "../../../../assets/svg/others/recipeTreatment.svg";
import attached from "../../../../assets/svg/others/attached.svg";
import rx from "../../../../assets/svg/others/imgRX.svg";
import laboratory from "../../../../assets/svg/others/laboratory.svg";
import { useSelector } from "react-redux";
import i18n from "../../../../i18n/treatments/createTreatment/index.json";

export default function index() {
  const language = useSelector((state) => state.i18nReducer.language);

  return (
    <form className="flex flex-col gap-8">
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          {i18n[language].form.consultation}
        </label>
        <input
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder={i18n[language].form.placeholder}
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          {i18n[language].form.description}
        </label>
        <input
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder={i18n[language].form.placeholder}
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          {i18n[language].form.diagnosis}
        </label>
        <input
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder={i18n[language].form.placeholder}
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div className="flex flex-col border border-[#5666BE80] rounded-lg p-3 gap-3 relative">
        <label className="text-sm text-[#5666BECC] font-semibold">
          {i18n[language].form.treatment}
        </label>
        <textarea
          type="text"
          className="bg-[#D982354D] border-white rounded-lg px-4 py-2 placeholder:text-sm placeholder:text-black"
          placeholder={i18n[language].form.placeholder}
        />
        <div className="absolute top-2 right-10">
          <img src={audio} alt="icono de microfono" width={30} />
        </div>
      </div>
      <div>
        <p className="text-sm text-[#5666BECC] font-semibold">
          {i18n[language].form.attachments}
        </p>
        <div className="flex items-center gap-4">
          <img src={attached} alt="icono de adjuntos" width={40} />
          <div className="flex flex-col items-center">
            <img src={recipe} alt="icono de receta" width={40} />
            <p>{i18n[language].form.recipe}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src={rx} alt="icono de imagenologia" width={35} />
            <p>{i18n[language].form.imaging}</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={laboratory}
              alt="icono de tubo de laboratorio"
              width={48}
            />
            <p>{i18n[language].form.laboratory}</p>
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
        <p>Doctor:</p>
        <div className="flex flex-col sm:flex-row justify-between">
          <p>{i18n[language].infoDoctor.name} Juanito Alimaña</p>
          <p>{i18n[language].infoDoctor.specialty} Medicina General</p>
          <p>{i18n[language].infoDoctor.license} 2456454</p>
        </div>
      </div>
    </form>
  );
}
