import "./modal.scss";
import { RiCloseFill } from "react-icons/ri";

function Modal({ character, modal, setModal }) {
  function hideModal() {
    setModal(!modal);
  }
  return (
    <div id="modal">
      <button onClick={hideModal}>
        <RiCloseFill size={20} />
      </button>
      <section>
        <article>
          <img src={character.img_url} alt={character.name} />
          <h2>{character.name}</h2>
          <p>
            <span>Sexe:</span>
            {character.gender}
          </p>
          <p>
            <span>Cheveux:</span>
            {character.hair}
          </p>
          <p>
            <span>Origine:</span>
            {character.origin}
          </p>
          <p>
            <span>Espèce:</span>
            {character.species}
          </p>
          <p>
            <span>Status:</span>
            {character.status}
          </p>
        </article>
      </section>
    </div>
  );
}

export default Modal;
