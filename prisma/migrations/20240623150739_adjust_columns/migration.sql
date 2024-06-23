/*
  Warnings:

  - You are about to alter the column `nome_bairro` on the `bairro` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `descricao_categoria_produto` on the `categoria_produto` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `nome_cidade` on the `cidade` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `cep_endereco` on the `endereco` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(8)`.
  - You are about to alter the column `numero_endereco` on the `endereco` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `celular_estabelecimento` on the `estabelecimento` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(11)`.
  - You are about to alter the column `telefone_estabelecimento` on the `estabelecimento` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(10)`.
  - You are about to alter the column `uf_estado` on the `estado` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(2)`.
  - You are about to alter the column `complemento_end_filial` on the `filial` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `nome_filial` on the `filial` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `cpf_fisica` on the `fisica` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(11)`.
  - You are about to alter the column `email_fisica` on the `fisica` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `descricao_funcao` on the `funcao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `sigla_instituicao` on the `instituicao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(10)`.
  - You are about to alter the column `cnpj_juridica` on the `juridica` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(14)`.
  - You are about to alter the column `social_juridica` on the `juridica` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `fantasia_juridica` on the `juridica` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `email_juridica` on the `juridica` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `complemento_end_polo` on the `polo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `nome_polo` on the `polo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `nome_produto` on the `produto` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `descricao_produto_filial` on the `produto_filial` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `descricao_tipo_instituicao` on the `tipo_instituicao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(128)`.
  - You are about to alter the column `descricao_tipo_juridico` on the `tipo_juridico` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(64)`.
  - You are about to alter the column `nome_unidade_medida` on the `unidade_medida` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(16)`.
  - You are about to alter the column `sigla_unidade_medida` on the `unidade_medida` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(4)`.

*/
-- AlterTable
ALTER TABLE `bairro` MODIFY `nome_bairro` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `categoria_produto` MODIFY `descricao_categoria_produto` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `cidade` MODIFY `nome_cidade` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `endereco` MODIFY `cep_endereco` CHAR(8) NOT NULL,
    MODIFY `numero_endereco` VARCHAR(10) NOT NULL;

-- AlterTable
ALTER TABLE `estabelecimento` MODIFY `registro_estabelecimento` DATE NOT NULL,
    MODIFY `celular_estabelecimento` VARCHAR(11) NOT NULL,
    MODIFY `telefone_estabelecimento` CHAR(10) NULL;

-- AlterTable
ALTER TABLE `estado` MODIFY `uf_estado` CHAR(2) NOT NULL;

-- AlterTable
ALTER TABLE `filial` MODIFY `complemento_end_filial` VARCHAR(64) NULL,
    MODIFY `nome_filial` VARCHAR(128) NOT NULL,
    MODIFY `registro_filial` DATE NOT NULL;

-- AlterTable
ALTER TABLE `fisica` MODIFY `cpf_fisica` CHAR(11) NOT NULL,
    MODIFY `nome_fisica` VARCHAR(255) NOT NULL,
    MODIFY `email_fisica` VARCHAR(128) NOT NULL,
    MODIFY `senha_fisica` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `funcao` MODIFY `descricao_funcao` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `instituicao` MODIFY `nome_instituicao` VARCHAR(255) NOT NULL,
    MODIFY `sigla_instituicao` VARCHAR(10) NULL;

-- AlterTable
ALTER TABLE `juridica` MODIFY `cnpj_juridica` CHAR(14) NOT NULL,
    MODIFY `social_juridica` VARCHAR(64) NOT NULL,
    MODIFY `fantasia_juridica` VARCHAR(128) NOT NULL,
    MODIFY `email_juridica` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `logradouro` MODIFY `nome_logradouro` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `polo` MODIFY `complemento_end_polo` VARCHAR(64) NULL,
    MODIFY `nome_polo` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `produto` MODIFY `nome_produto` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `produto_filial` MODIFY `descricao_produto_filial` VARCHAR(128) NOT NULL,
    MODIFY `quantidade_atual_produto_filial` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `quantidade_minima_produto_filial` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `quantidade_seguranca_produto_filial` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `data_vencimento_produto_filial` DATE NOT NULL;

-- AlterTable
ALTER TABLE `tipo_instituicao` MODIFY `descricao_tipo_instituicao` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `tipo_juridico` MODIFY `descricao_tipo_juridico` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `unidade_medida` MODIFY `nome_unidade_medida` VARCHAR(16) NOT NULL,
    MODIFY `sigla_unidade_medida` VARCHAR(4) NOT NULL;
