export default interface Person {
    id: number,
    name: string,
}

export interface Product {
    id: number;
    description: string;
}

export function getPersonName(person: Person): string {
    return person.name;
}