import React, { useState, useEffect } from "react";

const Modal = (props) => {
    const [showModal, setShowModal] = useState(false);

    React.useEffect(() => {
        if(props.showModal) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    }, [props.showModal])

    const closeModal = () => {
        props.setShowModal(false);
    }

    return (
        <> { showModal ? (
            <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-500/25">
                <div className="relative max-w-3/4">
                    <div className="border-2 border-slate-700 rounded-xl shadow-2xl relative flex flex-col w-full bg-slate-100 outline-none focus:outline-none">
                        <div className="flex flex-row justify-between rounded-t">
                            <div className="w-[95%]">
                                {props.children}
                            </div>
                            <div className="flex flex-col justify-start w-15">
                                <button
                                className="bg-transparent border-0 text-black font-bold float-right p-5"
                                onClick={() => {
                                    props.setBoard({1:"", 2:"", 3:"", 4:"", 5:"", 6:"", 7:"", 8:"", 9:"",})
                                    closeModal()
                                }}
                                >
                                    X
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null } </>
    )
}

export  default Modal