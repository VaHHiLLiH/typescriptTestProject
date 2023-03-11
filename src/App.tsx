import React, {useState} from 'react';
import {Hero} from './components/Hero';
import {chars} from './data/Chars';

import {myHero} from './components/myHero';
import {char} from './data/yourHero';

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(true);

  return (
    <div className="App">
        <div className="header-buttons">
            <button onClick={() => setPage(true)}>Выбрать нового персонажа</button>
            <button onClick={() => setPage(false)}>Меню вашего персонажа</button>
        </div>
        { page && <div className="create-char">
                <h1>Выберите нового персонажа</h1>

            <div className="flex-container">
                <div className="button prev">
                    <button onClick={() => setCount((count - 1 < 0) ? 2 : count - 1)}>◀</button>
                </div>
                <Hero hero={ chars[count] } />
                <div className="button prev">
                    <button onClick={() => setCount((count + 1 > 2) ? 0 : count + 1)}>▶</button>
                </div>
            </div>
        </div>}
        { ! page && <div className="your-char">
            <h1>Ваш герой!</h1>
            {/*<myHero myHero={char[0]} />*/}
        </div>}
    </div>
  );
}

export default App;
