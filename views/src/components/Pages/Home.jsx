import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomCharacter } from "../../store/slices/charactersSlice.js";
import Card from "../Global/Card";
import "./home.scss";

function Home() {
  const isLoading = useSelector((state) => state.characters.loading);
  const characters = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomCharacter());
  }, [dispatch]);

  return (
    <section>
      <h2>Home</h2>
      <div>{isLoading ? <p>Chargement...</p> : <Card characters={characters} />}</div>
    </section>
  );
}

export default Home;
