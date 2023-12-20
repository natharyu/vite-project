import { useState } from "react";
import Modal from "./Modal";
import "./card.scss";

function Card({ characters }) {
  const [character, setCharacter] = useState({});
  const [modal, setModal] = useState(false);
  function showModal(character) {
    setModal(true);
    setCharacter(character);
  }
  return (
    <>
      <article id="card">
        {characters.map((character) => (
          <div key={character.id}>
            <button onClick={() => showModal(character)}>Voir plus</button>
            <img src={character.img_url} alt={character.name} />
            <h3>{character.name}</h3>
            <p>Sexe: {character.gender}</p>
            <p>Origine : {character.origin}</p>
          </div>
        ))}
      </article>
      {modal && <Modal character={character} setModal={setModal} />}
    </>
  );
}

export default Card;
