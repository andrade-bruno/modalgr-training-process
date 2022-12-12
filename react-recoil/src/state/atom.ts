import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'

export const listaDeEventosStates = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: [
		{
			'descricao': 'Estudar React',
			'inicio': new Date('2022-12-15T09:00'),
			'fim': new Date('2022-12-15T13:00'),
			'completo': false,
			'id': 1642342747
		},
		{
			'descricao': 'Estudar Recoil',
			'inicio': new Date('2022-12-16T09:00'),
			'fim': new Date('2022-12-16T11:00'),
			'completo': false,
			'id': 1642342959
		}
	]
})