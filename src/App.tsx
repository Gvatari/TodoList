import { useState } from 'react';
import './App.css';
import { TasksType, TodoListsType, Todolist, filteredTasksType } from "./Todolist";
import { v1 } from 'uuid';

const App = () => {

    const removeTask = (todoListId: string, id: string) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].filter(t => t.id !== id)})
    }

    const addTask = (todoListId: string, valueInput: string) => {
        let newTask = { id: v1(), isDone: false, name: valueInput }
        setTasks({...tasks, [todoListId]: [newTask, ...tasks[todoListId]]})
    }

    const todoList1 = v1();
    const todoList2 = v1();

    type Todolists = {
        [key: string]:Array<TasksType>
    }

    const changeTaskStatus = (todoListId: string, id: string, isDone: boolean) => {
        setTasks({...tasks, [todoListId]: tasks[todoListId].map(el => el.id === id ? {...el, isDone} :el)})
    }

    const changeFilterTasks = ((todoListId: string, filteredTasks: filteredTasksType) => {
        setTodoList([...todoLists.map(el => el.id === todoListId ? {...el, filter: filteredTasks} : el)])
    });

    const [tasks, setTasks] = useState<Todolists>({
        [todoList1]: [
        { id: v1(), isDone: true, name: 'HTML&CSS' },
        { id: v1(), isDone: true, name: 'JS' },
        { id: v1(), isDone: true, name: 'React' }
        ],
        [todoList2]: [
        { id: v1(), isDone: true, name: 'HTML&CSS2' },
        { id: v1(), isDone: true, name: 'JS2' },
        { id: v1(), isDone: false, name: 'React2' }
        ],
    })

    let [todoLists, setTodoList] = useState<Array<TodoListsType>>([
        { id: todoList1, title: 'What to learn', filter: 'Active' },
        { id: todoList2, title: 'What to buy', filter: 'Completed' }
    ])

    const removeTodoList = (todoListId: string) => {
        setTodoList([...todoLists].filter(el => el.id !== todoListId))
    }

    return (
        <div className="App">
            {
                todoLists.map(tl => {
                    return <Todolist 
                        key={tl.id}
                        todoListId={tl.id}
                        title={tl.title}
                        changeFilterTasks={changeFilterTasks}
                        removeTask={removeTask}
                        addTask={addTask}
                        tasks={tasks[tl.id]}
                        changeTaskStatus={changeTaskStatus}
                        filteredTasks={tl.filter}
                        removeTodoList={removeTodoList}
                    />
                })
            }
        </div>
    );
}

export default App;
