import { User, Category, Store, Product } from '../schemas/index.schema';
import { UserSchema, CategorySchema, StoreSchema, ProductSchema } from '../schemas/export-schemas';

// Inject class for MongooseModule.forFeature() in app.module.ts
export const SCHEMAS = [
    { name: User.name, schema: UserSchema },
    { name: Category.name, schema: CategorySchema },
    { name: Store.name, schema: StoreSchema },
    { name: Product.name, schema: ProductSchema }
]
