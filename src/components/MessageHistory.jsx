import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";
import MessageModel from "../models/MessageModel";

MessageHistory.propTypes = {
    list: PropTypes.arrayOf(PropTypes.instanceOf(MessageModel))
};

function MessageHistory(props) {
    const {list} = props;
    return (
        <>
            {list.length > 0 &&
            <ul>
                {list.map(message => ((message.type === 'message' &&
                    <Message from={message.from} message={message} key={message.id}/>) ||
                    (message.type === 'response' &&
                        <Response from={message.from} message={message} key={message.id}/>) ||
                    (message.type === 'typing' && <Typing from={message.from} message={message} key={message.id}/>)))}
            </ul>
            }
        </>
    );
}

MessageHistory.defaultProp = {
    list: []
};

export default MessageHistory;