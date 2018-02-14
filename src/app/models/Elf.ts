import {Race} from './Race';

export class Elf extends Race{

    fields;
    name:string;
    gender:string;

    constructor(){
        super();
        this.name = "Elf";
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