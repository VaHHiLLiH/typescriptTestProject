import React from "react";
import {HeroModel} from "../Model/HeroModel";

interface HeroProps
{
    hero: HeroModel;
};

export function Hero(props: HeroProps) {
    return (
        <div className="hero">
            <div className="view-char">
                <span title={ props.hero.perkDescription }>
                <svg  height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h48v48h-48z" fill="none"/><path d="M24 4c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm2 30h-4v-12h4v12zm0-16h-4v-4h4v4z"/></svg>
                </span>
                <img src={ props.hero.image }/>
                <input className="char-id" type="hidden" value={ props.hero.id }/>
                <p className="name-char">Имя: { props.hero.name }</p>
                <p className="age-char">Возраст: { props.hero.age }</p>
            </div>
            <div className="char-params">
                <div className="characteristics">
                    <div>
                        <p className="healthPoints-lvl">ХП : { props.hero.healthPoints } / {props.hero.maxHealthPoints}</p>
                        <p className="dodge-lvl">Уклонение : { props.hero.dodge }</p>
                        <p className="energy-lvl">Энергия : { props.hero.energy } / {props.hero.maxEnergy}</p>
                    </div>
                    <div className="stats">
                        <p className="char-lvl power"><span className="characteristic-name">Сила</span> : { props.hero.power.toString() }</p>
                        <p className="char-lvl agility"><span className="characteristic-name">Ловкость</span> : { props.hero.agility.toString() }</p>
                        <p className="char-lvl intelligence"><span className="characteristic-name">Интеллект</span> :  { props.hero.intelligence.toString() }</p>
                        <p className="char-lvl charisma"><span className="characteristic-name">Харизма</span> : { props.hero.charisma.toString() }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}