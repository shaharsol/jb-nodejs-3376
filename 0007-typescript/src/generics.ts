function clone<T>(obj: T): T {
    return {...obj}
}
// function clone(obj: any) {
//     return {...obj}
// }

function c<T>(dog: T): T {
    return {...dog} 
}

interface Dog {
    name: string,
    age: number
}
const dog: Dog = {
    name: 'toy',
    age: 3
}



const twin = clone(dog)
