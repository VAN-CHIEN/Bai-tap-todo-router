import { TaskItem } from './components/TaskItem';
import { useContext } from 'react';
import {taskList} from '../../../../App';

function TaskAll (props) {
    const {taskSelect} =useContext(taskList)
    console.log(taskSelect);
    return (
        <>
            {taskSelect.map(item => {
                return <TaskItem onUpdate={props.updateToDoAll} key={item.id} {...item} />
            })}
        </>
    )
}
export default TaskAll;