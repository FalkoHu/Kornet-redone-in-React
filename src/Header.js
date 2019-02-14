import React from 'react';

function header() {

    const style = {
        backgroundColor: 'black',
        width: '100%',
        height: '6em',
        color: 'white',
        textAlign: 'center',
        padding: '10px'
    }

    return (
        <div style={style}>
            <h1 style={{padding: '5px'}}>Restaurants</h1>
        </div>
    )
}

export default header;