import React from "react";
const light ={
    width: '100%',
    height: '80px',
    borderBottom: '1px solid white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
}

export function Iteam(props) {
    return <div style={light}>
        <span>{props.title}</span>
    </div>
}