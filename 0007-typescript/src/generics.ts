const database = {
    products: [
        {
            id: 1,
            name: 'laptop',
            price: 1000
        }
    ],
    employees: [
        {
            id: 2,
            name: 'Maynard',
            salary: '10000'
        }
    ]
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Employee {
    id: number;
    name: string;
    salary: string;
}

function getFromDatabase<T>(id: number): T | undefined {
    const product = database.products.find(product => product.id === id);
    if(product) return product as T;
    const employee = database.employees.find(employee => employee.id === id);
    if(employee) return employee as T;
    return undefined;
}

function getSomething(str: string): number {
    return str as unknown as number;
}

const employee = getFromDatabase<Employee>(2)
console.log(employee);

