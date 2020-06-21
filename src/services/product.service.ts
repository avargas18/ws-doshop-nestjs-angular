import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../schemas/category.schema';
import { Model } from 'mongoose';
import * as messages from '../lang/messages.json'
import { ResponseCode } from '../utils/constant';

@Injectable()
export class ProductService {
    
    constructor(@InjectModel(Category.name) private categoryModel: Model<Category>) {}
    
    async get(): Promise<Category[]> {
        const promise = new Promise<Category[]>((resolve, reject) => {
            let params: any = []
            this.categoryModel.find({inactive: false})
                .populate('')
                .exec((err, oCategories) => {
                    if (err) {
                        params[0] = messages.mstrDataError.code
                        params[1] = ResponseCode.error
                        params[2] = `${messages.mstrDataError.message} ${err}`
                        reject(params)
                    } else {
                        params[0] = messages.mstrDataSuccess.code
                        params[1] = ResponseCode.success
                        params[2] = messages.mstrDataSuccess.message
                        params[3] = oCategories
                        resolve(params)
                    }
            })
        })
        return promise
    }

}
