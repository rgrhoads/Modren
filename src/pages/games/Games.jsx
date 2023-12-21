import React, {useState} from "react";
import TicTacToe from "./TicTacToe"
import Chess from "./Chess"

const Games = () => {
    const [showTTTModal, setShowTTTModal] = useState(false);
    const [showChessModal, setShowChessModal] = useState(false);

    return(
        <div>
            <h1 className="text-center p-4"> Games Page </h1>
            <p className="mx-6"> Click on a game to play! </p>

            <div>
                <div className="flex w-full m-6 text-xl text-center font-semibold">
                    <button 
                    className="w-36 mr-6 px-4 py-2 border-2 border-slate-700 rounded-xl bg-slate-300 shadow-lg hover:bg-slate-200 hover:border-slate-600"
                    onClick={() => {setShowTTTModal(true)}}>
                        Tic Tac Toe
                    </button>
                    <button 
                    className="w-36 px-4 py-2 border-2 border-slate-700 rounded-xl bg-slate-300 shadow-lg hover:bg-slate-200 hover:border-slate-600"
                    onClick={() => {setShowChessModal(true)}}>
                        Chess
                    </button>
                </div>
            </div>
            <TicTacToe showModal={showTTTModal} setShowModal={setShowTTTModal}/>
            <Chess showModal={showChessModal} setShowModal={setShowChessModal}/>
        </div>
    )
}

export  default Games