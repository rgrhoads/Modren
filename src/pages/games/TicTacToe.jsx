import React, { useState, useEffect, useRef } from "react";

import useWebsocket from 'react-use-websocket'
import throttle from 'lodash.throttle'

import Modal from "../../components/shared/Modal"

const TicTacToe = (props) => {
    const [board, setBoard] = React.useState({1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:"",})

    const WS_URL = 'ws://localhost:3773/ws/game'
    const THROTTLE = 50

    const { sendJsonMessage, lastJsonMessage } = useWebsocket(WS_URL, {
        // queryParams: { username }
    })

    const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE))

    function createBoard() {
        let array = []

        for (let i = 0; i < 3; i++) {
            array.push(
                <div key={i} id={`row${i}`} className="flex justify-center">
                    {createRow(i)}
                </div>
            )
        }

        return array
    }

    function createRow(index) {
        let array = []

        for (let i = 0; i < 3; i++) {
            let btnIndex = i + (index * 3) + 1
            array.push(
                <button 
                key={btnIndex} 
                id={`btn${btnIndex}`} 
                className="w-16 h-16 m-2 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                onClick={() => { submitMove(btnIndex) }}
                >
                    {board[btnIndex]}
                </button>
            )
        }

        return array
    }

    function submitMove(index) {
        console.log(`Button ${index} pressed`)
        sendJsonMessageThrottled.current({
            username: "ryan",
        })
    }

    if(lastJsonMessage) {
        console.log("Message: ", lastJsonMessage)
    }

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
                                <div>
                                    <button
                                    id={"btn2"} 
                                    className="flex justify-center align-middle w-56 h-8 m-2 mt-8 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                    onClick={() => {
                                        console.log("Looking for Opponent...")
                                    }}
                                    >
                                        Find Opponent
                                    </button>
                                </div>
                                <div className="flex-none w-full rounded-xl mt-6">
                                    { createBoard() }
                                </div>
                                <div>
                                    <button
                                    id={"btn2"} 
                                    className="flex justify-center align-middle w-56 h-8 m-2 mt-8 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                    onClick={() => { setBoard({1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:"",}) }}
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

export default TicTacToe