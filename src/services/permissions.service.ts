import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Permissions } from '../schemas/index.schema';
import { Model } from 'mongoose';
import * as messages from '../lang/messages.json'
import { ResponseCode } from '../utils/constant';

@Injectable()
export class PermissionsService {

    constructor(@InjectModel(Permissions.name) private permissionsModel: Model<Permissions>) {}

    async get(): Promise<Permissions[]> {
        const promise = new Promise<Permissions[]>((resolve, reject) => {
            let params: any = []
            this.permissionsModel.find({inactive: false})
                .populate('')
                .exec((err, oPermissions) => {
                    if (err) {
                        params[0] = messages.mstrDataError.code
                        params[1] = ResponseCode.error
                        params[2] = `${messages.mstrDataError.message} ${err}`
                        reject(params)
                    } else {
                        params[0] = messages.mstrDataSuccess.code
                        params[1] = ResponseCode.success
                        params[2] = messages.mstrDataSuccess.message
                        params[3] = oPermissions
                        resolve(params)
                    }
            })
        })
        return promise
    }
}
