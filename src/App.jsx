import './App.css'
import info from './data/data.jsx'
import Card from './Card'
function App() {
  return (
    <>
    <div className='game-name'>Rock Paper Scissors Game</div>
    <div className='cards'>
      {
        info.map((data) => (<Card key={data.id} icon={data.icon} name={data.name} />))
      }
    </div>
    <div className='result'>
        <div id="playerDisplay">PLAYER : </div>
        <div id="computerDisplay">COMPUTER : </div>
        <div id="resultDisplay">PLAY THE GAME!!!</div>
    </div>
    </>
  )
}

export default App;
