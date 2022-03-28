import React, { useState } from "react";

const Tabs = (props) => {
    const [tabber, setTabe] = useState(['Tab1', 'Tab2','Tab3'])
    const [description, setdescription] = useState('')
    const [description2, setdescription2] = useState('')
    const [description3, setdescription3] = useState('')
    let style = {
        border: 'solid black 2px',
        color:'black',
        width: '100px',
        margin: 'auto',
        backgroundColor: ''
    }

    const colored = (obj) => {
        obj.backgroundColor = 'black';
        obj.color = 'white';
    }


    const sayhello = () => {
        alert('HELLO!')
        setdescription(`this is`)
    }



    const container = {
        display: 'flex',
        flexDirection: 'row',
        width: '500px',
        margin: 'auto'
    }
    return (
        <div style={container}>
            {tabber.map((arr)=>{
                return <div style={style} onClick={sayhello}>{arr}</div>
            })}
        </div>
    )
}
export default Tabs