import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import StartGame from "./components/startGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameplay} />}</>
  );
}

export default App;
