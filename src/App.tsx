import { useState } from 'react';
import './App.css';
import { TasksType, Todolist } from "./Todolist";
import { v1 } from 'uuid';

export type filteredTasksType = 'All' | 'Active' | 'Completed'

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

    const [filteredTasks, SetFilteredTasks] = useState<filteredTasksType>('All');

    const filteringTasks: TasksType[] = filteredTasks === 'Active' ?
        tasks.filter(t => !t.isDone) :
        filteredTasks === "Completed" ?
            tasks.filter(t => t.isDone) :
            tasks

    const changeFilterTasks = ((filteredTasks: filteredTasksType) => SetFilteredTasks(filteredTasks));

    return (
        <div className="App">
            <Todolist title='What to learn'
                changeFilterTasks={changeFilterTasks}
                removeTask={removeTask}
                tasks={filteringTasks}
            />
        </div>
    );
}

export default App;
