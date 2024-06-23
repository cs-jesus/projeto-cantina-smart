/*
  Warnings:

  - You are about to drop the `telefone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `telefone_fisica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_estabelecimento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tipo_telefone` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fk_logradouro` to the `endereco` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celular_estabelecimento` to the `estabelecimento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `estabelecimento` DROP FOREIGN KEY `estabelecimento_fk_tipo_estabelecimento_fkey`;

-- DropForeignKey
ALTER TABLE `telefone` DROP FOREIGN KEY `telefone_fk_tipo_telefone_fkey`;

-- DropForeignKey
ALTER TABLE `telefone_fisica` DROP FOREIGN KEY `telefone_fisica_fk_fisica_fkey`;

-- DropForeignKey
ALTER TABLE `telefone_fisica` DROP FOREIGN KEY `telefone_fisica_fk_telefone_fkey`;

-- AlterTable
ALTER TABLE `endereco` ADD COLUMN `fk_logradouro` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `estabelecimento` ADD COLUMN `celular_estabelecimento` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone_estabelecimento` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `telefone`;

-- DropTable
DROP TABLE `telefone_fisica`;

-- DropTable
DROP TABLE `tipo_estabelecimento`;

-- DropTable
DROP TABLE `tipo_telefone`;

-- CreateTable
CREATE TABLE `logradouro` (
    `id_logradouro` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_logradouro` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `logradouro_nome_logradouro_key`(`nome_logradouro`),
    PRIMARY KEY (`id_logradouro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_juridico` (
    `id_tipo_juridico` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao_tipo_juridico` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tipo_juridico_descricao_tipo_juridico_key`(`descricao_tipo_juridico`),
    PRIMARY KEY (`id_tipo_juridico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_produto` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `produto_nome_produto_key`(`nome_produto`),
    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria_produto` (
    `id_categoria_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao_categoria_produto` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `categoria_produto_descricao_categoria_produto_key`(`descricao_categoria_produto`),
    PRIMARY KEY (`id_categoria_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unidade_medida` (
    `id_unidade_medida` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_unidade_medida` VARCHAR(191) NOT NULL,
    `sigla_unidade_medida` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `unidade_medida_nome_unidade_medida_key`(`nome_unidade_medida`),
    UNIQUE INDEX `unidade_medida_sigla_unidade_medida_key`(`sigla_unidade_medida`),
    PRIMARY KEY (`id_unidade_medida`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto_filial` (
    `id_produto_filial` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_filial` INTEGER NOT NULL,
    `fk_produto` INTEGER NOT NULL,
    `fk_categoria_produto` INTEGER NOT NULL,
    `fk_unidade_medida` INTEGER NOT NULL,
    `descricao_produto_filial` VARCHAR(191) NOT NULL,
    `perecivel_produto_filial` BOOLEAN NOT NULL,
    `preco_produto_filial` DOUBLE NOT NULL,
    `quantidade_atual_produto_filial` DOUBLE NOT NULL,
    `quantidade_minima_produto_filial` DOUBLE NOT NULL,
    `quantidade_seguranca_produto_filial` DOUBLE NOT NULL,
    `data_vencimento_produto_filial` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id_produto_filial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_fk_logradouro_fkey` FOREIGN KEY (`fk_logradouro`) REFERENCES `logradouro`(`id_logradouro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estabelecimento` ADD CONSTRAINT `estabelecimento_fk_tipo_estabelecimento_fkey` FOREIGN KEY (`fk_tipo_estabelecimento`) REFERENCES `tipo_juridico`(`id_tipo_juridico`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_filial_fkey` FOREIGN KEY (`fk_filial`) REFERENCES `filial`(`id_filial`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_produto_fkey` FOREIGN KEY (`fk_produto`) REFERENCES `produto`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_categoria_produto_fkey` FOREIGN KEY (`fk_categoria_produto`) REFERENCES `categoria_produto`(`id_categoria_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_unidade_medida_fkey` FOREIGN KEY (`fk_unidade_medida`) REFERENCES `unidade_medida`(`id_unidade_medida`) ON DELETE RESTRICT ON UPDATE CASCADE;
