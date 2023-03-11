import React, {useState, useEffect} from "react";
import {HeroPerson} from "../Model/HeroPerson";

interface MyHeroProps
{
    Hero: HeroPerson;
}

export function MyHero(props: MyHeroProps) {
    let [char, updateChar] = useState<HeroPerson>(props.Hero);
    console.log(char);
    console.log(props.Hero);

    /*useEffect(() => {
        console.log(props.Hero + 'React - ПИДОРАС');
    }, [char]);*/

    return (
        <div className="hero">
            <div className="view-char">
                <span title={ props.Hero.perkDescription }>
                <svg  height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M24 4c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm2 30h-4v-12h4v12zm0-16h-4v-4h4v4z"/></svg>
                </span>
                <img src={ props.Hero.image }/>
                <input className="char-id" type="hidden" value={ props.Hero.id }/>
                <label>Имя</label>
                <input className="name-char" type="text" placeholder={ props.Hero.name } />
                <p className="age-char">Возраст: { props.Hero.age }</p>
            </div>
            <div className="hero-perk">

            </div>
            <div className="char-params">
                <div className="characteristics">
                    <div>
                        <p className="healthPoints-lvl">ХП : { props.Hero.healthPoints } / { props.Hero.maxHealthPoints}</p>
                        <p className="dodge-lvl">Уклонение : { props.Hero.dodge }</p>
                        <p className="energy-lvl">Энергия : { props.Hero.energy } / { props.Hero.maxEnergy}</p>
                    </div>
                    <div>
                        <p className="char-lvl power"><span className="characteristic-name">Сила</span> : </p>
                        {/*<input type="number" name="power" placeholder={ props.Hero.power.toString() }/>*/}
                        <div className="power btns">
                            <button onClick={() => updateChar(props.Hero.changeStat(-1, 'power'))} className="minus">-</button>
                            <p className="characteristics-value">{ props.Hero.power }</p>
                            <button onClick={() => updateChar(props.Hero.changeStat(1, 'power'))} className="plus">+</button>
                        </div>
                        <p className="char-lvl agility"><span className="characteristic-name">Ловкость</span> : </p>
                        <div className="agility btns">
                            <button onClick={() => updateChar(props.Hero.changeStat(-1, 'agility'))} className="minus">-</button>
                            <p className="characteristics-value">{ props.Hero.agility }</p>
                            <button onClick={() => updateChar(props.Hero.changeStat(1, 'agility'))} className="plus">+</button>
                        </div>
                        <p className="char-lvl intelligence"><span className="characteristic-name">Интеллект</span> :  </p>
                        <div className="intelligence btns">
                            <button onClick={() => updateChar(props.Hero.changeStat(-1, 'intelligence'))} className="minus">-</button>
                            <p className="characteristics-value">{ props.Hero.intelligence }</p>
                            <button onClick={() => updateChar(props.Hero.changeStat(1, 'intelligence'))} className="plus">+</button>
                        </div>
                        <p className="char-lvl charisma"><span className="characteristic-name">Харизма</span> : </p>
                        <div className="charisma btns">
                            <button onClick={() => updateChar(props.Hero.changeStat(-1, 'charisma'))} className="minus">-</button>
                            <p className="characteristics-value">{ props.Hero.charisma }</p>
                            <button onClick={() => updateChar(props.Hero.changeStat(1, 'charisma'))} className="plus">+</button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button onClick={() => updateChar(props.Hero.takeDamage())}>Take damage</button>
                    {/*setState(prevState => ({ ...prevState, editMode: value }));*/}
                    {/*<button onClick={() => ({ ...char, healthPoints: 2})}>Take damage</button>  ???????????????????????????????*/}
                    {/*<button onClick={() => updateChar(char:{...char, healthPoints: char.takeDamage()})}>Take damage</button>*/}
                    <button onClick={() => updateChar(props.Hero.perkUp())}>Healing</button>
                    <button onClick={() => updateChar(props.Hero.takeDamage(2))}>Take more Damage</button>
                    <button onClick={() => updateChar(props.Hero.killYourSelf())}>Kill yourself</button>
                    <button onClick={() => updateChar(props.Hero.healFull())}>Cure completely</button>
                </div>
            </div>
        </div>
    )
}