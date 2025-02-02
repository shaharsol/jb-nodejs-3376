interface Breathing {
    inhale(volume: number): void;
    exhale(): number;
    holdBreathing(): Function;
}

abstract class Animal implements Breathing{

    public constructor(public weight: number, public name: string) {
    }

    inhale(volume: number): void {
        // inhale
    }
    exhale(): number {
        // exhale co2 volume
        return 42
    }
    holdBreathing(): Function {
        return () => {
            // start breathing
        }
    }

    abstract digest(calories: number): void;
}

class Bear extends Animal {
    digest(calories: number): void {
        // digest as bear does
    }
}

const poo = new Bear(30, 'poo');
console.log(poo.weight)