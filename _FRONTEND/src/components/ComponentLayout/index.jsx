import Header from "./Header";
import Footer from "./Footer";
import './index.css'
import BottomMenu from "./BottomMenu";
import FadeEffect from "../Resources/Others/FadeEffect";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ComponentLayout({children} ) {
    /* const location = useLocation();

	document.documentElement.onbeforeunload = () => {
        console.log('saliendo')
		const el = document.querySelector(".fade1");
		if (el) el.style.opacity = 0;
	};

	useEffect(() => {
        console.log('montando')
		const el = document.querySelector(".fade1");
		// if (el) el.style.opacity = 0;
	}, []);

    useEffect(() => {
		const el = document.querySelector(".fade1");
		if (el) {el.childNodes[0].style.opacity = 0;
        console.log('0')}
        setTimeout(()=>{
            console.log('1')
            if (el) el.childNodes[0].style.opacity = 1;
        },1000)
        
	}, [location]); 
    */

    return (
        <div className="componentLayout">
            <Header />
                <section className="fade1 d-block w-screen flex-1 overflow-hidden">
                    {children}                    
                </section>
            <Footer />
            <BottomMenu />
        </div>
    )
}
