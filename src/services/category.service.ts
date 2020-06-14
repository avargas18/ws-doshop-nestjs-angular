import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../schemas/category.schema';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as messages from '../lang/messages.json'
import { ResponseCode } from '../utils/constant';

@Injectable()
export class CategoryService {

    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}

    async add(category: Category): Promise<Category> {
        const promise = new Promise<Category>((resolve, reject) => {
            let params: any = []
            category.create_at = new Date()
            let objCategory = new this.categoryModel(category)
            objCategory.save((err, oCategory) => {
                if (err) {
                    params[0] = messages.mstrSaveError.code
                    params[1] = ResponseCode.error
                    params[2] = `${messages.mstrSaveError.message} ${err}`
                    reject(params)
                } else {
                    params[0] = messages.mstrSaveSuccess.code
                    params[1] = ResponseCode.success
                    params[2] = messages.mstrSaveSuccess.message
                    params[3] = oCategory
                    resolve(params)
                }
            })
        })
        return promise
    }
}
