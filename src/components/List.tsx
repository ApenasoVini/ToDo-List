import { useState } from 'react';

export default function List() {
  const [finished, setFinished] = useState(false);

  const endActivity = (): void => {
    setFinished(!finished);
  };

  return (
    <div className='List'>
      <ul>
        <li>
          <p
            onClick={endActivity}
            style={{ textDecoration: finished ? 'line-through' : 'none' }}
          >
            Aaaa
          </p>
          <button>
            <span className="material-symbols-outlined">
              delete
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
}
