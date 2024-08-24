import type { BaseDocument } from "./base"

export interface UserBasic extends BaseDocument {
	firstName: string
	secundName?: string | null
	lastName: string
	secundLastName?: string | null
	email: string
	phone: string
	phoneAlternative: string
}
