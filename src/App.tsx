import React, {useState} from 'react';
import {Hero} from './components/Hero';
import {chars} from './data/Chars';
import {MyHero} from './components/MyHero';

import {HeroConf} from "./data/HeroConf";
import {HeroPerson} from "./Model/HeroPerson";

function App() {
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(true);
    const [myHero, changeHero] = useState<HeroPerson>(new HeroPerson(HeroConf.id, HeroConf.imageDefault, HeroConf.imageDie, HeroConf.perkDescription, HeroConf.name, HeroConf.age, HeroConf.power, HeroConf.agility, HeroConf.intelligence, HeroConf.charisma))

    //let myHero = new HeroPerson(HeroConf.id, HeroConf.imageDefault, HeroConf.imageDie, HeroConf.perkDescription, HeroConf.name, HeroConf.age, HeroConf.power, HeroConf.agility, HeroConf.intelligence, HeroConf.charisma);

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
            <MyHero Hero={myHero} />
        </div>}
    </div>
  );
}

export default App;
