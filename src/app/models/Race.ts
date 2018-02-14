import { Human } from './Human';

export class Race{
    
    name:string;
    height:number;
    fields;
    
    constructor(){
        this.fields = [
            {name:'gender', type:'choice'},
            {name:'height', type:'distribution'}
        ];
    }

    getName(){
        return 'human';
    }

    toString(){
        return this.name || 'not sure';
    }

    
    
}