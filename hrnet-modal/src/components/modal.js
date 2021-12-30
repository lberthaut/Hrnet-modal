export default function Modal() {
  return (
    <div className="overlay">
      <div id="modal_container">
        <i className="far fa-times-circle"></i>
        <div className="'content_container">
          <h2 className="modal_title">Modal HRnet</h2>
          <p className="text">
            Vous pouvez cliquer sur le bouton "close" ou en dehors de la fenêtre
            pour fermer la modal
          </p>
        </div>
      </div>
    </div>
  );
}
