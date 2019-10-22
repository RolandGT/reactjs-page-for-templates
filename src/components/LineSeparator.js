import React from 'react';

const LineSeparator = props => (
    <hr
        style={{
            color: props.color,
            backgroundColor: props.color,
            height: props.height,
            border: 0
        }}
    />
);
export default LineSeparator;