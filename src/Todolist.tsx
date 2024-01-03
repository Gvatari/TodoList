import { FC } from "react";
import { TasksItems } from "./components/TasksItems";
import { Title } from "./components/Title";
import { AddTask } from "./components/AddTask";
import { TodoListButtonGroup } from "./components/TodoListButtonGroup";

export type TasksType = {
    id: number
    isDone: boolean
    name: string
}

type PropsTypeTodolist = {
    title: string
    tasks: Array<TasksType>
}

export const Todolist: FC<PropsTypeTodolist> = ({ title, tasks }) => {
    return (
        <div className='todoList'>
            <Title title={title} />
            <AddTask />
            <TasksItems tasks={tasks} />
            <TodoListButtonGroup />
        </div>
    )
}