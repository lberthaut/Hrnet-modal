import Modal from "../components/modal";
import Modalstyle from "../styles/modalstyle";

export default function Modalpage(){
    return(
        <>
        <h1 className="title">HRnet Modal</h1>
        <button onClick={""}>Ouvrir la modal</button>
        <Modal/><Modalstyle/>
        </>
    )
}