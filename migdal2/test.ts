import { promisify } from 'util'
class MyClass {
    myVar = 'hello'
    myFunction() {
        console.log(this.myVar)
    }
}

function doSomethingAsync () {
    if (cachedValue) {
        return Promise.resolve(cachedValue)
    } else {
        return axios.get('http://yahoo.com')
    }
}
