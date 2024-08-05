import { useSelector } from "react-redux"
import InnerSpinner from "./InnerSpinner"

export default function Spinner(){
    const display = useSelector((state)=>state.displaySpinnerReducer.display)

    return(
        <div className = {`${display ? 'grid' : 'hidden'} place-items-center bg-transparent fixed top-0 left-0 w-[100dvw] h-[100dvh] z-10 duration-500 text-slate-900`}>
            <InnerSpinner />
        </div>
    )
}