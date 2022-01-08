import useModal from '../hooks/usemodal';
import Modal from '../components/modal';
import Indexstyle from '../styles/indexstyle';
import Modalstyle from '../styles/modalstyle';

export default function Modalpage() {
    const {isShowing, toggle} = useModal();
  return (
    <div className="menu">
      <h1 className="title">HRnet Modal</h1>
      <button className="button_modal" onClick={toggle}>Ouvrir la modal</button>
      <Modal isShowing={isShowing} hide={toggle}/>
      <Indexstyle/><Modalstyle/>
      </div>
  );
}
