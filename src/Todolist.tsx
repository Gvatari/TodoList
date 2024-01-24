import { FC, useState } from "react";
import { TasksItems } from "./components/TasksItems";
import { Title } from "./components/Title";
import { AddTask } from "./components/AddTask";
import { TodoListButtonGroup } from "./components/TodoListButtonGroup";
import { Button } from "./components/Button";

export type filteredTasksType = 'All' | 'Active' | 'Completed'

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
    changeTaskStatus: (id: string, isDone: boolean) => void
    filteredTasks: string
}

export const Todolist: FC<PropsTypeTodolist> = ({ title, tasks, removeTask, addTask, changeFilterTasks, changeTaskStatus, filteredTasks }) => {

    const [hideTodoList, setHideTodoList] = useState<boolean>(false)

    const toggleTodoList = (hideTodoList: boolean) => {
        setHideTodoList(!hideTodoList)
    }

    const onClickHandlerToggleTodoList = () => toggleTodoList(hideTodoList)
    
    return (
        <div className='todoList'>
            <Title title={title} />
            <Button onClick={onClickHandlerToggleTodoList} title={`${hideTodoList ? 'Показать' : 'Скрыть'}`} />
            {hideTodoList ? <span>...</span> :
                <>
                    <AddTask addTask={addTask} />
                    <TasksItems changeTaskStatus={changeTaskStatus} removeTask={removeTask} tasks={tasks} />
                    <TodoListButtonGroup filteredTasks={filteredTasks} changeFilterTasks={changeFilterTasks} />
                </>
            }
        </div>
    )
}