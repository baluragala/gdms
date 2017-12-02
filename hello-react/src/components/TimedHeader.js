import React from 'react';

const TimedHeader = (props) => (
    <header>
        <h1>{new Date().toTimeString()}</h1>
    </header>
);

export default TimedHeader