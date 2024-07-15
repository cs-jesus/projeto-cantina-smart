import { Inject, Injectable } from "@nestjs/common";

import { TipoInstituicaoRepository } from "../repositories/tipo-instituicao.repository";
import { TipoInstituicao } from "../entities/tipo-instituicao.entity";

@Injectable()
export class TipoInstituicaoService {
	constructor(
		@Inject('TipoInstituicaoRepository')
		private readonly tipoInstituicaoRepository: TipoInstituicaoRepository
	) { }

	async createTipoInstituicao(descricao: string): Promise<TipoInstituicao> {
		const descricaoIsUnique = await this.tipoInstituicaoRepository.isDescricaoUnique(descricao);
		if (!descricaoIsUnique) {
			throw new Error(`A descrição "${descricao}" já está cadastrada.`);
		}

		const tipoInstituicao = new TipoInstituicao(descricao);
		return this.tipoInstituicaoRepository.create(tipoInstituicao);
	}

	async updateTipoInstituicao(id: number, descricao: string): Promise<TipoInstituicao> {
		const descricaoIsUnique = await this.tipoInstituicaoRepository.isDescricaoUnique(descricao);
		if(!descricaoIsUnique) {
			throw new Error(`A descrição "${descricao}" já está sendo utilizada por outro Tipo de Instituição.`);
		}

		const tipoInstituicao = new TipoInstituicao(descricao);
		return this.tipoInstituicaoRepository.update(+id, tipoInstituicao);
	}

	async deleteTipoInstituicao(id: number): Promise<void> {
		return this.tipoInstituicaoRepository.delete(+id);
	}

	async findAllTipoInstituicoes(): Promise<TipoInstituicao[]> {
		return this.tipoInstituicaoRepository.findAll();
	}

	async findTipoInstituicaoById(id: number): Promise<TipoInstituicao | null> {
		return this.tipoInstituicaoRepository.findById(+id);
	}

	async findTipoInstituicaoByDescricao(descricao: string): Promise<TipoInstituicao | null> {
		return this.tipoInstituicaoRepository.findByDescricao(descricao);
	}
}
