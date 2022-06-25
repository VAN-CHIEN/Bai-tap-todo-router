import React from "react";
import { Card } from 'antd';
import {  useNavigate } from "react-router";

export function TaskItem(props){
    const navigate =useNavigate()
    const gotoProducDetail = (item) => {
        navigate(`/edittask`)
    }
    return(
        <Card onClick={() => gotoProducDetail()} title={props.Title} bordered={true} style={{ width: 300 }}>
            <p >Creator:&nbsp;{props.Creator}</p>
            <p style={{ color:'blue' }}>Startus:&nbsp;{props.Status==='1'? 'New': props.Status==='2' ? 'Doing' : 'Done'}</p>
            <hr />
            <p>Creator At:&nbsp; {props.CreatedAt}</p>
            <p>Desscription:&nbsp;{props.Description}</p>
        </Card>
    )
}