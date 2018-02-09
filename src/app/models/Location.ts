export class Location{
    name:string;

    constructor(name:string){ 
        this.name = name;
    }

    raceDistribution(){
        let options = [
            {'name':'human', 'count': 1},
            {'name':'avian', 'count': 1},
        ];
        return options;
    }
}