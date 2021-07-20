import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { TaskData } from '../repositories/TaskData'

interface TaskProps {
    task: TaskData,
    onDelete: (id: string) => void,
    onToggle: (id: string) => void
}

const Task: React.FC<TaskProps> = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`task ${task.reminder ? 'reminder' : ''}`}
            onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                <FaTimes 
                    style={{ color:'red', cursor:'pointer'}}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
