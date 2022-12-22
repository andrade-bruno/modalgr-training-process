import { Dayjs } from 'dayjs'

export default interface ICollaborator {
	id: number,
    nome: string,
    email: string,
    // senha: string, // Security reasons
    data_registro: Dayjs | string | null,
    ativo: boolean,
    createdAt: Date,
    updatedAt: Date,
    nivel_id: number
}