-- CreateTable
CREATE TABLE `tipo_instituicao_associativa` (
    `fk_instituicao` INTEGER NOT NULL,
    `fk_tipo_instituicao` INTEGER NOT NULL,

    PRIMARY KEY (`fk_instituicao`, `fk_tipo_instituicao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tipo_instituicao_associativa` ADD CONSTRAINT `tipo_instituicao_associativa_fk_instituicao_fkey` FOREIGN KEY (`fk_instituicao`) REFERENCES `instituicao`(`id_instituicao`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tipo_instituicao_associativa` ADD CONSTRAINT `tipo_instituicao_associativa_fk_tipo_instituicao_fkey` FOREIGN KEY (`fk_tipo_instituicao`) REFERENCES `tipo_instituicao`(`id_tipo_instituicao`) ON DELETE RESTRICT ON UPDATE CASCADE;
