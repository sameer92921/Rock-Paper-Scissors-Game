import './App.css'
import { useState } from 'react'
import info from './data/data.jsx'
import Card from './Card'

function App() {
  const choices = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (playerChoice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (computerChoice === playerChoice) {
      result = "IT'S A TIE!";
    } else {
      switch (playerChoice) {
        case "rock":
          result = computerChoice === "scissors" ? "YOU WIN!🥳" : "YOU LOSE!!😢";
          break;
        case "paper":
          result = computerChoice === "rock" ? "YOU WIN!🥳" : "YOU LOSE!!😢";
          break;
        case "scissors":
          result = computerChoice === "paper" ? "YOU WIN!🥳" : "YOU LOSE!!😢";
          break;
        default:
          result = "Invalid choice!";
      }
    }

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);
    setResult(result);
  };

  const resultClass =
    result === "YOU WIN!🥳" ? "greenText" : result === "YOU LOSE!!😢" ? "redText" : "";

  return (
    <>
      <div className="game-name">Rock Paper Scissors Game</div>
      <div className="cards">
        {
          info.map((data) => (
            <Card
              key={data.id}
              icon={data.icon}
              name={data.name}
              onClick={() => playGame(data.name.toLowerCase())}
            />
          ))
        }
      </div>
      <div className="result">
        <div id="playerDisplay">PLAYER : {playerChoice}</div>
        <div id="computerDisplay">COMPUTER : {computerChoice}</div>
        <div id="resultDisplay" className={resultClass}>{result || "PLAY THE GAME!!!"}</div>
      </div>
    </>
  );
}

export default App;