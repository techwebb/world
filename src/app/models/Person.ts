import {Calendar} from './Calendar';
import {Location} from './Location';

export class Person{
    fields;
    name:string;
    birthdate:Calendar;
    location:Location;
    ageCategory:string;
    race:string;
    profession:string;
    
    constructor(){ 
        this.fields = [
            {name:'name', type:'string'},
            {name:'hobby', type:'string'},
            {name:'race', type:'choice'}
        ]
    }

    setLocation(loc:Location):void{
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

    getRace():string{
        if(this.race) return this.race;
        return "none";
    }

    get(prop){
        switch(prop){
            case 'name':
                return this.getName();
            case 'race':
                return this.getRace();
            default:
                return this[prop];
        }
    }

    set(prop, value){
        console.log("model: ", prop, value);
        if(['name', 'race','hobby'].includes(prop)){
            this[prop] = value;
        }
        console.log(this);
        return this;
    }

    getRaceOptions(){
        return [
            'Human', 'Elf', 'Dorff'
        ]
    }
}