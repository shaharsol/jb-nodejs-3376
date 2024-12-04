function Mamal(target: any): any {
    return class extends target {
        birthdate: Date = new Date()
        giveBirth(): Lion {
            return new Lion()
        }
    }
}

// Property Decorator
function Min(value: number) {
    return function (target: any, propertyKey: string) {
        let _value: number;

        Object.defineProperty(target, propertyKey, {
            get: () => _value,
            set: (newValue: number) => {
                if (newValue < value) {
                    throw new Error(`${propertyKey} cannot be less than ${value}`);
                }
                _value = newValue;
            },
        });
    };
}

// Method Decorator
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey} invoked with arguments:`, args);
        return originalMethod.apply(this, args);
    };
}

class Creature {

}

@Mamal
class Lion extends Creature {
    @Min(20)
    weight: number;

    constructor() {
        super()
        this.weight = 20; // Default value
    }

    @Log
    sayHello() {
        console.log("Saying hello...");
    }
}

// Test the Lion class
const lion = new Lion();
lion.sayHello(); // Logs "sayHello invoked", then "Saying hello..."

try {
    lion.weight = 18; // Throws Error: weight cannot be less than 20
} catch (error) {
    console.error(error.message);
}

try {
    lion.weight = 22;
    console.log(`lion weight is now ${lion.weight}`)
} catch (error) {
    console.error(error.message);
}

(lion as any).birthdate && console.log("Lion's birthdate:", (lion as any).birthdate);

const babyLion = (lion as any).giveBirth();
console.log("Baby lion born:", babyLion);
