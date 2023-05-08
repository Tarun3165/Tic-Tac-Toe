import React, { useEffect, useState } from "react";
import "./game.css";
function Game() {
    const [array, setArray] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]);

    const player1 = "X";
    const player2 = "O";
  
    const [currentPlayer, setCurrentPlayer] = useState(player1);
    const [winner, setWinner] = useState("");
    
    const handleClass = (e) => {
        
       
    };
   
    const handelClicked = (r, c,e) => {
       
        if (array[r][c] === null) {
             if (currentPlayer === "X") e.target.style.color = "brown";
             else if (currentPlayer === "O") e.target.style.color = "white";
            array[r][c] = currentPlayer;
            setArray([...array]);

            whoIsTheWinner();

            // Change player turn
            if (currentPlayer === player1) setCurrentPlayer(player2);
            else setCurrentPlayer(player1);
        }
    };

    const whoIsTheWinner = () => {
        for (let i = 0; i <= 2; i++) {
            if (
                array[0][i] === array[1][i] &&
                array[1][i] === array[2][i] &&
                array[0][i] !== null
            ) {
                if (array[i][i] === player1) {
                    setWinner("Player 1");
                } else {
                    setWinner("Player 2");
                }
                return;
            }
        }
            
        for (let i = 0; i <= 2; i++) {
                if (
                array[i][0] === array[i][1] &&
                array[i][1] === array[i][2] &&
                array[i][1] !== null
            ) {
                if (array[i][i] === player1) {
                    setWinner("Player 1");
                } else {
                    setWinner("Player 2");
                }
                return;
            }
         }

            if (
                array[0][0] === array[1][1] &&
                array[1][1] === array[2][2] &&
                array[0][0] !== null
            ) {
                if (array[0][0] === player1) {
                    setWinner("Player 1");
                } else {
                    setWinner("Player 2");
                }
                return;
            }

            if (
                array[0][2] === array[1][1] &&
                array[1][1] === array[2][0] &&
                array[0][2] !== null
            ) {
                if (array[0][2] === player1) {
                    setWinner("Player 1");
                } else {
                    setWinner("Player 2");
                }
                return;
            }

            isDraw();
        };

    useEffect(() => {
        setTimeout(() => {
            if (winner === "Draw") {
                alert("The Match is draw");
                setArray([
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                ]);
                setCurrentPlayer(player1);
                setWinner("");
            } else if (winner) {
                alert(`The winner is ${winner}`);
                setArray([
                    [null, null, null],
                    [null, null, null],
                    [null, null, null],
                ]);
                setCurrentPlayer(player1);
                setWinner("");
            }
        }, 100);
    }, [winner]);

    const isDraw = () => {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (array[i][j] === null) return;
            }
        }
        setWinner("Draw");
    };

    return (
        <>
            {/* {
                winner && < div > The Winner is {winner}</div>
            }
            {
                
                draw&&< div > The Game is {winner}</div>
             }    */}
            <h1 style={{ "text-align": "center" }}>Tik Tak Game</h1>
            <div className="container">
                <div className="body">
                    <div
                        onClick={(e) => {
                            
                            handelClicked(0, 0,e);
                        }}
                    >
                        {array[0][0]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(0, 1,e);
                        }}
                    >
                        {array[0][1]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(0, 2,e);
                        }}
                    >
                        {array[0][2]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(1, 0,e);
                        }}
                    >
                        {array[1][0]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(1, 1,e);
                        }}
                    >
                        {array[1][1]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(1, 2,e);
                        }}
                    >
                        {array[1][2]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(2, 0,e);
                        }}
                    >
                        {array[2][0]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(2, 1,e);
                        }}
                    >
                        {array[2][1]}
                    </div>
                    <div
                        onClick={(e) => {
                            
                            handelClicked(2, 2,e);
                        }}
                    >
                        {array[2][2]}
                    </div>
                </div>
            </div>
            <h2 style={{ position: "absolute", left: "2%", top: "20%" }}>
                Player Turn: {currentPlayer}
            </h2>
        </>
    );
}

export default Game;
