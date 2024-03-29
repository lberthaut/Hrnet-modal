import useModal from '../hooks/usemodal';
import Modal from '../components/modal';

export default function Modalpage() {
    const {isShowing, toggle} = useModal();
  return (
    <div className="menu">
      <h1 className="title">HRnet Modal</h1>
      <button className="button_modal" onClick={toggle}>Ouvrir la modal</button>
      <Modal isShowing={isShowing} hide={toggle}/>
      </div>
  );
}
