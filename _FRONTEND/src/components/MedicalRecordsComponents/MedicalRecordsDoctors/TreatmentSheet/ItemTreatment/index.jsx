import React, { useEffect, useState } from "react";
import stethoscope from "../../../../../assets/svg/others/stethoscope.svg";
import description from "../../../../../assets/svg/others/descriptionMagnifyingGlass.svg";
import recipe from "../../../../../assets/svg/others/recipe.svg";
import CreatePrescriptionPopUp from "../../../../PrescriptionsComponents/CreatePrescriptionPopUp";
import { useSelector } from "react-redux";
import i18n from "../../../../../i18n/recipes/index.json";

export default function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const language = useSelector((state) => state.i18nReducer.language);

  useEffect(() => {
    setIsModalOpen(false);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col py-4 px-8 text-center border-2 border-[#5666BE80] w-full h-auto rounded-3xl gap-4">
      <div className="flex flex-col sm:flex-row justify-between">
        <p>{i18n[language].date}</p>
        <p>{i18n[language].hour}</p>
        <p>{i18n[language].age}</p>
      </div>
      <div className="flex items-start gap-2">
        <img
          src={stethoscope}
          alt={i18n[language].images.stethoscope}
          aria-label={i18n[language].images.stethoscope}
          title={i18n[language].images.stethoscope}
        />
        <p className="text-start">
          {i18n[language].reason.title}
          <br></br>
          <span>{i18n[language].reason.description}</span>
        </p>
      </div>
      <div className="flex items-start gap-2">
        <img
          src={description}
          alt={i18n[language].images.description}
          aria-label={i18n[language].images.description}
          title={i18n[language].images.description}
        />
        <p className="text-start">
          {i18n[language].description.title}
          <br></br>
          <span>{i18n[language].description.description}</span>
        </p>
      </div>
      <div className="text-start">
        <p className="">
          {i18n[language].diagnosis.title}
          <br></br>
          {i18n[language].diagnosis.description}
        </p>
      </div>
      <div className="text-start">
        <p>{i18n[language].treatment.title}</p>
        <ol className="list-decimal list-inside">
          <li>{i18n[language].treatment.list1}</li>
          <li>{i18n[language].treatment.list2}</li>
          <li>{i18n[language].treatment.list3}</li>
          <li>{i18n[language].treatment.list4}</li>
        </ol>
      </div>
      <div className="text-start">
        <p>{i18n[language].attachments.title}</p>
        <div className="flex gap-2 cursor-pointer" onClick={openModal}>
          <img
            src={recipe}
            alt={i18n[language].attachments.image.recipe}
            aria-label={i18n[language].attachments.image.recipe}
            title={i18n[language].attachments.image.recipe}
          />
          <p className="text-[#5666BE]">{i18n[language].attachments.recipe}</p>
        </div>
      </div>
      <div className="text-start">
        <p>{i18n[language].trafficker.title}</p>
        <div className="flex flex-col sm:flex-row justify-between text-xs">
          <p>{i18n[language].trafficker.name}</p>
          <p>{i18n[language].trafficker.specialty}</p>
          <p>{i18n[language].trafficker.license}</p>
        </div>
      </div>
      {isModalOpen && <CreatePrescriptionPopUp closeModal={closeModal} />}
    </div>
  );
}
