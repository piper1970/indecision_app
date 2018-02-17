import React from 'react';

const Option = (props) =>
(
    <div className = "option">
        <p className="option__text">{props.count}. {props.title}</p>
        <button
            className="button button--link"
            onClick={(e) => {
                e.preventDefault();
                props.removeOptionHandler(props.title);
            }}>
            Remove
        </button>
    </div>
);

export default Option;