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

        </li>
    );
}

export default Typing;