import Employee, { getPersonName, Product as Yosi } from './vandalay';

const employee: Employee = {
    id: 1,
    name: 'Art Vandalay'
}

console.log(getPersonName(employee));