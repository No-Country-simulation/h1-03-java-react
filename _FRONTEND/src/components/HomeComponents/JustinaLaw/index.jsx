import React from 'react'
import imageDonation from '../../../assets/images/donation.webp';

export default function JustinaLaw() {    

    return (
        <article className="py-10 flex flex-col gap-3">
            <b>La “Ley Justina”</b>
			<p>
				La Ley 27447 incorpora la declaración de principios en la que se
				destacan los principios que enmarcan la ley: dignidad,
				autonomía, solidaridad y justicia distributiva en la asignación
				de órganos, equidad; se explicitan los derechos de donantes y
				receptores: a la intimidad, privacidad y confidencialidad; a la
				integridad; a la información y al trato equitativo e
				igualitario. Se establece la prioridad de traslado aéreo y
				terrestre de los pacientes con operativos en curso.
			</p>
			<p>
				Asimismo crea el Servicio de Procuración en los hospitales
				públicos y privados, que deberán contar con servicios destinados
				a la donación de órganos y tejidos, que permitan garantizar la
				correcta detección, evaluación y tratamiento del donante. Este
				servicio deberá contar al menos con un profesional que deberá
				detectar potenciales donantes, proveer a las familias la
				información completa y precisa sobre la donación de órganos,
				garantizar el desarrollo del proceso de donación y generar
				acciones de difusión y capacitación dentro de la institución.
			</p>
			<p>
				Una cuestión de significativa importancia es que le ley
				introduce la figura del Donante Presunto; de esta forma se
				mantiene la posibilidad de realizar la ablación de órganos y/o
				tejidos. En caso de no encontrarse registrada la voluntad del
				causante, el profesional a cargo del proceso de donación debe
				verificar la misma conforme lo determine la reglamentación.
			</p>
			<p>
				En el caso de menores de edad, se posibilita la obtención de
				autorización para la ablación por ambos progenitores o por aquel
				que se encuentre presente; se simplifican y optimizan los
				procesos que requieren intervención judicial.
			</p>

			<img
				src={imageDonation}
				alt="image donation"
				title="Image donation"
				aria-label="image donation"
				className="my-5"
				loading="lazy"
			/>
        </article>
    )
}
