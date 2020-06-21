import { Controller, Get } from '@nestjs/common';
import { StoreService } from 'src/services/store.service';
import { Store } from '../schemas/store.schema';
import { objectResponse } from '../utils/util';

@Controller('store')
export class StoreController {

    constructor(private readonly _storeS: StoreService) {}

    @Get()
    async get(): Promise<Store[]> {
        return await this._storeS.get().then(resp => objectResponse(resp))
    }

}
