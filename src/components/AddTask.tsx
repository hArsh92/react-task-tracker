import React, { useState } from 'react'
import { CreateTaskData } from '../repositories/CreateTaskData'

interface AddTaskProps {
    onAdd: (task: CreateTaskData) => void
}

const AddTask: React.FC<AddTaskProps> = ({ onAdd }: AddTaskProps) => {

    const [text, setTask] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e :React.FormEvent) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }

        let data: CreateTaskData = {
            text, day, reminder
        }

        onAdd(data)
        setTask('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input
                    type='text'
                    placeholder='Add Task' 
                    value={text}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input
                    type='text'
                    placeholder='Add Day & Time' 
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input
                    type='checkbox'
                    value={`${reminder}`}
                    checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                 />
            </div>
            
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
