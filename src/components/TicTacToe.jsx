import{useState} from "react";
import Board from "./Board";

const PLAYER_X ='X';
const PLAYER_O ='O';

function TicTacToe() {
    const[tiles, setTitles] = useState(Array(9).fill(null))
    const[playerTurn, setPlayerTurn] = useState(PLAYER_X);

const handleTileClick = (index)=> {
   const newTiles = [...tiles];
   newTiles[index] = playerTurn;
   setTitles(newTiles);
};



    return(
<div>
    <h1>Tic Tac Toe</h1>
    <Board tiles={tiles} onTileClick={handleTileClick}/>
</div>
    );
}

export default TicTacToe;