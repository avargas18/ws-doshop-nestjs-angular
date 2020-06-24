import { User, Category, Store, Product, Permissions } from '../schemas/index.schema';
import { UserSchema, CategorySchema, StoreSchema, ProductSchema, PermissionsSchema } from '../schemas/export-schemas';

// Inject class for MongooseModule.forFeature() in app.module.ts
export const SCHEMAS = [
    { name: User.name, schema: UserSchema },
    { name: Category.name, schema: CategorySchema },
    { name: Store.name, schema: StoreSchema },
    { name: Product.name, schema: ProductSchema },
    { name: Permissions.name, schema: PermissionsSchema }
]
