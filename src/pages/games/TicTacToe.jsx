import React, { useState, useEffect } from "react";
import Modal from "../../components/shared/Modal"

const TicTacToe = (props) => {
    const [currentPlayer, setCurrentPlayer] = React.useState(true);
    const [board, setBoard] = React.useState({1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:"",})

    return (
        <div className="z-50"> 
            <Modal showModal={props.showModal} setShowModal={props.setShowModal} setBoard={setBoard}>
                <div className="p-5 pl-16 rounded-xl">
                    <>
                        <div>
                            <div className='flex-none w-full rounded-xl pb-6'>
                                <h1 className='text-2xl font-montserrat font-semibold text-slate-700 text-center'>
                                    Tic-Tac-Toe
                                </h1>
                                <div className="flex-none w-full rounded-xl mt-6">
                                    {/* {createBoard(3)} */}
                                    <div id="row1" className="flex justify-center">
                                        <button
                                        id={"btn1"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            if(tempArray[1] == ""){
                                                setBoard({...board, 1: currentPlayer ? "X" : "O"}) 
                                                setCurrentPlayer(!currentPlayer)
                                            }
                                        }}
                                        >
                                            {board[1]}
                                        </button>
                                        <button
                                        id={"btn2"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 2: currentPlayer ? "X" : "O"}) 
                                            setCurrentPlayer(!currentPlayer)
                                        }}
                                        >
                                            {board[2]}
                                        </button>
                                        <button
                                        id={"btn3"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 3:"X"}) 
                                        }}
                                        >
                                            {board[3]}
                                        </button>
                                    </div>
                                    <div id="row2" className="flex justify-center">
                                        <button
                                        id={"btn4"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 4:"X"}) 
                                        }}
                                        >
                                            {board[4]}
                                        </button>
                                        <button
                                        id={"btn5"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 5:"X"}) 
                                        }}
                                        >
                                            {board[5]}
                                        </button>
                                        <button
                                        id={"btn6"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 6:"X"}) 
                                        }}
                                        >
                                            {board[6]}
                                        </button>
                                    </div>
                                    <div id="row3" className="flex justify-center">
                                        <button
                                        id={"btn7"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 7:"X"}) 
                                        }}
                                        >
                                            {board[7]}
                                        </button>
                                        <button
                                        id={"btn8"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 8:"X"}) 
                                        }}
                                        >
                                            {board[8]}
                                        </button>
                                        <button
                                        id={"btn9"} 
                                        className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                        onClick={() => { 
                                            let tempArray = board
                                            setBoard({...board, 9:"X"}) 
                                        }}
                                        >
                                            {board[9]}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <button
                                    id={"btn2"} 
                                    className="flex justify-center align-middle w-56 h-8 m-2 mt-8 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                    >
                                        RESET GAME
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </Modal>
        </div>
    )
}


// function createBoard(size) {
//     let array = []
//     for (let i = 0; i < size; i++) {
//         array.push(
//             <div key={i} id={`row${i}`} className="flex justify-center">
//                 {createRow(size, i)}
//             </div>
//         )
//     }

//     return array
// }

// function createRow(size, index) {
//     let array = []

//     for (let i = 0; i < size; i++) {
//         let btnIndex = i + (index * 3) + 1
//         array.push(
//             <button 
//             key={btnIndex} 
//             id={`btn${btnIndex}`} 
//             className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
//             onClick={() => { }}
//             >
//                 {""}
//             </button>
//         )
//     }

//     return array
// }

export default TicTacToe