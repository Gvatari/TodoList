import { FC, useState } from "react";
import { TasksItems } from "./components/TasksItems";
import { Title } from "./components/Title";
import { AddTask } from "./components/AddTask";
import { TodoListButtonGroup } from "./components/TodoListButtonGroup";
import { Button } from "./components/Button";

export type filteredTasksType = 'All' | 'Active' | 'Completed'

export type TodoListsType = {
    id: string
    title: string
    filter: filteredTasksType
}

export type TasksType = {
    id: string
    isDone: boolean
    name: string
}

type PropsTypeTodolist = {
    todoListId: string
    title: string
    tasks: TasksType[]
    removeTask: (todoListId: string, id: string) => void
    addTask: (todoListId: string, valueInput: string) => void
    changeFilterTasks: (todoListId: string, filteredTasks: filteredTasksType) => void
    changeTaskStatus: (todoListId: string, id: string, isDone: boolean) => void
    filteredTasks: filteredTasksType
    removeTodoList: (todoListId: string) => void
}

export const Todolist: FC<PropsTypeTodolist> = (
    {
        todoListId,
        title,
        tasks,
        removeTask,
        addTask,
        changeFilterTasks,
        changeTaskStatus,
        filteredTasks,
        removeTodoList
     }) => {

    const [hideTodoList, setHideTodoList] = useState<boolean>(false)

    const toggleTodoList = (hideTodoList: boolean) => setHideTodoList(!hideTodoList)

    const onClickHandlerToggleTodoList = () => toggleTodoList(hideTodoList)

    const onClickHandlerRemoveTodoList = () => {        
       removeTodoList(todoListId)
    }

    return (
        <div className='todoList'>
            <Button onClick={onClickHandlerRemoveTodoList} title="x" />
            <Title title={title} />
            <Button onClick={onClickHandlerToggleTodoList} title={`${hideTodoList ? 'Показать' : 'Скрыть'}`} />
            {hideTodoList ? <span>...</span> :
                <>
                    <AddTask todoListId={todoListId} addTask={addTask} />
                    <TasksItems todoListId={todoListId} changeTaskStatus={changeTaskStatus} removeTask={removeTask} filteredTasks={filteredTasks} tasks={tasks} />
                    <TodoListButtonGroup todoListId={todoListId} filteredTasks={filteredTasks} changeFilterTasks={changeFilterTasks} />
                </>
            }
        </div>
    )
}