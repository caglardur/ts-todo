import { FC, useState } from "react"
import TodoTask from "./component/todoTask"

import { ITask } from "./interfaces"

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodo] = useState<ITask[]>([])

  const addTask = (): void => {
    setTodo([...todo, { task, deadline }])
    setTask("")
    setDeadline(0)
  }

  const deleteTask = (taskToDelete: string): void => {
    setTodo(
      todo.filter(task => {
        return task.task !== taskToDelete
      })
    )
  }
  return (
    <div>
      <div>
        <input type="text" value={task} placeholder="Task..." onChange={e => setTask(e.target.value)} />
        <input type="number" value={deadline} placeholder="Deadline (in days)..." onChange={e => setDeadline(Number(e.target.value))} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todo.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />
        })}
      </div>
    </div>
  )
}

export default App
