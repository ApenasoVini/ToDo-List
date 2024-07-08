import React from 'react';
import List from './components/List';
import Creation from './components/Creation';
import './style.scss';

function App() {
  return (
    <div className='App'>
      <main>
        <Creation />
        <List />
      </main>

      <section>
        <h1>TO DO LIST</h1>
        <div>

        </div>
      </section>
    </div>
  );
}

export default App;
