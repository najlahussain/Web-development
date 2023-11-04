import React, {useEffect, useState} from 'react';
import './App.css';
import Block from './components/Block';

function App() {
  const [state,setState] = useState(Array(9).fill(null));
  const [currentTurn,setCurrentTurn] = useState('X');
  
  const checkWin =()=>{
    const win = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0;i<win.length;i++){
      const [a,b,c] = win[i];
      if(state[a]!=null && state[a]===state[b] && state[b]===state[c])
        return true;
    }
  }

  const resetBoard = () => {
    state.fill(null);
    };
  
  const handleOnClick = (index:number)=>{
    const stateCopy = Array.from(state);//creates a copy of the array state
    if(stateCopy[index]!=null)
      return;
    stateCopy[index] = currentTurn;
    console.log(currentTurn);
    setState(stateCopy);
    const isWin = checkWin();
    if(isWin){
      alert(`${currentTurn} wins the game!!!`);
      resetBoard();
      return;
    }
    setCurrentTurn(currentTurn==='X'? 'O' : 'X');
  }

  return (
    <div className='board'>
      <div className='column'>
        <Block onClick = {() => handleOnClick(0)} value = {state[0]}/>
        <Block onClick = {() => handleOnClick(1)} value = {state[1]}/>
        <Block onClick = {() => handleOnClick(2)} value = {state[2]}/>
      </div>
      <div className='column'>
        <Block onClick = {() => handleOnClick(3)} value = {state[3]}/>
        <Block onClick = {() => handleOnClick(4)} value = {state[4]}/>
        <Block onClick = {() => handleOnClick(5)} value = {state[5]}/>
      </div>
      <div className='column'>
        <Block onClick = {() => handleOnClick(6)} value = {state[6]}/>
        <Block onClick = {() => handleOnClick(7)} value = {state[7]}/>
        <Block onClick = {() => handleOnClick(8)} value = {state[8]}/>
      </div>
    </div>
  );
}

export default App;
 