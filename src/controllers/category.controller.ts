import { Controller, Post, Body } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Category } from '../schemas/category.schema';
import { objectResponse } from '../utils/util';

@Controller('category')
export class CategoryController {

    constructor(private readonly _categoryS: CategoryService) {}

    @Post()
    async add(@Body() category: Category) {
        return await this._categoryS.add(category).then(resp => objectResponse(resp))
    }
}
