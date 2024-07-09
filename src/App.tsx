import Creation from './components/Creation';
import reactnative from './assets/reactnative.svg';
import sass from './assets/sass.svg';
import typescript from './assets/typescript.svg';
import './style.scss';

function App() {
  return (
    <div className='App'>
      <main>
        <Creation />
      </main>

      <section>
        <h1>to-do list</h1>
        <div>
          <img src={reactnative} alt="react native" />
          <img src={typescript} alt="typescript" />
          <img src={sass} alt="sass" />
        </div>
      </section>
    </div>
  );
}

export default App;
