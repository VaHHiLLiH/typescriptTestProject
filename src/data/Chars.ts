import {HeroModel} from "../Model/HeroModel";

export const chars: HeroModel[] = [
    {
        id: 1,
        image: './images/Duzzle.png',
        imageDefault: './images/Duzzle.png',
        imageDie: './images/deadDuzzle.png',
        perkDescription: 'При смерти бросает на себя крест, спасающий его жизнь',
        name: 'Duzzle',
        age: 24,
        power: 2,
        agility: 3,
        intelligence: 6,
        charisma: 1,
        healthPoints: 3,
        maxHealthPoints: 3,
        dodge: 1,
        energy: 3,
        maxEnergy: 3,
        status: true,
    },
    {
        id: 2,
        image: './images/Dustin.png',
        imageDefault: './images/Dustin.png',
        imageDie: './images/deadDustin.png',
        perkDescription: 'Профессиональный боец, всегда хочет, чтобы ты ломал его... Ломал его полностью... Он хочет чтобы ты сломал его... Получает на 1 ед. урона больше. Но ты сможешь сломать его??',
        name: 'Дастин Порье',
        age: 34,
        power: 6,
        agility: 4,
        intelligence: 2,
        charisma: 3,
        healthPoints: 4,
        maxHealthPoints: 4,
        dodge: 0,
        energy: 5,
        maxEnergy: 5,
        status: true,
    },
    {
        id: 3,
        image: './images/Van.png',
        imageDefault: './images/Van.png',
        imageDie: './images/deadVan.png',
        perkDescription: 'Простой вьетнамский парень с мечтой, друзьями и видеокамерой...',
        name: 'Van Darkholm',
        age: 50,
        power: 10000,
        agility: 3,
        intelligence: 1,
        charisma: 999,
        healthPoints: 2,
        maxHealthPoints: 2,
        dodge: 0,
        energy: 4,
        maxEnergy: 4,
        status: true,
    },
];