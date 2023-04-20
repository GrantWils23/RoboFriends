import React from "react";

// Prop
// State
// Children

const Scroll = (props) => {
    // console.log(props)
    // return props.children
    // return <h1>hi</h1>
    return (
        <div style={{ overflowY: 'scroll', border: '5px solid black', height: '500px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;