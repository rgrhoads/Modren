import React, { useState, useRef } from "react";

import useWebsocket from 'react-use-websocket'
import throttle from 'lodash.throttle'

import TicTacToe from "./TicTacToe"
import Chess from "./Chess"

const Games = () => {
    const [showTTTModal, setShowTTTModal] = useState(false);
    const [showChessModal, setShowChessModal] = useState(false);

    const WS_URL = 'ws://localhost:3773/ws/message'
    const THROTTLE = 50

    const { sendJsonMessage, lastJsonMessage } = useWebsocket(WS_URL, {
        // queryParams: { username }
    })

    const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE))

    const logReuest = req => {
        Object.keys(req).map(() => {
            console.log("From: ", req.from)
            console.log("To: ", req.to)
            console.log("Message: ", req.message)
        })
    }

    function testWebSocket() {
        console.log("Testing websocket!")
        sendJsonMessageThrottled.current({
            from: "Ryan",
            to: "Ryan",
            message: "Hello"
        })
    }

    if(lastJsonMessage) {
        logReuest(lastJsonMessage)
    }

    return(
        <div>
            <h1 className="text-center p-4"> Games Page </h1>
            <p className="mx-6"> Click on a game to play! </p>

            <div>
                <div className="flex w-full m-6 text-xl text-center font-semibold">
                    <button 
                    className="w-36 mr-6 px-4 py-2 border-2 border-slate-700 rounded-xl bg-slate-300 shadow-lg hover:bg-slate-200 hover:border-slate-600"
                    onClick={() => {testWebSocket()}}>
                        Test Web Socket
                    </button>
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