import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/product';

@Pipe({
  name: 'productFilter',
  standalone: false
})
export class ProductFilterPipe implements PipeTransform {

  transform(products: Product[], titleFilter: string, categoryFilter: string, maxPrice: number): Product[] {
    if (!products) return [];

    return products.filter(product => {
      const titleMatch = !titleFilter || 
        product.title.toLowerCase().includes(titleFilter.toLowerCase());

      const categoryMatch = !categoryFilter || 
        product.category.toLowerCase().replace(/\s+/g, '-') === categoryFilter ||
        product.category.toLowerCase() === categoryFilter;

      const priceMatch = !maxPrice || 
        product.price <= maxPrice;

      return titleMatch && categoryMatch && priceMatch;
    });
  }
}