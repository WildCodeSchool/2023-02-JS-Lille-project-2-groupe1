function Modal({ setOpenModal }) {
  return (
    <div className="modalcontainer">
      <h4>l'article est déja danss le pannier</h4>
      <button
        type="button"
        className="btnModal"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Modal;
