import React, { useEffect } from "react";
import Select from "../../Resources/FormElements/Select";
import Button from "../../Resources/FormElements/Button";

export default function Filter() {
	useEffect(() => {
		document.querySelector('#medicalSpeciality').focus()
	}, [])

	return (
		<>
			<Select
				id={"medicalSpeciality"}
				title={"Espcialidad médica"}
				arrayOptions={[
					"ESPECIALIDAD",
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
				arrayOptions={["PROFESIONAL", "Juan Perez1", "Juan Perez2", "Juan Perez3"]}
				isRequired={true}
				hasLabel={false}
			/>

			<Select
				id={"dataRange"}
				title={"Rango de fechas"}
				arrayOptions={["RANGO DE FECHA", "01/01/2024", "02/01/2024", "03/01/2024"]}
				isRequired={true}
				hasLabel={false}
			/>
		</>
	);
}
