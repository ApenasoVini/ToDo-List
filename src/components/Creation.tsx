import { ChangeEvent, FC, useState } from 'react';
import List from './List';
import { Task } from '../interfaces/Interface';
import Alert from './Alert';

const Creation: FC = () => {
    const [task, setTask] = useState<string>('');
    const [todoList, setTodoList] = useState<Task[]>([]);
    const [alertVisible, setAlertVisible] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === 'task') {
            setTask(event.target.value);
        }
    };

    const addTask = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (task.trim() === '') {
            setAlertMessage('A tarefa não pode ter um nome vazio.');
            setAlertVisible(true);
            setTimeout(() => setAlertVisible(false), 10000);
            return;
        }
        const newTask: Task = { id: Date.now(), taskName: task, completed: false };
        setTodoList([...todoList, newTask]);
        setTask('');
    };

    const deleteTask = (taskIdToDelete: number): void => {
        setTodoList(todoList.filter((task) => task.id !== taskIdToDelete));
    };

    const toggleCompleteTask = (taskIdToToggle: number): void => {
        setTodoList(
            todoList.map((task) =>
                task.id === taskIdToToggle ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const closeAlert = () => {
        setAlertVisible(false);
    };

    return (
        <>
            <form onSubmit={addTask} className='Creation'>
                <input
                    value={task}
                    name='task'
                    onChange={handleChange}
                    type='text'
                    placeholder='Escreva sua tarefa...'
                />

                <button type='submit'>
                    <span className='material-symbols-outlined'>add</span>
                </button>
            </form>

            <ul className='List'>
                {todoList.map((task: Task, key: number) => {
                    return (
                        <List
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            toggleCompleteTask={toggleCompleteTask}
                        />
                    );
                })}
            </ul>

            <Alert message={alertMessage} visible={alertVisible} onClose={closeAlert} />
        </>
    );
};

export default Creation;