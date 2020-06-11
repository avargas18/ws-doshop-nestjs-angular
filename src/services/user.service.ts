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
        user.create_by = 'system'
        user.create_at = new Date()
        const createUser = new this.userModel(user)
        return createUser.save()
    }

    async edit(user: User): Promise<User> {
        user.modified_by = 'system'
        user.modified_at = new Date()
        const editUser = new this.userModel(user)
        return editUser.updateOne(user, (err, dato) => {
            return dato
        })
    }

    async get(): Promise<User[]> {
        let promise = new Promise<User[]>((resolve, reject) => {
            let params = []
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
}
