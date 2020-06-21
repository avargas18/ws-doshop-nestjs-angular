import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from '../schemas/index.schema';
import { Model } from 'mongoose';
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

    async get(){
           
        let params: any = []
        try {
            const oUsers = await this.categoryModel.find({inactive: false})
            params[0] = messages.mstrDataSuccess.code
            params[1] = ResponseCode.success
            params[2] = messages.mstrDataSuccess.message
            params[3] = oUsers
            return params
                        
        } catch (error) {
            params[0] = messages.mstrDataError.code
            params[1] = ResponseCode.error
            params[2] = `${messages.mstrDataError.message} ${error}`
            return params
        }
    }

    async getById(id:string){
           
        let params: any = []
        try {
            const oUsers = await this.categoryModel.findById(id)
            params[0] = messages.mstrDataSuccess.code
            params[1] = ResponseCode.success
            params[2] = messages.mstrDataSuccess.message
            params[3] = oUsers
            return params
                        
        } catch (error) {
            params[0] = messages.mstrDataError.code
            params[1] = ResponseCode.error
            params[2] = `${messages.mstrDataError.message} ${error}`
            return params
        }
    }

    async edit(id: string,category: Category) {
            let params: any = []
            category.modified_at = new Date()
            let objCategory = new this.categoryModel(category)
            try {
                const success = await this.categoryModel.updateOne({'_id': id},objCategory)
                params[0] = messages.mstrUpdateSuccess.code
                params[1] = ResponseCode.success
                params[2] = messages.mstrUpdateSuccess.message
                params[3] = success
                return params
            } catch (error) {
                params[0] = messages.mstrSaveError.code
                params[1] = ResponseCode.error
                params[2] = `${messages.mstrSaveError.message} ${error}`
                return params
            }
    }
    async remove(id:string){
        let params: any = []
        try {
            await this.categoryModel.deleteOne({'_id': id})
            params[0] = messages.mstrDeleteSuccess.code,
            params[1] = ResponseCode.success,
            params[2] = messages.mstrDeleteSuccess.message
            return params
        } catch (error) {
            params[0] = messages.mstrDeleteError.code,
            params[1] = ResponseCode.error,
            params[2] = `${messages.mstrDeleteError.message} ${error}`
            return params
        }
    }

}
