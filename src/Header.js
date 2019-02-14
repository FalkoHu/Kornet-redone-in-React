import React from 'react';

function header() {

    const style = {
        backgroundColor: '#232b2b',
        height: '6em',
        color: 'white',
        textAlign: 'center',
        padding: '10px'
    }

    return (
        <div style={style}>
            <h1 style={{padding: '5px'}}>Restaurants from OpenTable API</h1>
        </div>
    )
}

export default header;