import { CreateTaskData } from "./CreateTaskData"

export const addTaskRemote = async (task: CreateTaskData) => {
    const res = await fetch(
        'http://localhost:5000/tasks',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(task)
        }
      )
    return await res.json()
}

export const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    return await res.json()
}

export const fetchTask = async (id: string) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    return await res.json()
}

export const updateTaskReminder = async (id: string) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    const res = await fetch(
        `http://localhost:5000/tasks/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updTask)
        }
      )
    return await res.json()
}

export const deleteTaskRemote = async (id: string) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE'})
}
