import React from 'react';
import PropTypes from 'prop-types';
import MessageModel from "../models/MessageModel";

Message.propTypes = {
    message: PropTypes.instanceOf(MessageModel),
    from: PropTypes.shape({name: PropTypes.string})
};

function Message(props) {
    const {message, from} = props;
    return (
        <li>
            <div className="message-data">
                <span className="message-data-name"><i className={"fa fa-circle online"}/>{message.from.name}</span>
                <span className="message-data-time">{message.time}</span>
            </div>
            <div className="message my-message">
                {message.text}
            </div>
        </li>
    );
}


export default Message;