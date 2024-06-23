/*
  Warnings:

  - You are about to drop the `tipo_instituicao_associativa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `tipo_instituicao_associativa` DROP FOREIGN KEY `tipo_instituicao_associativa_fk_instituicao_fkey`;

-- DropForeignKey
ALTER TABLE `tipo_instituicao_associativa` DROP FOREIGN KEY `tipo_instituicao_associativa_fk_tipo_instituicao_fkey`;

-- DropTable
DROP TABLE `tipo_instituicao_associativa`;
