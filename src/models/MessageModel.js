import PropTypes from 'prop-types';

export default class MessageModel {
    constructor(entity) {
        Object.assign(this, {
            id: null,
            from: {name: ''},
            type: null,
            time: '',
            text: ''
        }, entity);
    }
}

