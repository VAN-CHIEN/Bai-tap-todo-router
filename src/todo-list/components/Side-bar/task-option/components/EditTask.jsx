import React from 'react';
import { Button } from 'antd';
import { Radio } from 'antd';

export function EditTask () {
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
    const btnCss ={
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    }
    return (
        <div style={styleone}>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Title</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}}
                    type="text" placeholder="Tiêu đề"
                />
            </div>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Creator</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}}
                    type="text" placeholder="Người tạo"
                />
            </div>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Created at</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}} 
                    type="text" placeholder="Ngày tạo"
                />
            </div>
            <div style={stItem}>
                <label style={{float: 'left'}} for="">Description</label>
                <input  style={{float: 'right', width: '300px', border: 'none', borderBottom: '1px solid black', outline:'none'}} 
                    type="text" placeholder="Mô tả"
                />
            </div>
            <div style={btnCss}>
                <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={'1'}>New</Radio>
                    <Radio value={'2'}>Doing</Radio>
                    <Radio value={'3'}>Done</Radio>
                </Radio.Group>
            </div>
            <br />
            <br />
            <div style={btnCss}>
                <Button style={{marginLeft: '40%'}} type="primary" shape="round" size="large">Save</Button>
                <Button style={{marginLeft: '40%'}} type="primary" shape="round" size="large">Reset</Button>
                <Button style={{marginLeft: '40%'}} type="primary" shape="round" size="large">Delete</Button>
            </div>
                
        </div>
    )
}