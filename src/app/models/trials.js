// function CurrencyDenominator(){}

// giveProperty(CurrencyDenominator, 'name', 'string');
// giveProperty(CurrencyDenominator, 'value', 'number');

// CurrencyDenominator.prototype.type = 'CurrencyDenominator';

String.prototype.type = 'string';
Number.prototype.type = 'number';

function classMaker(name){
    return new Function(`return function ${name}(){}`)();
}

function giveProperty(obj, prop, propType){
    Object.defineProperty(obj, prop, {
        set(x){
            if(x.type != propType) return false;
            obj['_'+prop] = x;
        },
        get: () => obj['_'+prop]
    });
}


var temp = classMaker('CurrencyDenomination');
giveProperty(temp, 'name', 'string');


var labor = new CurrencyDenominator();
labor.name = 'labor';
labor.value = 5;

var talent = new CurrencyDenominator();
talent.name = 'talent';
talent.value = 40;

var noble = new CurrencyDenominator();
noble.name = 'noble';
noble.value = 300;
