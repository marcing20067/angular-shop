import { Product } from 'src/app/shared/products/product.model';

export const PRODUCTS: Product[] = [
  {
    _id: '1',
    name: 'Pralka',
    price: 200.0,
    imageUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    maxQuantity: 210,
    featured: false,
    category: 'Technologia'
  },
  {
    _id: '2',
    name: 'Suszarka do włosów',
    price: 20.0,
    imageUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    maxQuantity: 70,
    featured: true,
    category: 'Technologia'
  },
  {
    _id: '3',
    name: 'Telefon',
    price: 950.0,
    imageUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    maxQuantity: 250,
    featured: true,
    category: 'Technologia'
  },
  {
    _id: '2',
    name: 'Szczoteczka do zębów',
    price: 20.0,
    imageUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    maxQuantity: 80,
    featured: false,
    category: 'Technologia'
  },
  {
    _id: '1',
    name: 'Pluszowy miś',
    price: 60.0,
    imageUrl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    maxQuantity: 2500,
    featured: false,
    category: 'Technologia'
  },
];
