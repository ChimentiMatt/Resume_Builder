
import { UilMultiply } from '@iconscout/react-unicons'
import { useState, useEffect } from 'react'

const JobTask = ({task, taskId, componentId, setBuildTask, removeTask}) => {
    const [textValue, setTextValue] = useState('')

    useEffect(() => {
        try {
            document.querySelector(`#tasks${componentId}${taskId}`).value = document.querySelector(`#resume-tasks${componentId}${taskId}`).innerHTML
        }
        catch (error){
        }
    })


    return (
        <div key={taskId}>
            <textarea id={`tasks${componentId}${taskId}`} value={textValue}  className="tasks-textarea priority-field" onChange={(event) => setTextValue(event.target.value)} ></textarea>
            {taskId > 0 && <UilMultiply onClick={() => removeTask(task)}  size="15" color="#ff0000" className='icon-btn m-l'/>}
        </div>
    )
}

export default JobTask
