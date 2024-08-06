import React from "react";
import Select from "../../Resources/FormElements/Select";
import Button from "../../Resources/FormElements/Button";
//COMPONENT NOT USED

export default function FilterAppointment() {
	return (
		<>
			<Select
				id={"medicalSpeciality"}
				title={"Espcialidad médica"}
				arrayOptions={[
					"Cardiología",
					"Obstetricia",
					"Neumonología",
					"Pediatría",
					"Oftalmología",
					"Oncología",
					"Clínico",
				]}
				isRequired={true}
				hasLabel={false}
			/>

			<Select
				id={"healthProfessional"}
				title={"Profesional"}
				arrayOptions={["Juan Perez1", "Juan Perez2", "Juan Perez3"]}
				isRequired={true}
				hasLabel={false}
			/>

			<Select
				id={"appointmentDate"}
				title={"Fecha de la turno"}
				arrayOptions={["01/01/2024", "02/01/2024", "03/01/2024"]}
				isRequired={true}
				hasLabel={false}
			/>

			<Button type={"submit"} text={"Buscar"} title={"Buscar"} />
		</>
	);
}
