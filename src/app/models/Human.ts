import {Race} from './Race';

export class Human extends Race{

    fields;
    name:string;
    gender:string;

    constructor(){
        super();
        this.name = 'Human';
    }

    getChoices(prop){
        switch(prop){
            case 'gender':
                return ['male', 'female'];
        }
    }

    get(prop){
        switch(prop){
            case 'gender':
                return this.gender || 'none';
        }
    }

    set(prop, value){
        switch(prop){
            case 'gender':
                this.gender = value;
                break;
        }
    }

}