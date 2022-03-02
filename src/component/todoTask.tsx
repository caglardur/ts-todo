import React from "react"
import { ITask } from "../interfaces"

interface Props {
  task: ITask
  deleteTask(taskToDelete: string): void
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div>
      <div>
        {task.task} ({task.deadline})<button onClick={() => deleteTask(task.task)}>delete</button>
      </div>
    </div>
  )
}

export default TodoTask
