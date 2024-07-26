import Header from "./Header";
import Footer from "./Footer";
import './index.css'
import BottomMenu from "./BottomMenu";

export default function ComponentLayout({children} ) {

    return (
        <div className="componentLayout">
            <Header />
                <section className="flex-1 m-auto py-5 w-full justify-center content-start min-h-full">
                    {children}                    
                </section>
            <Footer />
            {/* <BottomMenu /> */}
        </div>
    )
}
