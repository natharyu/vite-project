import "./assets/style/style.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
