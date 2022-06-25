import 'antd/dist/antd.min.css';
import { Row, Col  } from 'antd';
import React from "react";
import { Button } from 'antd';
import { Input } from 'antd';
import { CreateTask } from '../../components/router-Todo/CreateTaskData';
import { Link } from "react-router-dom";


export function Headertd() {
    const list =CreateTask
    const design1 = {
        width: '100%',
        height: '50px',
        backgroundColor: '#675BF1'
    }
    const style2 ={
        marginTop:'5px'
    }
    return <div style={design1}>
        <>
            <Row align="middle" gutter={16}>
                <Col style={style2} push={1} span={7}>
                    <Link to={list.path}><Button ghost >{list.title}</Button></Link>   
                </Col>
                <Col style={style2} push={3} span={12}>
                    <Input ghost />
                </Col>
                <Col style={style2}  push={3} span={5}>
                    <Button ghost>Seach</Button>
                </Col>

            </Row>
        </>
    </div>
}