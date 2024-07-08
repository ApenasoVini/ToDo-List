export default function Creation() {

    return (
        <div className='Creation'>
            <input id='task' type="text" placeholder='Escreva sua tarefa...' />
            <button type='button'>
                <span className="material-symbols-outlined">
                    add
                </span>
            </button>
        </div>
    );
};