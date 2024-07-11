import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './index.css'

export default function FadeEffect({ children }) {
	const location = useLocation();
    const [content, setContent] = useState(null)

	window.onbeforeunload = () => {
		const el = document.querySelector(".fade");
		/* if (el) */ el.style.opacity = 0;
	};

	useEffect(() => {
		const el = document.querySelector(".fade");
		/* if (el) */ el.style.opacity = 0;
	}, []);

    useEffect(() => {
		const el = document.querySelector(".fade");
        
		if (el) el.style.opacity = 0;
        setTimeout(()=>{
            console.log(el)
            setContent(children)
            if (el) el.style.opacity = 1;
        },1000)
        
	}, [location]);

	return (
        <div 
			className="fade"
		>
            {content && content}
        </div>
    );
}