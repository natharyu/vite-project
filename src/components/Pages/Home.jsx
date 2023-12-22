import { useEffect, useState } from "react";
import Card from "../Global/Card";
import "./home.scss";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [randomCharacters, setRandomCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      await fetch("https://finalspaceapi.com/api/v0/character/").then((response) => {
        response.json().then((data) => {
          setCharacters(data);
          getRandomCharacters(data);
          setIsLoading(false);
        });
      });
    };
    fetchCharacters().catch(console.error);
  }, []);

  const getRandomCharacters = (data) => {
    const characters = [];
    for (let i = 0; i < 4; i++) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!characters.includes(data[randomIndex])) {
        characters.push(data[randomIndex]);
        setRandomCharacters(characters);
      } else {
        i--;
      }
    }
  };

  return (
    <section>
      <h2>Home</h2>
      <div>{isLoading ? <p>Chargement...</p> : <Card characters={randomCharacters} />}</div>
    </section>
  );
}

export default Home;
