import Modal from "../components/modal";
import Modalstyle from "../styles/modalstyle";
import logo from '../assets/logo.jpg'

export default function Modalpage() {
  return (
    <>
    <img src={logo} alt="logo HRnet"/>
      <h1 className="title">HRnet Modal</h1>
      <button className="button_modal" onClick={""}>Ouvrir la modal</button>
      <div className="modal">
      <Modal />
      <Modalstyle />
      </div>
    </>
  );
}
