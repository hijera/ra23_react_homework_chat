import React from 'react';
import PropTypes from 'prop-types';

Typing.propTypes = {
    
};

function Typing(props) {
    const { message,from } = props;
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i> {message.from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="">
                <i className="fa fa-circle typing typing-1"></i>
                <i className="fa fa-circle typing typing-2"></i>
                <i className="fa fa-circle typing typing-3"></i>
            </div>

        </li>
    );
}

export default Typing;