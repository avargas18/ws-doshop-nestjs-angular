import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Category, Store, User } from './index.schema';

@Schema()
export class Product extends Document {
    
    @Prop({required: true})
    name: string

    @Prop()
    category: { type: mongoose.Schema.Types.ObjectId, ref: Category }

    @Prop()
    store: { type: mongoose.Schema.Types.ObjectId, ref: Store }

    @Prop({required: true, default: 0})
    stock: number

    @Prop({required: true, default: 0.0})
    price: number
    
    @Prop({required: false})
    pictures: Array<String>
    
    @Prop({required: false})
    description: string

    @Prop({required: false})
    tags: Array<String>

    @Prop()
    create_by: { type: mongoose.Schema.Types.ObjectId, ref: User }

    @Prop()
    create_at: Date;

    @Prop()
    modified_by: { type: mongoose.Schema.Types.ObjectId, ref: User }

    @Prop()
    modified_at: Date;

    @Prop({default: false})
    inactive: boolean
}

export const ProductSchema = SchemaFactory.createForClass(Product)
