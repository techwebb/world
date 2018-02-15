import {Race} from './Race';

export class Human extends Race{

    fields;
    name:string;
    gender:string;

    constructor(){
        super();
        this.name = 'Human';
    }

    getChoices(prop):any{
        switch(prop){
            case 'gender':
                return ['male', 'female'];
            case 'height':
                return {mean:130, sd:20};
        }
    }

    get(prop){
        switch(prop){
            case 'gender':
                return this.gender || 'none';
            case 'height':
                return this.height || 'none';
        }
    }

    set(prop, value){
        switch(prop){
            case 'gender':
                this.gender = value;
                break;
            case 'height':
                this.height = value;
                break;
        }
    }

    setRandom(prop){
        switch(prop){
            case 'gender':
                let choices = this.getChoices(prop);
                this.gender = choices[ Math.floor( Math.random()*choices.length ) ];
                break;
            case 'height':
                let sum = 0;
                let option = this.getChoices(prop);
                for (let i = 0; i < 6; i++){
                    sum += (Math.random() * 2 * option.sd) - option.sd;
                }
                this.height = Math.floor(sum + option.mean);
                break;
        }
        
    }

}