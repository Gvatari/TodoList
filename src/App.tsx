import './App.css';
import { TasksType, Todolist } from "./Todolist";

function App() {

    const tasks: Array<TasksType> = [
        { id: 1, isDone: true, name: 'HTML&CSS' },
        { id: 2, isDone: true, name: 'JS' },
        { id: 3, isDone: false, name: 'React' }
    ]

    return (
        <div className="App">
            <Todolist title='What to learn' tasks={tasks} />
            <Todolist title='What to learn' tasks={tasks} />
            <Todolist title='What to learn' tasks={tasks} />
        </div>
    );
}

export default App;
