import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./character.scss";
function Character() {
  const [character, setCharacter] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      await fetch(`https://finalspaceapi.com/api/v0/character/${id}`).then((response) => {
        response.json().then((data) => {
          setCharacter(data);
          setIsLoading(false);
        });
      });
    };
    fetchCharacters();
  }, []);
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
