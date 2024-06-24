/*
  Warnings:

  - You are about to alter the column `complemento_end_filial` on the `filial` table. The data in that column could be lost. The data in that column will be cast from `VarChar(64)` to `VarChar(32)`.
  - You are about to alter the column `descricao_funcao` on the `funcao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(64)` to `VarChar(32)`.
  - You are about to alter the column `nome_instituicao` on the `instituicao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(128)`.
  - You are about to alter the column `complemento_end_polo` on the `polo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(64)` to `VarChar(32)`.
  - You are about to alter the column `nome_polo` on the `polo` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(64)`.
  - You are about to alter the column `descricao_tipo_instituicao` on the `tipo_instituicao` table. The data in that column could be lost. The data in that column will be cast from `VarChar(128)` to `VarChar(32)`.
  - You are about to alter the column `descricao_tipo_juridico` on the `tipo_juridico` table. The data in that column could be lost. The data in that column will be cast from `VarChar(64)` to `VarChar(32)`.

*/
-- AlterTable
ALTER TABLE `filial` MODIFY `complemento_end_filial` VARCHAR(32) NULL;

-- AlterTable
ALTER TABLE `funcao` MODIFY `descricao_funcao` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `instituicao` MODIFY `nome_instituicao` VARCHAR(128) NOT NULL;

-- AlterTable
ALTER TABLE `polo` MODIFY `complemento_end_polo` VARCHAR(32) NULL,
    MODIFY `nome_polo` VARCHAR(64) NOT NULL;

-- AlterTable
ALTER TABLE `produto_filial` MODIFY `descricao_produto_filial` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `tipo_instituicao` MODIFY `descricao_tipo_instituicao` VARCHAR(32) NOT NULL;

-- AlterTable
ALTER TABLE `tipo_juridico` MODIFY `descricao_tipo_juridico` VARCHAR(32) NOT NULL;
