export const MESSAGES = {
	SUCCESS: {
		CREATED: {
			BUDGET: 'Budget berhasil dibuat',
			BUDGET_DETAIL: 'Budget detail berhasil ditambahkan',
			CATEGORY: 'Kateogri berhasil dibuat',
			SUBCATEGORY: 'Subkategori berhasil dibuat',
		},
		UPDATED: {
			BUDGET_DETAIL: 'Budget detail berhasil diupdate',
		},
		DELETED: {
			BUDGET: 'Budget berhasil dihapus',
			BUDGET_DETAIL: 'Budget detail berhasil dihapus',
		},
		GET: {
			BUDGETS: 'Seluruh data Budget berhasil diambil',
			BUDGET_DETAIL: 'Detail Budget berhasil diambil',
			CATEGORIES: 'Seluruh data Kategori berhasil diambil',
			SUBCATEGORIES: 'Seluruh data Subkategori berhasil diambil',
			DEPARTMENTS: 'Seluruh data Departemen berhasil di ambil',
			USERS: 'Seluruh data User berhasil di ambil',
		},
	},
	ERROR: {
		NOT_FOUND: {
			BUDGET_ID: 'Budget ID tidak ditemukan',
			BUDGET_DETAIL_ID: 'Budget detail ID tidak ditemukan',
			CATEGORY_ID: 'Category ID tidak ditemukan',
			SUBCATEGORY_ID: 'Subcategory ID tidak ditemukan',
			DEPARTMENT_ID: 'Department ID tidak ditemukan',
			USER_ID: 'User ID tidak ditemukan',
		},
		UNAUTHORIZED: 'Unauthorized',
		INVALID_REQUEST: {
			BUDGET_DETAIL_ID: 'Budget detail id tidak valid',
		},
		SERVER_ERROR: 'Internal server error',
		SUBCATEGORY_ID_NOT_IN_CATEGORY_ID:
			'SubCategory ID tidak ada di Category ID',
	},
}
