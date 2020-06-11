import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
    @Prop({required: true})
    name: string;

    @Prop({required: true})
    email: string;

    @Prop({required: true})
    password: string;

    @Prop({default: 'USR'})
    role: string;

    @Prop()
    avatar: string;

    @Prop()
    create_by: Object

    @Prop()
    create_at: Date;

    @Prop()
    modified_by: Object

    @Prop()
    modified_at: Date;

    @Prop({default: false})
    inactive: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)
