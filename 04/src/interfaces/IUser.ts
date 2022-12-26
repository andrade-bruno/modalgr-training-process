import { Dayjs } from 'dayjs'

export default interface IUser {
	readonly id: number
    nome: string
    email: string
	senha?: string
    data_registro: Date | Dayjs | string | null
    ativo: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
    nivel_id: number
	numeroBike?: number | null
}