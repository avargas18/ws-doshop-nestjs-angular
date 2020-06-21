import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../services/product.service';
import { Product } from '../schemas/product.schema';
import { objectResponse } from '../utils/util';

@Controller('product')
export class ProductController {

    constructor(private readonly _productS: ProductService) {}

    @Get()
    async get(): Promise<Product[]> {
        return await this._productS.get().then(resp => objectResponse(resp))
    }

}
