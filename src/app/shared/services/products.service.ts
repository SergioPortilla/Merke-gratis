import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { apiUrl } from '../../core/constants/apiUrl.constants';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../core/models/product';
import { ProductType } from '../../core/models/productType';
import { Provider } from '../../core/models/provider';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly hostUrl = environment.apiUrl;
  private readonly api = `${this.hostUrl + apiUrl.application}`;
  private readonly product = `${this.api + apiUrl.product}`;
  private readonly productType = `${this.product + apiUrl.productType}`;
  private readonly provider = `${this.product + apiUrl.provider}`;

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get(this.product).pipe(
      map((result: Product[]) => {
        return result;
      })
    );
  }

  public updateProduct(product: Product) {
    return this.http.put(this.product, product);
  }

  public deleteProduct(productCode: string) {
    return this.http.delete(this.product + '/' + productCode);
  }

  public saveProduct(product: Product) {
    return this.http.post(this.product, product);
  }

  public getProductType(): Observable<ProductType[]> {
    return this.http.get(this.productType).pipe(
      map((result: ProductType[]) => {
        return result;
      })
    );
  }

  public saveProductType(productType: ProductType): Observable<ProductType> {
    return this.http.post(this.productType, productType).pipe(
      map((result: ProductType) => {
        return result;
      })
    );
  }

  public getProvider(): Observable<Provider[]> {
    return this.http.get(this.provider).pipe(
      map((result: Provider[]) => {
        return result;
      })
    );
  }

  public saveProvider(provider: Provider) {
    return this.http.post(this.productType, provider);
  }
}
