import React, {useState} from 'react';
import { Button } from 'antd';


function CreateTask (props) {
    const title ='Title';
    const Creator ='Creator';
    const Time ='CreatedAt';
    const Description ='Description';
    const [taskSelect, updateTask] =useState({
        [title]: '',
        [Creator]: '',
        [Time]: '',
        [Description]: ''
    })
    const stItem = {
        padding: '0px',
        width: '100%',
        height: '21px',
        marginBottom: '20px'
    }
    const styleone ={
        width: '400px',
        height: '350px'
    }
    const changeTitle =(e)=> {
        updateTask({
            ...taskSelect,
            [title]: e.target.value
        })
    }
    const changeCreator =(e)=>{
        updateTask({
            ...taskSelect,
            [Creator]: e.target.value
        })
    }
    const changeTime =(e)=>{
        updateTask({
            ...taskSelect,
            [Time]: e.target.value
        })
    }
    const changeDescription =(e)=> {
        updateTask({
            ...taskSelect,
            [Description]: e.target.value
        })
    }
    const SubmitValueForm =()=> {
        props.onUpDataSubmit(taskSelect)
        updateTask('')
    }
    return (
        <div style={styleone}>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Title</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}}
                    type="text" placeholder="Tiêu đề"
                    value={taskSelect[title]}
                    onChange={changeTitle}
                />
            </div>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Creator</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}}
                    type="text" placeholder="Người tạo"
                    value={taskSelect[Creator]}
                    onChange={changeCreator}
                />
            </div>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Created at</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}} 
                    type="text" placeholder="Ngày tạo"
                    value={taskSelect[Time]}
                    onChange={changeTime}
                />
            </div>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Description</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}} 
                    type="text" placeholder="Mô tả"
                    value={taskSelect[Description]}
                    onChange={changeDescription}
                />
            </div>
            <br />
            <br />
            <Button style={{marginLeft: '40%'}} type="primary" shape="round" size="large" onClick={SubmitValueForm}>Save</Button>
        </div>
    )
}
export default CreateTask;