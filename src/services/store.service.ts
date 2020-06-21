import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Store } from '../schemas/store.schema';
import { Model } from 'mongoose';
import * as messages from '../lang/messages.json'
import { ResponseCode } from '../utils/constant';

@Injectable()
export class StoreService {
    
    constructor(@InjectModel(Store.name) private storeModel: Model<Store>) {}
    
    async get(): Promise<Store[]> {
        const promise = new Promise<Store[]>((resolve, reject) => {
            let params: any = []
            this.storeModel.find({inactive: false})
                .populate('')
                .exec((err, oShops) => {
                    if (err) {
                        params[0] = messages.mstrDataError.code
                        params[1] = ResponseCode.error
                        params[2] = `${messages.mstrDataError.message} ${err}`
                        reject(params)
                    } else {
                        params[0] = messages.mstrDataSuccess.code
                        params[1] = ResponseCode.success
                        params[2] = messages.mstrDataSuccess.message
                        params[3] = oShops
                        resolve(params)
                    }
            })
        })
        return promise
    }

}
