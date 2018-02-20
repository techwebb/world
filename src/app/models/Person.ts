import {Calendar} from './Calendar';
import {Location} from './Location';
import {Race} from './Race';
import {Human} from './Human';
import {Elf} from './Elf';

export class Person{
    fields;
    name:string;
    birthdate:Calendar;
    location:Location;
    ageCategory:string;
    race:Race;
    profession:string;
    
    constructor(){
        this.fields = [
            {name:'name', type:'string'},
            {name:'hobby', type:'string'},
            {name:'race', type:'choice'}
        ]
    }

    setLocation(loc:Location){
        this.location = loc;
    };

    getName():string{
        if(this.name) return this.name;
        let desc = '';
        if(this.ageCategory) desc += this.ageCategory + " ";
        if(this.race) desc += this.race.toString() + " ";
        if(this.profession) desc += this.profession + " ";
        if(desc == '') desc = "Unknown ";

        return desc + "NPC"; //'young human baker';
    }

    get(prop){
        switch(prop){
            case 'name':
                return this.getName();
            case 'race':
                return this.race && this.race.toString() || 'none';
            default:
                return this[prop];
        }
    }

    set(prop, value){
        switch(prop){
            case 'race':
                this.setRace(value);
                break;
            default:
                this[prop] = value;
        }
    }

    setRandom(prop){
        switch(prop){
            case 'race':
                let choices = this.getChoices(prop);
                this.setRace( choices[ Math.floor( Math.random()*choices.length ) ] );
                break;
        }
    }

    getChoices(prop){
        switch(prop){
            case 'race':
                return ['Human', 'Elf'];
        }
    }

    setRace(choice){
        console.log(choice);
        switch(choice){
            case 'Human':
                this.race = new Human();
                break;
            case 'Elf':
                this.race = new Elf();
                break;
        }
    }

    compute(s){

        let n = 1;
        let d = 2;

        let precision = s.toString.split('.')[1] || []).length;

        while( Math.abs((n/d)-s) > 0.0000001 ){
            if(n/d > s){
                d++;
            }
            if(n/d < s){
                n++;
            }
            if(n/d == s){
                break;
            }
        }
        
        return `${n}/${d}`;
    }
}