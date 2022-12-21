export default interface ICollaborator {
	id: number,
    nome: string,
    email: string,
    // senha: string, // Security reasons
    data_registro: Date,
    ativo: boolean,
    createdAt: Date,
    updatedAt: Date,
    nivel_id: number
}