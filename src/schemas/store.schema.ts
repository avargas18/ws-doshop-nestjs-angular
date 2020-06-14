import { Document } from 'mongoose';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Address } from '../dtos/address';
import * as mongoose from 'mongoose';

@Schema()
export class Store extends Document {
    
    @Prop({required: true})
    name: string

    @Prop()
    addresses: Array<Address>

    @Prop()
    start: string

    @Prop()
    end: string

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

export const StoreSchema = SchemaFactory.createForClass(Store)
