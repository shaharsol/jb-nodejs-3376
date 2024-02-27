export default interface Person {
    id: number,
    name: string,
}

export function getPersonName(person: Person): string {
    return person.name;
}