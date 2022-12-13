import { atom } from 'recoil'
import { IEvento } from '../interfaces/IEvento'
import { eventosAsync } from '../selectors'
import { IFiltroDeEventos } from './../interfaces/IFiltroEventos'

export const listaDeEventosState = atom<IEvento[]>({
	key: 'listaDeEventosState',
	default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
	key: 'filtroDeEventos',
	default: {}
})