import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
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

    @Get()
    async get() {
        const res = await this._categoryS.get()
        return objectResponse(res)
    }
    @Get(':id')
    async getById(@Param('id') id:string) {
        const res = await this._categoryS.getById(id)
        return objectResponse(res)
    }

    @Put('/:id')
    async edit(@Param('id') id: string, @Body() category: Category) {
        category._id = id
        const res = await this._categoryS.edit(id,category)
        return objectResponse(res)
    }

    @Delete(':id')
    async remove(@Param('id') id:string) {
        const res = await this._categoryS.remove(id)
        return objectResponse(res)
    }
}
