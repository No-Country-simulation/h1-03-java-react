import Header from "./Header";
import Footer from "./Footer";
import './index.css'
import BottomMenu from "./Footer/BottomMenu";

export default function ComponentLayout({children} ) {

    return (
        <div className="componentLayout">
            <Header />
            <section className="d-block w-screen flex-1">
                {children}
            </section>
            <Footer />
            <BottomMenu />
        </div>
    )
}
