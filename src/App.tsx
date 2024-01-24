import { useState } from 'react';
import './App.css';
import { TasksType, Todolist, filteredTasksType } from "./Todolist";
import { v1 } from 'uuid';

const App = () => {

    const [tasks, setTasks] = useState<TasksType[]>([
        { id: v1(), isDone: true, name: 'HTML&CSS' },
        { id: v1(), isDone: true, name: 'JS' },
        { id: v1(), isDone: false, name: 'React' }
    ])

    const removeTask = (id: string) => {
        const newTasks: TasksType[] = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const addTask = (valueInput: string) => {
        let newTask = { id: v1(), isDone: false, name: valueInput }
        setTasks([newTask, ...tasks])
    }

    const [filteredTasks, SetFilteredTasks] = useState<filteredTasksType>('All');

    const filterTasks = (allTasks: TasksType[], filterValue: filteredTasksType) => {
        switch (filterValue) {
            case 'Active':
            return allTasks.filter(t => !t.isDone)

            case 'Completed':
            return allTasks.filter(t => t.isDone)

            default:
            return allTasks
        }
    }

    const filteringTasks: TasksType[] = filterTasks(tasks, filteredTasks)

    const changeFilterTasks = ((filteredTasks: filteredTasksType) => SetFilteredTasks(filteredTasks));

    const changeTaskStatus = (id: string, isDone: boolean) => {
        const task = tasks.find(i => i.id === id);
        if (task) {
            task.isDone = isDone
            setTasks([...tasks]);
        }
    }

    return (
        <div className="App">
            <Todolist title='What to learn'
                changeFilterTasks={changeFilterTasks}
                removeTask={removeTask}
                addTask={addTask}
                tasks={filteringTasks}
                changeTaskStatus={changeTaskStatus}
                filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;
