import React from "react";
import ItemSpecialty from "./ItemSpecialty";
import healthCheckup from "../../../../assets/svg/icons/healthCheckup.svg";
import toothCracked from "../../../../assets/svg/icons/toothCracked.svg";
import lungs from "../../../../assets/svg/icons/lungs.svg";
import heartWithPulse from "../../../../assets/svg/icons/heartWithPulse.svg";
import ophthalmology from "../../../../assets/svg/icons/ophthalmology.svg";
import stomach from "../../../../assets/svg/icons/stomach.svg";
import dermatology from "../../../../assets/svg/icons/dermatology.svg";
import rh from "../../../../assets/svg/icons/rh+.svg";

export default function index() {
  return (
    <div className="flex flex-col gap-4">
      <ItemSpecialty
        icon={healthCheckup}
        specialty="MEDICINA GENERAL"
        date="14/07/2024"
      />
      <ItemSpecialty
        icon={toothCracked}
        specialty="ODONTOLOGÍA"
        date="05/06/2024"
      />
      <ItemSpecialty icon={lungs} specialty="NEUMONOLOGÍA" date="01/06/2024" />
      <ItemSpecialty
        icon={heartWithPulse}
        specialty="CARDIOLOGÍA"
        date="26/03/2024"
      />
      <ItemSpecialty
        icon={ophthalmology}
        specialty="OFTALMOLOGÍA"
        date="15/01/2024"
      />
      <ItemSpecialty
        icon={stomach}
        specialty="GASTROENTEROLOGÍA"
        date="03/01/2024"
      />
      <ItemSpecialty
        icon={dermatology}
        specialty="DERMATOLOGÍA"
        date="02/12/2023"
      />
      <ItemSpecialty icon={rh} specialty="HEMATOLOGÍA" date="30/10/2023" />
    </div>
  );
}
