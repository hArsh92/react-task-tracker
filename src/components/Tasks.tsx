import React from 'react'
import { TaskData } from '../repositories/TaskData'
import Task from './Task'

interface TasksProps {
    tasks: Array<TaskData>,
    onDelete: (id: string) => void,
    onToggle: (id: string) => void
}

const Tasks: React.FC<TasksProps> = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))
            }
        </>
    )
}

export default Tasks
