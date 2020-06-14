import { User, UserSchema } from '../schemas/user.schema';
import { Category, CategorySchema } from '../schemas/category.schema';
import { StoreSchema, Store } from '../schemas/store.schema';
import { ProductSchema, Product } from '../schemas/product.schema';

// Inject class for MongooseModule.forFeature() in app.module.ts
export const SCHEMAS = [
    { name: User.name, schema: UserSchema },
    { name: Category.name, schema: CategorySchema },
    { name: Store.name, schema: StoreSchema },
    { name: Product.name, schema: ProductSchema }
]
