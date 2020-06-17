import React from 'react';

const Scroll = (props) => {
    return(
        <div style={{overflow: 'scroll', border: '1px solid black', height: '900px', margin: '30px 0'}}>
            {props.children}
        </div>
    )
}

export default Scroll;