import { Task } from '../interfaces/Interface';

interface Props {
  task: Task;
  deleteTask(taskIdToDelete: number): void;
  toggleCompleteTask(taskIdToToggle: number): void;
}

const List = ({ task, deleteTask, toggleCompleteTask }: Props) => {
  return (
    <>
      <li>
        <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.taskName}</p>
        <div>
          <button onClick={() => deleteTask(task.id)}>
            <span className="material-symbols-outlined">delete</span>
          </button>
          <button onClick={() => toggleCompleteTask(task.id)}>
            <span className="material-symbols-outlined">
              {task.completed ? 'undo' : 'check'}
            </span>
          </button>
        </div>
      </li>
    </>
  );
};

export default List;