interface Product {
  id: number;
  name: string;
  detail: string;
  price: number;
  quantity: number;
  img: string;
  category_id: number;
}

interface Products {
  products: Product[];
}
