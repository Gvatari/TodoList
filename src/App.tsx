import { useState } from 'react';
import './App.css';
import { TasksType, Todolist } from "./Todolist";

export type filteredTasksType = 'All' | 'Active' | 'Completed'

const App = () => {

    const [tasks, setTasks] = useState<Array<TasksType>>([
        { id: 1, isDone: true, name: 'HTML&CSS' },
        { id: 2, isDone: true, name: 'JS' },
        { id: 3, isDone: false, name: 'React' }
    ])

    const removeTask = (id: number) => {
        const newTasks: Array<TasksType> = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }

    const [filteredTasks, SetFilteredTasks] = useState<filteredTasksType>('All');

    const filteringTasks: Array<TasksType> = filteredTasks === 'Active' ?
        tasks.filter(t => !t.isDone) :
        filteredTasks === "Completed" ?
            tasks.filter(t => t.isDone) :
            tasks

    const changeFilterTasks = ((filteredTasks: filteredTasksType) => SetFilteredTasks(filteredTasks));

    return (
        <div className="App">
            <Todolist title='What to learn' changeFilterTasks={changeFilterTasks} removeTask={removeTask} tasks={filteringTasks} />
        </div>
    );
}

export default App;
