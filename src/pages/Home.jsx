import { useEffect, useState } from "react";
import Card from "../components/Global/Card";
import "./home.scss";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      await fetch("https://finalspaceapi.com/api/v0/character/").then((response) => {
        response.json().then((data) => {
          setCharacters(data);
          setIsLoading(false);
        });
      });
    };
    fetchCharacters();
  }, []);

  return (
    <section>
      <h2>Personnages</h2>
      <div>{isLoading ? <p>Chargement...</p> : <Card characters={characters} />}</div>
    </section>
  );
}

export default Home;
