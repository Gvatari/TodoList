import { FC } from "react";
import { TasksItems } from "./components/TasksItems";
import { Title } from "./components/Title";
import { AddTask } from "./components/AddTask";
import { TodoListButtonGroup } from "./components/TodoListButtonGroup";
import { filteredTasksType } from "./App";

export type TasksType = {
    id: string
    isDone: boolean
    name: string
}

type PropsTypeTodolist = {
    title: string
    tasks: TasksType[]
    removeTask: (id: string) => void
    addTask: (valueInput: string) => void
    changeFilterTasks: (filteredTasks: filteredTasksType) => void
}

export const Todolist: FC<PropsTypeTodolist> = ({ title, tasks, removeTask, addTask, changeFilterTasks }) => {
    return (
        <div className='todoList'>
            <Title title={title} />
            <AddTask addTask={addTask} />
            <TasksItems removeTask={removeTask} tasks={tasks} />
            <TodoListButtonGroup changeFilterTasks={changeFilterTasks} />
        </div>
    )
}