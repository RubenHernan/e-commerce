export let products = [
  {
    id: 1,
    name: 'Hoodies',
    price: 14.00,
    image: './src/img/featured1.png',
    category: 'hoodies',
    quantity: 10
  },
  {
    id: 2,
    name: 'Shirts',
    price: 24.00,
    image: './src/img/featured2.png',
    category: 'shirts',
    quantity: 15
  },
  {
    id: 3,
    name: 'Sweatshirts',
    price: 24.00,
    image: './src/img/featured3.png',
    category: 'sweatshirts',
    quantity: 20
  },
  {
    id: 4,
    name: 'Sweatshirt 2022',
    price: 14.00,
    image: './src/img/home.png',
    category: 'sweatshirts',
    quantity: 10
  }
]

export function setProducts(array) {
  products = array;
}
