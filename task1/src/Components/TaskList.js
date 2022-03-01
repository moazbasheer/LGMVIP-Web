import './TaskList.css';
function TaskList(props) {
    return props.list.map((e) => {
        return (
            <div className="task" key={e.id}>
                <div className="task-content">{e.content}</div>
                <button className="task-complete" onClick={() => {e.completed? props.uncompleteTask(e.id):props.completeTask(e.id)}}>{e.completed? 'Uncomplete': 'Complete'}</button>
                <button className="task-remove" onClick={() => {props.removeTask(e.id)}}>remove</button>
            </div>
        );
    });
}
export default TaskList;