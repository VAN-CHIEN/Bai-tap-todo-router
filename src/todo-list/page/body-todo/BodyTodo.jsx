import React, { useContext} from "react";
import { Pagination } from 'antd';
import { Route, Routes, useParams } from "react-router";
import TaskAll from  '../../components/Side-bar/task-option/TaskAll';
import TaskNew from '../../components/Side-bar/task-option/TaskNew';
import CreateTask from '../../page/header-todo/CreadTask';
import { v4 } from 'uuid';
import {taskList} from '../../../App';
import {EditTask} from '../../components/Side-bar/task-option/components/EditTask';



export function BodyTodo (){
    const {taskSelect, updateTask} =useContext(taskList);
    
    function ItemEdit () {
        const params =useParams();
        return (
            <div>
                <EditTask />
            </div>
        )
    }
    function AllTask () {
        const newUpdateAll =()=> {
            localStorage.setItem('TODO-ADD',JSON.stringify(taskSelect))
        }
        return (
                <TaskAll updateToDoAll={newUpdateAll} />
        )
    }
    function Newtask () {
        return (<TaskNew />)
    }
    function DoingTask () {
        return (<h1>Doing Task</h1>)
    }
    function DoneTask () {
        return (<h1>Done Task</h1>)
    }
    function Create () {
        
        const handleInputData= (title,Creator,Time,Description) => {
            if (title==='' && Creator===''&& Time==='' && Description==='') return;
            const newListData =[
                {
                    id: v4(),
                    ...title,
                    ...Creator,
                    ...Time,
                    ...Description,
                    Status: '1'
                },
                ...taskSelect
            ]
            updateTask([...newListData])
            localStorage.setItem('TODO-ADD',JSON.stringify(newListData))
        }
        return (
            <CreateTask onUpDataSubmit={handleInputData} />
        )
    }
    const styleBody = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '80%',
        height: '10%',
        float: 'right'
    }
    const tip2 ={
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '80%',
        height: '90%',
        float: 'right'
    }
    return(
        
            <><div style={tip2}>
                <Routes>
                    <Route path="/createtask" element={<Create />} />
                    <Route path="/" element={<AllTask />} />
                    <Route path="/edittask" element={<ItemEdit />} />
                    <Route path="/newtask" element={<Newtask />} />
                    <Route path="/doingtask" element={<DoingTask />} />
                    <Route path="/donetask" element={<DoneTask />} />
                </Routes>
                </div>
                <div style={styleBody}>
                    <Pagination defaultCurrent={4} total={40} />;
            </div>
            </>

        
    )
}