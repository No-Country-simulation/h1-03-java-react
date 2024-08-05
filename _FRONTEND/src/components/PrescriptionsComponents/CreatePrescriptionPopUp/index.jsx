import React from "react";
import closePopUp from "../../../assets/svg/others/closePopup.svg";
import Button from "../../Resources/FormElements/Button";
import trashCan from "../../../assets/svg/others/trashCan.svg";
import ready from "../../../assets/svg/others/ready.svg";

export default function index({ closeModal }) {
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
          <img src={closePopUp} alt="cerrar pop up" />
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-medium text-2xl text-center">Crear Receta</p>
          <div className="flex flex-col sm:flex-row items-start justify-between text-[#5666BE] font-semibold gap-3">
            <p>
              Nombres y Apellido:{" "}
              <span className="text-black font-normal">
                James Lucho Bond Gonzales
              </span>
            </p>
            <p>
              Edad: <span className="text-black font-normal">28a</span>
            </p>
            <p>
              Fecha:{" "}
              <span className="text-black font-normal">16-03-2024 13:30</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <p className="text-[#5666BE] font-semibold">
              Diagnóstico:{" "}
              <span className="text-black font-normal">
                Colitis seudomembranosa
              </span>
            </p>
            <p className="text-[#5666BE] font-semibold">
              Añadir Medicamento:{" "}
              <span className="text-[#1D1D1D80] font-normal border border-[#1D1D1D80] rounded-2xl p-1">
                Medicamento
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4">
            <div className="flex flex-col justify-center items-center flex-1 gap-4">
              <p className="text-[#5666BE] font-semibold">Medicamentos</p>
              <div className="flex flex-col lg:flex-row gap-2">
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Medicamentos</p>
                  <p>Amoxicilina</p>
                  <input type="text" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Concentración</p>
                  <p>500mg</p>
                  <input type="text" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Presentación</p>
                  <p>tableta</p>
                  <select name="" id="">
                    <option value="opciones" selected disabled>
                      Opciones
                    </option>
                    <option value="tableta">Tableta</option>
                  </select>
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Descripción</p>
                  <p>Marca genérica</p>
                  <input type="text" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Cantidad</p>
                  <p>15</p>
                  <input type="number" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-1 gap-4">
              <p className="text-[#5666BE] font-semibold">Indicaciones</p>
              <div className="flex flex-col lg:flex-row gap-2">
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">
                    Fecha de inicio
                  </p>
                  <p>16-03-24</p>
                  <input type="date" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Frecuencia</p>
                  <p>c/8h</p>
                  <input type="number" name="" id="" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Cantidad</p>
                  <p>1</p>
                  <input type="number" name="" id="" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Duración</p>
                  <p>5 días</p>
                  <input type="number" name="" id="" />
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#5666BE] font-semibold">Vía</p>
                  <p>oral</p>
                  <select name="" id="">
                    <option value="opciones" selected disabled>
                      Opciones
                    </option>
                    <option value="oral">Oral</option>
                  </select>
                </div>
                <div clasName="flex flex-col gap-4">
                  <p className="text-[#C60000] font-semibold">Acción</p>
                  <div className="flex items-center justify-center">
                    <img src={trashCan} alt="icono de tacho de basura" />
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={trashCan} alt="icono de tacho de basura" />
                    <img src={ready} alt="icono de listo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              text="Cancelar"
              bgColor="#D98235"
              textColor="white"
              classNames="px-10"
            />
            <Button
              text="Confirmar"
              bgColor="#5666BE"
              textColor="white"
              classNames="px-10"
            />
          </div>
          <div className="flex flex-col">
            <p className="flex items-start">Doctor:</p>
            <div className="flex flex-col sm:flex-row justify-between items-start">
              <p>Nombre y apellido: Juanito Alimaña</p>
              <p>Especialidad: Medicina General</p>
              <p>Licencia: 2456454</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
