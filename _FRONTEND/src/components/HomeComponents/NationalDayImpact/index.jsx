import React from "react";
import nationalDayImpactImage from "../../../assets/images/nationalDayImpact.webp";

export default function NationalDayImpact() {
	return (
		<article className="py-10 flex flex-col gap-3">
			<p>
				<strong>
					Día Nacional de la Donación de órganos: los trasplantes
					luego de la ley Justina y cómo impactó la pandemia
				</strong>
			</p>
			<p>
				<small className="text-slate-500">
					Desde marzo del año 2020, 1.276 personas en lista de
					espera recibieron un trasplante de órganos. Los cambios que
					introdujo la Ley Justina y los desafíos pendientes.
				</small>
			</p>
			<p>
				Pese a las dificultades provocadas por la pandemia, desde marzo
				de 2020 hasta la actualidad en Argentina se realizaron más de
				1200 trasplantes de órganos. Estas cifras las dio a conocer el
				Instituto Nacional Central Único Coordinador de Ablación e
				Implante (Incucai),en el marco del Día Nacional de la Donación
				de Órganos que se celebra cada 30 de mayo. 
            </p>
            <p>
                Desde el Incucai
				consideran que se trata de un logro importante del sistema de
				salud que tuvo que adecuarse a un escenario tan complejo como el
				que trajo la pandemia. En 2019 se había alcanzado el récord
				histórico con la realización de 1945 trasplantes. 
            </p>
            <p>
                En el último
				año, la elevada ocupación de terapias intensivas con pacientes
				con Covid se tradujo en una fuerte disminución en los procesos
				de donación y trasplantes en Argentina y en el mundo. Algunos
				países llegaron a suspender estos procedimientos durante un
				tiempo, como fue el caso de México. 
            </p>
            <p>
                “La decisión del Ministerio
				de Salud de la Nación fue sostenerlos y para eso se tomaron
				muchas medidas. Sobre todo, porque para quien está esperando,
				una oportunidad de trasplante puede no repetirse”, describe
				Carlos Soratti, presidente del Incucai. 
            </p>
            <p>
                En noviembre y diciembre
				de 2020 las cifras comenzaron a repuntar, pero con la llegada de
				la segunda ola la situación volvió a ser crítica. Sin embargo,
				Soratti destaca la forma en que se adecuaron los mecanismos:
				“Hay pacientes que requieren un trasplante de médula o de
				células progenitoras hematopoyéticas y que muchas veces, al no
				tener un donante familiar, requieren un donante de un registro
				mundial, al que nosotros estamos enlazados. Esto hace posible
				encontrar donantes en otros países y ese fue un estrés
				importante cuando comenzó la pandemia por la suspensión de
				vuelos. Pero aún así se buscaron nuevos caminos y se llegaron a
				trasladar células en vuelos aéreos de cargas. Todos los meses se
				hicieron un número importante de trasplantes de médula con
				donantes del exterior e incluso Argentina generó donantes para
				otros países”.
			</p>

            <img
                src={nationalDayImpactImage}
                alt="Impacto del dia Nacional de la donacion de órganos"
                aria-label="Impacto del dia Nacional de la donacion de órganos"
                title="Impacto del dia Nacional de la donacion de órganos"
                loading="lazy"
           />

		</article>
	);
}
