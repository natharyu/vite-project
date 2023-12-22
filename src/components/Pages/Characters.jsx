import { useState, useEffect } from "react";
import Card from "../Global/Card";
import "./characters.scss";
function Characters() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [emptyFilter, setEmptyFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      await fetch("https://finalspaceapi.com/api/v0/character/").then((response) => {
        response.json().then((data) => {
          setCharacters(data);
          setFilteredCharacters(data);
          setIsLoading(false);
        });
      });
    };
    fetchCharacters().catch(console.error);
  }, []);

  const handleInputChange = (e) => {
    setFilteredCharacters(characters);
    const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredCharacters(filteredCharacters);
    if (filteredCharacters.length === 0) {
      setEmptyFilter(true);
    } else {
      setEmptyFilter(false);
    }
  };

  return (
    <section>
      <h2>Personnages</h2>
      <input type="text" name="search" placeholder="Rechercher..." onChange={handleInputChange} />
      <div>
        {emptyFilter ? (
          <p>Aucun résultat</p>
        ) : isLoading ? (
          <p>Chargement ...</p>
        ) : (
          <Card characters={filteredCharacters} />
        )}
      </div>
    </section>
  );
}

export default Characters;
