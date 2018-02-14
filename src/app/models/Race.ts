import { Human } from './Human';

export class Race{
    
    name:string;
    fields;
    
    constructor(){
        this.fields = [
            {name:'gender', type:'choice'},
            {name:'height', type:'distribution', mean:160, sd:30}
        ];
    }

    getName(){
        return 'human';
    }

    toString(){
        return this.name || 'not sure';
    }
}