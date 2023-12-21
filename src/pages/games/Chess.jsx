import React, { useState, useEffect } from "react";
import Modal from "../../components/shared/Modal"

const Chess = (props) => {

    return (
        <div className="z-50"> 
            <Modal showModal={props.showModal} setShowModal={props.setShowModal}>
                <div className="p-5 pl-16 rounded-xl">
                    <>
                        <div>
                            <div className='flex-none w-full rounded-xl pb-6'>
                                <h1 className='text-2xl font-montserrat font-semibold text-slate-700 text-center'>
                                    Chess
                                </h1>
                                <div className="flex-none w-full rounded-xl mt-6 border-8 border-slate-500">
                                    {createBoard(8)}
                                </div>
                            </div>
                        </div>
                    </>
                </div>
            </Modal>
        </div>
    )
}

function createBoard(size) {
    let array = []

    for (let i = 0; i < size; i++) {
        array.push(
            <div key={i} id={`row${i}`} className="flex justify-center">
                {createRow(size, i)}
            </div>
        )
    }

    return array
}

function createRow(size, index) {
    let array = []

    for (let i = 0; i < size; i++) {
        let btnIndex = i + (index * 3) + 1
        array.push(
            <button key={btnIndex} id={`btn${btnIndex}`} className="w-12 h-12 border border-slate-500 bg-slate-300 shadow-lg hover:bg-slate-200">
                {""}
            </button>
        )
    }

    return array
}

export default Chess