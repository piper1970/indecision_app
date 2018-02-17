import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => 
    (
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose = {props.clearSelected}
            contentLabel="Selected Option"
            closeTimeoutMS={200}
            className="options-modal"
        >
            <h3 className="options-modal__title">Selected Option</h3>
            {props.selectedOption && <p className="options-modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.clearSelected}>Okay</button>
        </Modal>
    )
;

export default OptionModal;