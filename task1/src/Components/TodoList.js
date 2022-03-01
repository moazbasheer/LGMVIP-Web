import { useState } from 'react/cjs/react.development';
import './TodoList.css';
import TaskList from './TaskList';
function TodoList() {
    const [size, setSize] = useState(1);
    const [list, setList] = useState([]);
    const [input, setInput] = useState();
    const addTask = (e) => {
        let element = {
            id: size,
            content: input,
            completed: false
        }
        const newList = [element, ...list];
        setSize(size + 1);
        setList(newList);
    }
    const handleChange = (e) => {
        setInput(e.target.value);
    }
    const completeTask = (id) => {
        console.log(list);
        const newList = list.map((e) => {
            if(e.id == id) {
                e.completed = true;
            }
            return e;
        });
        setList(newList);
    }
    const removeTask = (id) => {
        const newList = list.filter((e) => {
            if(e.id !== id)
                return true;
            return false;
        })
        setList(newList);
    }
    const uncompleteTask = (id) => {
        const newList = list.map((e) => {
            if(e.id == id) {
                e.completed = false;
            }
            return e;
        });
        setList(newList);
    }
    return (
        <div className="body">

            <div className="form">
                <p>Enter task</p>
                <input type="text" onChange={handleChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <div className="title">Your Tasks</div>
            <div className="tasks">
                
                <TaskList list={list} completeTask={completeTask} removeTask={removeTask} uncompleteTask={uncompleteTask}>
                </TaskList>
            </div>
            
        </div>
        
    );
}

export default TodoList;
