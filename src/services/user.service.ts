import { Injectable } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import * as messages from '../lang/messages.json'
import { ResponseCode } from '../utils/constant';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}
    
    async add(user: User): Promise<User> {
        const promise = new Promise<User>((resolve, reject) => {
            let params: any = []
            user.create_by = 'system'
            user.create_at = new Date()
            let objUser = new this.userModel(user)
            objUser.save((err, oUser) => {
                if (err) {
                    params[0] = messages.mstrSaveError.code
                    params[1] = ResponseCode.error
                    params[2] = `${messages.mstrSaveError.message} ${err}`
                    reject(params)
                } else {
                    params[0] = messages.mstrSaveSuccess.code
                    params[1] = ResponseCode.success
                    params[2] = messages.mstrSaveSuccess.message
                    params[3] = oUser
                    resolve(params)
                }
            })
        })
        return promise
    }

    async edit(user: User): Promise<User> {
        const promise = new Promise<User>((resolve, reject) => {
            let params: any = []
            user.modified_at = new Date()
            let objUser = new this.userModel(user)
            objUser.updateOne(user, (err, success) => {
                if (err) {
                    params[0] = messages.mstrUpdateError.code
                    params[1] = ResponseCode.error
                    params[2] = `${messages.mstrUpdateError.message} ${err}`
                    reject(params)
                } else {
                    params[0] = messages.mstrUpdateSuccess.code
                    params[1] = ResponseCode.success
                    params[2] = messages.mstrUpdateSuccess.message
                    params[3] = success
                    resolve(params)
                }
            })
        })
        return promise
    }

    async get(): Promise<User[]> {
        const promise = new Promise<User[]>((resolve, reject) => {
            let params: any = []
            this.userModel.find({inactive: false})
                .populate('')
                .exec((err, oUsers) => {
                    if (err) {
                        params[0] = messages.mstrDataError.code
                        params[1] = ResponseCode.error
                        params[2] = `${messages.mstrDataError.message} ${err}`
                        reject(params)
                    } else {
                        params[0] = messages.mstrDataSuccess.code
                        params[1] = ResponseCode.success
                        params[2] = messages.mstrDataSuccess.message
                        params[3] = oUsers
                        resolve(params)
                    }
            })
        })
        return promise
    }

    async getById(id:string){
           
        let params: any = []
        try {
            const oUsers = await this.userModel.findById(id)
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
    async remove(id:string){
        let params: any = []
        try {
            await this.userModel.deleteOne({'_id': id})
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
