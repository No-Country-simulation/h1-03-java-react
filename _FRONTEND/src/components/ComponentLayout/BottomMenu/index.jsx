import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function BottomMenu() {
	const navigate = useNavigate();
    const [bottomValue, setBottomValue] = useState('0px')
    let prevScrollPos2 = window.scrollY

	const hideBottomMenuOnScroll = () => {
        let currentScrollPos = window.scrollY

        prevScrollPos2 < currentScrollPos
            ?setBottomValue('-80px')
            :setBottomValue('0px')

        prevScrollPos2 = currentScrollPos
    }

	const hideBottomMenuOnWhell = (delta) => {
		delta > 0 && setBottomValue('-80px');
		delta < 0 && setBottomValue('0px');
	}

	useEffect(() => {
		document.onscroll = (e) => {
			hideBottomMenuOnScroll()
		}

		document.onwheel = (e) => {
			hideBottomMenuOnWhell(e.deltaY)
		}
	}, [])
    

	return (
		<nav className="bottomMenu" style={{bottom:bottomValue}}>
			<div>
				<div onClick={()=>navigate('/crear-paciente')}>Crear Paciente</div>
				<div onClick={()=>navigate('/crear-medico')}>Crear Médico</div>
			</div>
			<div>
				<div onClick={()=>navigate('/leer-paciente')}>Leer Paciente</div>
				<div onClick={()=>navigate('/leer-medico')}>Leer Médico</div>
			</div>
			<div>
				<div onClick={()=>navigate('/actualizar-paciente')}>Actualizar Paciente</div>
				<div onClick={()=>navigate('/actualizar-medico')}>Actualizar Médico</div>
			</div>
			<div>
				<div onClick={()=>navigate('/borrar-paciente')}>Borrar Paciente</div>
				<div onClick={()=>navigate('/borrar-medico')}>Borrar Médico</div>
			</div>
			<div>
				<div>OPT5</div>
			</div>
		</nav>
	);
}
