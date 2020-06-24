import { Controller, Get,} from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { objectResponse } from '../utils/util';
import { PermissionsService } from 'src/services/index.service';

@Controller('permissions')
export class PermissionsController {

    constructor(private readonly _permissionsS: PermissionsService) {}

    @Get()
    async get(): Promise<User[]> {
        return await this._permissionsS.get().then(resp => objectResponse(resp))
    }
    
}
