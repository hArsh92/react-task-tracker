import { useState, useEffect } from 'react'
import { TaskData } from './repositories/TaskData'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {
  addTaskRemote,
  fetchTasks,
  deleteTaskRemote,
  updateTaskReminder
} from './repositories/TasksRepo'
import { CreateTaskData } from './repositories/CreateTaskData'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState<Array<TaskData>>([])
  
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const deleteTask = async (id: string) => {
    await deleteTaskRemote(id)
    setTasks(tasks.filter((task: TaskData) => task.id !== id ))
  }

  const toggleReminder = async (id: string) =>  {
    const data = await updateTaskReminder(id)
    setTasks(tasks.map((task: TaskData) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    ))
  }

  const addTask = async (task: CreateTaskData) => {
    const data = await addTaskRemote(task)
    setTasks([ ...tasks, data ])
  }
  
  return (
    <div className='container'>
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        shouldShowAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
          <Tasks 
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        : 'No Tasks to Show'
      }
    </div>
  );
}

export default App;
