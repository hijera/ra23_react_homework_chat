import React from 'react';
import PropTypes from 'prop-types';
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

MessageHistory.propTypes = {
    
};

function MessageHistory(props) {
    const { list } = props;
    return (
        <ul>
            {list.map(message=>((message.type==='message' && <Message from={message.from} message={message} key={message.id} />) ||
                (message.type==='response' && <Response from={message.from} message={message} key={message.id} />) ||
                (message.type==='typing' && <Typing from={message.from} message={message} key={message.id} />)))}
        </ul>
    );
}

export default MessageHistory;