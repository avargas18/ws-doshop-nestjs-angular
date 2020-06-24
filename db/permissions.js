let dd = {}

// permissions
db.permissions.insert({
	code: 'ADM01',
	profile: 'ADM',
	name: 'Gestión de usuarios',
	path: '#',
	icon: 'group',
	level: '1',
	children: [
		{
			code: 'ADM01#01',
			profile: 'ADM',
			name: 'Usuarios',
			path: '/admin/users',
			icon: 'person',
			level: '2',
			children: [],
			create_by: 'system',
			create_at: new Date(),
			inactive: false
		}
	],
	create_by: 'system',
	create_at: new Date(),
	inactive: false
})

db.permissions.insert({
	code: 'ADM02',
	profile: 'ADM',
	name: 'Gestión de ventas',
	path: '#',
	icon: 'local_grocery_store',
	level: '1',
	children: [
		{
			code: 'ADM02#01',
			profile: 'ADM',
			name: 'Categorias',
			path: '/admin/categories',
			icon: 'category',
			level: '2',
			children: [],
			create_by: 'system',
			create_at: new Date(),
			inactive: false
		}
	],
	create_by: 'system',
	create_at: new Date(),
	inactive: false
})

db.permissions.insert({
	code: 'USR01',
	profile: 'USR',
	name: 'Cuenta',
	path: '#',
	icon: 'group',
	level: '1',
	children: [
		{
			code: 'USR01#01',
			profile: 'USR',
			name: 'Perfil',
			path: '/account/me',
			icon: 'person_pin',
			level: '2',
			children: [],
			create_by: 'system',
			create_at: new Date(),
			inactive: false
		}
	],
	create_by: 'system',
	create_at: new Date(),
	inactive: false
})

db.permissions.insert({
	code: 'SELL01',
	profile: 'SELL',
	name: 'Gestión de ventas',
	path: '#',
	icon: 'local_grocery_store',
	level: '1',
	children: [
		{
			code: 'SELL01#01',
			profile: 'SELL',
			name: 'Productos',
			path: '/seller/products',
			icon: 'ballot',
			level: '2',
			children: [],
			create_by: 'system',
			create_at: new Date(),
			inactive: false
        },
        {
			code: 'SELL01#01',
			profile: 'SELL',
			name: 'Tiendas',
			path: '/seller/shops',
			icon: 'store',
			level: '2',
			children: [],
			create_by: 'system',
			create_at: new Date(),
			inactive: false
		}
	],
	create_by: 'system',
	create_at: new Date(),
	inactive: false
})
