/*
  Warnings:

  - You are about to drop the `tipo_instituicao_associativa` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo_instituicao` to the `instituicao` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `tipo_instituicao_associativa` DROP FOREIGN KEY `tipo_instituicao_associativa_fk_instituicao_fkey`;

-- DropForeignKey
ALTER TABLE `tipo_instituicao_associativa` DROP FOREIGN KEY `tipo_instituicao_associativa_fk_tipo_instituicao_fkey`;

-- AlterTable
ALTER TABLE `instituicao` ADD COLUMN `tipo_instituicao` INTEGER NOT NULL;

-- DropTable
DROP TABLE `tipo_instituicao_associativa`;

-- AddForeignKey
ALTER TABLE `instituicao` ADD CONSTRAINT `instituicao_tipo_instituicao_fkey` FOREIGN KEY (`tipo_instituicao`) REFERENCES `tipo_instituicao`(`id_tipo_instituicao`) ON DELETE RESTRICT ON UPDATE CASCADE;
