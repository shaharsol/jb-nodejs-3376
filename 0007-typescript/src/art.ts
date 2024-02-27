import Employee, { getPersonName } from './vandalay';

const employee: Employee = {
    id: 1,
    name: 'Art Vandalay'
}

console.log(getPersonName(employee));