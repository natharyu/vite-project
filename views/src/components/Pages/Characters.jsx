import { useState, useEffect } from "react";
import Card from "../Global/Card";
import "./characters.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters, getFilteredCharacters } from "../../store/slices/charactersSlice.js";
function Characters() {
  const filteredCharacters = useSelector((state) => state.characters.filteredCharacters);
  const isLoading = useSelector((state) => state.characters.loading);
  const dispatch = useDispatch();
  const [emptyFilter, setEmptyFilter] = useState(false);

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  const handleInputChange = (e) => {
    dispatch(getFilteredCharacters(e.target.value));
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
