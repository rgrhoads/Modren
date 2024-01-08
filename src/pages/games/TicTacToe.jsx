import React, { useState, useEffect, useRef } from "react";

import useWebsocket from 'react-use-websocket'
import throttle from 'lodash.throttle'

import Modal from "../../components/shared/Modal"

const TicTacToe = (props) => {
    const [gameBoard, setGameBoard] = React.useState(["", "", "", "", "", "", "", "", ""])
    const [gameId, setGameId] = React.useState("")
    const [opponent, setOpponent] = React.useState("")
    const [username, setUsername] = React.useState(props.username)

    const GAME_TYPE = "tictactoe"
    const WS_URL = `ws://localhost:3773/ws/game/${GAME_TYPE}`
    const THROTTLE = 50

    const { sendJsonMessage, lastJsonMessage } = useWebsocket(WS_URL, {
        // queryParams: { username }
    })

    const sendJsonMessageThrottled = useRef(throttle(sendJsonMessage, THROTTLE))

    useEffect(() => {
        if(lastJsonMessage !== null) {
            if(lastJsonMessage.board){
                setGameBoard(lastJsonMessage.board)
            }
            
            if(lastJsonMessage.id){
                setGameId(lastJsonMessage.id)
            }

            if(lastJsonMessage.pX || lastJsonMessage.pO) {
                if(lastJsonMessage.pX == username) {
                    setOpponent(lastJsonMessage.pO)
                } else {
                    setOpponent(lastJsonMessage.pX)
                }

            }
        }

    }, [lastJsonMessage])

    // useEffect(() => {
    //     console.log("Game ID: " + gameId)
    // }, [gameId])

    // useEffect(() => {
    //     console.log("Game Board: " + JSON.stringify(gameBoard))
    // }, [gameBoard])

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
                    {gameBoard[btnIndex]}
                </button>
            )
        }

        return array
    }

    function headerButton() {
        if(gameId == "") {
            return (
                <>
                    <button
                    id={"btn2"} 
                    className="flex justify-center align-middle w-56 h-8 m-2 mt-8 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                    onClick={() => { findOpponent() }}
                    >
                        Find Opponent
                    </button>
                </>
            )
        } else if(opponent == "") {
            return (
                <div className="h-8 mt-6 mb-8">
                    Waiting for Opponent to Connect 
                    <div className="flex items-center justify-center space-x-2 animate-spin">
                        <div className="border-t-transparent border-solid animate-spin rounded-full border-white-400 border-4 h-8 w-8"></div>
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    {`Opponent: ${opponent}`}
                </>
            )
        }
    }

    function findOpponent() {
        console.log("Connecting you with an opponent...")
        sendJsonMessageThrottled.current({
            action: "connect",
            data: "",
            gameId: `${gameId}`,
            username: `${username}`,
        })
    }

    function submitMove(index) {
        console.log(`Button ${index} pressed`)
        sendJsonMessageThrottled.current({
            action: "move",
            data: `${index}`,
            gameId: `${gameId}`,
            username: `${username}`,
        })
    }

    return (
        <div className="z-50"> 
            <Modal showModal={props.showModal} setShowModal={props.setShowModal} setBoard={setGameBoard}>
                <div className="p-5 pl-16 rounded-xl">
                    <div>
                        <div className='flex-none w-full rounded-xl pb-6'>
                            <h1 className='text-2xl font-montserrat font-semibold text-slate-700 text-center'>
                                Tic-Tac-Toe
                            </h1>
                            <div>
                                { headerButton() }
                            </div>
                            <div className="flex-none w-full rounded-xl mt-6">
                                { createBoard() }
                            </div>
                            <div>
                                <button
                                id={"btn2"} 
                                className="flex justify-center align-middle w-56 h-8 m-2 mt-8 border-2 border-slate-500 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-200"
                                onClick={() => { setGameBoard({1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:"",}) }}
                                >
                                    QUIT GAME
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default TicTacToe