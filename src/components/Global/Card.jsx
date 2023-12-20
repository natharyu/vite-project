import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { FcSearch } from "react-icons/fc";
import "./card.scss";

function Card({ characters }) {
  const [character, setCharacter] = useState({});
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  function showModal(character) {
    setModal(true);
    setCharacter(character);
  }
  return (
    <>
      {characters.map((character) => (
        <article id="card" key={character.id} onClick={() => showModal(character)}>
          {/* <article id="card" key={character.id} onClick={() => navigate(`/character/${character.id}`)}></article> */}
          <button onClick={() => navigate(`/character/${character.id}`)}>
            <FcSearch size={20} />
          </button>
          <img src={character.img_url} alt={character.name} />
          <h3>{character.name}</h3>
          <p>Sexe: {character.gender}</p>
          <p>Origine : {character.origin}</p>
        </article>
      ))}
      {modal && <Modal character={character} setModal={setModal} />}
    </>
  );
}

export default Card;
