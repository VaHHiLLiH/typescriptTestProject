export class HeroPerson
{
    id: number;
    image: string;
    imageDefault: string;
    imageDie: string;
    perkDescription: string;
    name: string;
    age: number;
    power: number;
    agility: number;
    intelligence: number;
    charisma: number;
    healthPoints: number;
    maxHealthPoints: number
    dodge: number;
    energy: number;
    maxEnergy: number;
    status: boolean;

    constructor(id:number, imageDefault: string, imageDie: string, perkDescription: string, name: string, age: number, power: number, agility: number, intelligence: number, charisma: number)
    {
        this.id = id;
        this.image = imageDefault;
        this.imageDefault = imageDefault;
        this.imageDie = imageDie;
        this.perkDescription = perkDescription;
        this.name = name;
        this.age = age;
        this.power = power;
        this.agility = agility;
        this.intelligence = intelligence;
        this.charisma = charisma;
        this.healthPoints = 3 + this.power;
        this.maxHealthPoints = 3 + this.power;
        this.dodge = 10 + this.agility;
        this.energy = this.agility + this.intelligence;
        this.maxEnergy = this.agility + this.intelligence;
        this.status = true;
    }

    takeDamage(damage: number = 1)
    {
        this.healthPoints -= damage;
        if (this.healthPoints <=0) {
            if (this.id == 1) {
                this.healthPoints = 1;
                this.status = false;
            } else {
                this.healthPoints = 0;
                this.status = false;
            }
        }
        this.changeAvatar();
        return new HeroPerson(this.id, this.imageDefault, this.imageDie, this.perkDescription, this.name, this.age, this.power, this.agility, this.intelligence, this.charisma);
        //return this.healthPoints;

        /*let newChar = new HeroPerson(this.id, this.imageDefault, this.imageDie, this.perkDescription, this.name, this.age, this.power, this.agility, this.intelligence, this.charisma);
        let newChar = char;
        newChar.healthPoints = 1000;

        return newChar;*/
    }

    killYourSelf()
    {
        return this.takeDamage(this.maxHealthPoints);
    }

    //restore 1 health point
    perkUp(healing: number = 1)
    {
        this.maxHealthPoints < this.healthPoints + healing ? this.healthPoints = this.maxHealthPoints : this.healthPoints = this.healthPoints + healing;

        if (! this.status && this.healthPoints > 0) {
            this.status = true;
        }
        this.changeAvatar();
        return new HeroPerson(this.id, this.imageDefault, this.imageDie, this.perkDescription, this.name, this.age, this.power, this.agility, this.intelligence, this.charisma);
    }

    healFull()
    {
        return this.perkUp(this.maxHealthPoints);
    }

    changeAvatar()
    {
        this.status ? this.image = this.imageDefault : this.image = this.imageDie;
    }

    renameHero(newName: string)
    {
        this.name = newName;
    }

    changeStat(value: number, name: string): HeroPerson
    {
        switch (name){
            case 'power':
                this.power += value;
                break;
            case 'agility':
                this.agility += value;
                break;
            case 'intelligence':
                this.intelligence += value;
                break;
            case 'charisma':
                this.charisma += value;
                break;
        }
        let newHero = new HeroPerson(this.id, this.imageDefault, this.imageDie, this.perkDescription, this.name, this.age, this.power, this.agility, this.intelligence, this.charisma);
        console.log(newHero + 'Pidor');
        return newHero;
    }
}