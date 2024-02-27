import axios from 'axios';

interface Product {
    id: number,
    name: string,
    price: {
        usd: number,
        gbp: number,
        nis: number,
    },
}

(async() => {
    const response = await axios.get<Product[]>('https://jsonplaceholder.typicode.com/users?_limit=2');
    const products: Product[] = response.data;
    console.log(products[0].price.usd);
})();