import React, { MouseEventHandler } from 'react';

import { BsFillSendFill } from "react-icons/bs";

interface ContactProps {
    onClose: MouseEventHandler<HTMLSpanElement>;
};

export default function Contact({ onClose }: ContactProps) {
    return (
        <>
            <div className="modal">
                <div className="modal-content close">
                    <span className="close" onClick={onClose}>&times;</span>
                </div>
                <div className="modal-content">
                    <div className="modal-container">
                        <div className="modal-content">
                            <h2 className="title">Contact</h2>
                        </div>
                        <div className="modal-content form">
                            <form>
                                <div className="form-content">
                                    <label>Name:</label>
                                    <input placeholder="Fill your full name" type="text" />
                                </div>
                                <div className="form-content">
                                    <label>E-mail:</label>
                                    <input placeholder="Fill a valid e-mail" type="email" />
                                </div>
                                <div className="form-content">
                                    <label>Phone:</label>
                                    <input placeholder="Fill your phone" type="phone" />
                                </div>
                                <div className="form-content">
                                    <label>Post:</label>
                                    <textarea placeholder="Hello..."></textarea>
                                </div>
                                <div className="form-content">
                                    <div className="form-btn-container">
                                        <div className="form-btn-content">
                                            <button type="submit"><BsFillSendFill />Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
