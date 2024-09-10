export default interface Person {
    id: number,
    name: string,
}

export function getPersonName(person: Person): string {
    return person.name;
}

class Employee {
    id: number;
    name: string;
    salary: number;
}

class Employer {
    id: number;
    name: string;
    numberOfShares: number;
}