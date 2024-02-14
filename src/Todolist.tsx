import { FC, useState } from "react";
import { TasksItems } from "./components/TasksItems";
import { Title } from "./components/Title";
import { AddItem } from "./components/AddItem";
import { TodoListButtonGroup } from "./components/TodoListButtonGroup";
// import { Button } from "./components/Button";
import { Delete } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

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
    changeTodoTitle: (todoListId: string, title: string) => void
    changeTaskName: (todoListId: string, taskId: string, name: string) => void
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
        removeTodoList,
        changeTodoTitle,
        changeTaskName
    }) => {

    const [hideTodoList, setHideTodoList] = useState<boolean>(false)

    const toggleTodoList = (hideTodoList: boolean) => setHideTodoList(!hideTodoList)

    const onClickHandlerToggleTodoList = () => toggleTodoList(hideTodoList)

    const onClickHandlerRemoveTodoList = () => {
        removeTodoList(todoListId)
    }

    const addTaskWrapper = (valueInput: string) => {
        addTask(todoListId, valueInput);
    }

    const changeValueInput = (title: string) => {
        changeTodoTitle(todoListId, title)
    }

    return (
        <div className='todoList'>
            <IconButton onClick={onClickHandlerRemoveTodoList} aria-label="delete">
                <Delete />
            </IconButton>
            <Title title={title} changeValueInput={changeValueInput} />
            <Button style={{marginBottom: '10px'}} onClick={onClickHandlerToggleTodoList} variant="outlined" size="small">{hideTodoList ? 'Показать' : 'Скрыть'}</Button>
            {hideTodoList ? <span></span> :
                <>
                    <AddItem addItem={addTaskWrapper} />
                    <TasksItems todoListId={todoListId} changeTaskName={changeTaskName} changeTaskStatus={changeTaskStatus} removeTask={removeTask} filteredTasks={filteredTasks} tasks={tasks} />
                    <TodoListButtonGroup todoListId={todoListId} filteredTasks={filteredTasks} changeFilterTasks={changeFilterTasks} />
                </>
            }
        </div>
    )
}