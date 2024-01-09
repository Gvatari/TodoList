import { FC } from "react";
import { TasksItems } from "./components/TasksItems";
import { Title } from "./components/Title";
import { AddTask } from "./components/AddTask";
import { TodoListButtonGroup } from "./components/TodoListButtonGroup";
import { filteredTasksType } from "./App";

export type TasksType = {
    id: number
    isDone: boolean
    name: string
}

type PropsTypeTodolist = {
    title: string
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    changeFilterTasks: (filteredTasks: filteredTasksType) => void
}

export const Todolist: FC<PropsTypeTodolist> = ({ title, tasks, removeTask, changeFilterTasks }) => {
    return (
        <div className='todoList'>
            <Title title={title} />
            <AddTask />
            <TasksItems removeTask={removeTask} tasks={tasks} />
            <TodoListButtonGroup changeFilterTasks={changeFilterTasks} />
        </div>
    )
}