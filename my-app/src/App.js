import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {defaultBoard, generateCorrectWord} from './Words';
import { createContext, useState} from 'react';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(defaultBoard);
  return (
    <div className="App">
      <nav> 
        <h1> Wordle-Clone </h1>
      </nav>
      <AppContext.Provider value = {{board, setBoard}}> 
      <Board />
      <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
