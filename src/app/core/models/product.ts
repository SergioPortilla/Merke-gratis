import { Provider } from './provider';
import { ProductType } from './productType';

export class Product {
  productCode: string;
  image?: string;
  name: string;
  provider: Provider;
  productType: ProductType;
  description: string;
  amount: number;
  price: number;
}
