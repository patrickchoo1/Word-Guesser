import React, {useContext} from 'react';
import App, { AppContext } from '../App';

function Key({ keyValue,  bigKey = {}}) 

{
    const { board, setBoard } = useContext(AppContext)

    const selectLetter = () => {
        const newBoard = [...board]
        newBoard[0][0] = keyValue
        setBoard(newBoard)
    }
    
    return <div className= "key" id = {bigKey && "big"} onClick = {selectLetter} >{keyValue} </div>

}

export default Key