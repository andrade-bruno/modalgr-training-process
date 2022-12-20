export default interface IUser {
	id: number,
    nome: string,
    email: string,
    senha: string,
    data_registro: Date,
    ativo: boolean,
    createdAt: Date,
    updatedAt: Date,
    nivel_id: number
}