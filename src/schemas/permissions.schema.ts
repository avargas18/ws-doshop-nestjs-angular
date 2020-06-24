import { Document } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Permissions extends Document {

    @Prop()
    code: string

    @Prop()
    profile: string

    @Prop()
    name: string

    @Prop()
    path: string

    @Prop()
    icon: string

    @Prop()
    level: number

    @Prop()
    children: Array<Object>

    @Prop()
    create_by: string

    @Prop()
    create_at: Date
    
    @Prop()
    inactive: boolean
}

export const PermissionsSchema = SchemaFactory.createForClass(Permissions)
