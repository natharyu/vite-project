import { useEffect, useState } from "react";
import Card from "../components/Global/Card";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      await fetch("https://finalspaceapi.com/api/v0/character/").then((response) => {
        response.json().then((data) => {
          setCharacters(data);
        });
      });
    };
    fetchCharacters();
  }, []);

  return (
    <section>
      <h2>Personnages</h2>
      <Card characters={characters} />
    </section>
  );
}

export default Home;
