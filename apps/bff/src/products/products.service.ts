import { Injectable } from '@nestjs/common';
import { CreateProductRequest, Product } from '@repo/types';

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [];

    create(req: CreateProductRequest) {
        const product: Product = {
          ...req,
          id: Math.random().toString(36).substring(2, 15),
        };
        this.products.push(product);
        return product;
    }

    findAll() {
        return this.products;
    }
}
