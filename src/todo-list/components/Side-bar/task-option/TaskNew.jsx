
import React,{useContext} from 'react';
import {taskList} from '../../../../App';
import { TaskItem } from './components/TaskItem';


function TaskNew (props) {  
    const {taskSelect} =useContext(taskList)
    return (
        <>
        {taskSelect.map(item => {
            return <TaskItem onUpdate={props.updateToDoAll} key={item.id} {...item} />
        })}
    </> 
        // </taskList.Provider>
    )
}
export default TaskNew;