import { Controller, Post, Body, Get, Put, Param } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../schemas/user.schema';
import { objectResponse } from '../utils/util';

@Controller('users')
export class UserController {

    constructor(private readonly _userS: UserService) {}

    @Post()
    async add(@Body() user: User) {
        return await this._userS.add(user)
    }

    @Put('/:id')
    async edit(@Param('id') id: string, @Body() user: User) {
        user._id = id
        return await this._userS.edit(user)
    }

    @Get()
    async get(): Promise<User[]> {
        return await this._userS.get().then(resp => objectResponse(resp))
    }

}
