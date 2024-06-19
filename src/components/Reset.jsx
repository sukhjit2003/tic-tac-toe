import GameState from "./GameState";

function Reset({gamestate, onReset}) {
    if(gamestate === GameState.inProgress ){
        return;
    }
    return ( <button onClick={onReset} className="reset-button">Reset</button> );
}

export default Reset;