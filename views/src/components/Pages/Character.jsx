import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacter } from "../../store/slices/charactersSlice";
import { useDispatch, useSelector } from "react-redux";
import "./character.scss";

function Character() {
  const dispatch = useDispatch();
  const { character, loading: isLoading } = useSelector((state) => state.characters);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCharacter(id));
  }, [dispatch]);

  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <article>
          <h2>{character.name}</h2>
          <div>
            <img src={character.img_url} alt={character.name} />
            <div>
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
            </div>
          </div>
        </article>
      )}
    </section>
  );
}

export default Character;
