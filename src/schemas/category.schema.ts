import { Document, Mongoose } from 'mongoose'
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Category extends Document {
    
    @Prop({required: true})
    name: string

    @Prop()
    create_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

    @Prop()
    create_at: Date;

    @Prop()
    modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }

    @Prop()
    modified_at: Date;

    @Prop({default: false})
    inactive: boolean
}

export const CategorySchema = SchemaFactory.createForClass(Category)
