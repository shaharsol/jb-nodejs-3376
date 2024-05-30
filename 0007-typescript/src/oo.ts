interface publicActions {
    sum(a: number, b: number): number;
    log(message: string): void;
    returnFunction(): Function;
}

abstract class Implementation implements publicActions {

    public constructor(public someMember: string) { }

    sum(a: number, b: number): number {
        return a + b;
    }
    log(message: string): void {
        console.log(message + this.someMember);
    }
    returnFunction(): Function {
        return () => { }
    }

    abstract implement(param1: string, param2: number): publicActions;
}

class ActualImplementation extends Implementation {
    implement(param1: string, param2: number) {
        return this;
    }
}

const instance = new ActualImplementation('hello world');
export default instance;
