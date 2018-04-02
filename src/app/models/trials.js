// function CurrencyDenominator(){}

// giveProperty(CurrencyDenominator, 'name', 'string');
// giveProperty(CurrencyDenominator, 'value', 'number');

// CurrencyDenominator.prototype.type = 'CurrencyDenominator';

String.prototype.type = 'string';
Number.prototype.type = 'number';

function classMaker(name){
    return new Function(`return function ${name}(){this.id = 1;}`)();
}

function giveProperty(obj, prop, propType){
    Object.defineProperty(obj, prop, {
        set(x){
            if(x!= null && x.type != propType) return false;
            return this['_'+prop] = x;
        },
        get(){ return this['_'+prop] },
        enumerable: true,
    });
    obj[prop] = null;
}
function instaniate(obj){
    var newObject = new obj;
    newObject.prototype = obj;
}
function showProps(obj, objName) {
    return Object.getOwnPropertyNames(obj).reduce( (carry,item) => carry + `${objName}.${item} = ${obj[item]}\n`, '' );
}


var CurrencyDenomination = classMaker('CurrencyDenomination');
giveProperty(CurrencyDenomination.prototype, 'name', 'string');
giveProperty(CurrencyDenomination.prototype, 'value', 'number');

var labor = new CurrencyDenomination;
//Object.setPrototypeOf(CurrencyDenomination, cdClass);
//CurrencyDenomination.prototype = cdClass;

// var labor = new CurrencyDenomination;
// labor.name = 'labor';
// labor.value = 5;

// var talent = new CurrencyDenomination;
// talent.name = 'talent';
// talent.value = 40;

// var noble = new CurrencyDenomination;
// noble.name = 'noble';
// noble.value = 300;
