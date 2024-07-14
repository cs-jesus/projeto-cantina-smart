-- CreateTable
CREATE TABLE `tipo_instituicao` (
    `id_tipo_instituicao` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao_tipo_instituicao` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `tipo_instituicao_descricao_tipo_instituicao_key`(`descricao_tipo_instituicao`),
    PRIMARY KEY (`id_tipo_instituicao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `instituicao` (
    `id_instituicao` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_instituicao` INTEGER NOT NULL,
    `nome_instituicao` VARCHAR(128) NOT NULL,
    `sigla_instituicao` VARCHAR(10) NULL,

    UNIQUE INDEX `instituicao_nome_instituicao_key`(`nome_instituicao`),
    PRIMARY KEY (`id_instituicao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `logradouro` (
    `id_logradouro` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_logradouro` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `logradouro_nome_logradouro_key`(`nome_logradouro`),
    PRIMARY KEY (`id_logradouro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `bairro` (
    `id_bairro` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_bairro` VARCHAR(128) NOT NULL,

    UNIQUE INDEX `bairro_nome_bairro_key`(`nome_bairro`),
    PRIMARY KEY (`id_bairro`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cidade` (
    `id_cidade` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_cidade` VARCHAR(64) NOT NULL,

    UNIQUE INDEX `cidade_nome_cidade_key`(`nome_cidade`),
    PRIMARY KEY (`id_cidade`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estado` (
    `id_estado` INTEGER NOT NULL AUTO_INCREMENT,
    `uf_estado` CHAR(2) NOT NULL,

    UNIQUE INDEX `estado_uf_estado_key`(`uf_estado`),
    PRIMARY KEY (`id_estado`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `endereco` (
    `id_endereco` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_logradouro` INTEGER NOT NULL,
    `fk_bairro` INTEGER NOT NULL,
    `fk_cidade` INTEGER NOT NULL,
    `fk_estado` INTEGER NOT NULL,
    `cep_endereco` CHAR(8) NOT NULL,
    `numero_endereco` VARCHAR(10) NOT NULL,

    UNIQUE INDEX `endereco_cep_endereco_numero_endereco_key`(`cep_endereco`, `numero_endereco`),
    PRIMARY KEY (`id_endereco`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `polo` (
    `id_polo` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_instituicao` INTEGER NOT NULL,
    `fk_endereco` INTEGER NOT NULL,
    `complemento_end_polo` VARCHAR(32) NULL,
    `nome_polo` VARCHAR(64) NOT NULL,

    PRIMARY KEY (`id_polo`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipo_juridico` (
    `id_tipo_juridico` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao_tipo_juridico` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `tipo_juridico_descricao_tipo_juridico_key`(`descricao_tipo_juridico`),
    PRIMARY KEY (`id_tipo_juridico`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `juridica` (
    `id_juridica` INTEGER NOT NULL AUTO_INCREMENT,
    `cnpj_juridica` CHAR(14) NOT NULL,
    `social_juridica` VARCHAR(64) NOT NULL,
    `fantasia_juridica` VARCHAR(128) NOT NULL,
    `email_juridica` VARCHAR(128) NOT NULL,

    UNIQUE INDEX `juridica_cnpj_juridica_key`(`cnpj_juridica`),
    PRIMARY KEY (`id_juridica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fisica` (
    `id_fisica` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf_fisica` CHAR(11) NOT NULL,
    `nome_fisica` VARCHAR(255) NOT NULL,
    `email_fisica` VARCHAR(128) NOT NULL,
    `senha_fisica` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `fisica_cpf_fisica_key`(`cpf_fisica`),
    PRIMARY KEY (`id_fisica`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `estabelecimento` (
    `id_estabelecimento` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_fisica` INTEGER NULL,
    `fk_juridica` INTEGER NULL,
    `fk_tipo_estabelecimento` INTEGER NOT NULL,
    `registro_estabelecimento` DATE NOT NULL,
    `telefone_estabelecimento` CHAR(10) NULL,
    `celular_estabelecimento` VARCHAR(11) NOT NULL,
    `limite_estabelecimento` INTEGER NOT NULL DEFAULT 3,

    PRIMARY KEY (`id_estabelecimento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `filial` (
    `id_filial` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_estabelecimento` INTEGER NOT NULL,
    `fk_polo` INTEGER NOT NULL,
    `fk_endereco` INTEGER NULL,
    `complemento_end_filial` VARCHAR(32) NULL,
    `nome_filial` VARCHAR(128) NOT NULL,
    `registro_filial` DATE NOT NULL,

    PRIMARY KEY (`id_filial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcao` (
    `id_funcao` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao_funcao` VARCHAR(32) NOT NULL,

    UNIQUE INDEX `funcao_descricao_funcao_key`(`descricao_funcao`),
    PRIMARY KEY (`id_funcao`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `colaborador` (
    `id_colaborador` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_fisica` INTEGER NOT NULL,
    `fk_funcao` INTEGER NOT NULL,

    PRIMARY KEY (`id_colaborador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `proprietario_estabelecimento` (
    `fk_colaborador` INTEGER NOT NULL,
    `fk_estabelecimento` INTEGER NOT NULL,

    PRIMARY KEY (`fk_colaborador`, `fk_estabelecimento`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funcionario_filial` (
    `fk_colaborador` INTEGER NOT NULL,
    `fk_filial` INTEGER NOT NULL,

    PRIMARY KEY (`fk_colaborador`, `fk_filial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produto` (
    `id_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_produto` VARCHAR(128) NOT NULL,

    UNIQUE INDEX `produto_nome_produto_key`(`nome_produto`),
    PRIMARY KEY (`id_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categoria_produto` (
    `id_categoria_produto` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao_categoria_produto` VARCHAR(64) NOT NULL,

    UNIQUE INDEX `categoria_produto_descricao_categoria_produto_key`(`descricao_categoria_produto`),
    PRIMARY KEY (`id_categoria_produto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `unidade_medida` (
    `id_unidade_medida` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_unidade_medida` VARCHAR(16) NOT NULL,
    `sigla_unidade_medida` VARCHAR(4) NOT NULL,

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
    `descricao_produto_filial` VARCHAR(255) NOT NULL,
    `perecivel_produto_filial` BOOLEAN NOT NULL,
    `preco_produto_filial` DOUBLE NOT NULL,
    `quantidade_atual_produto_filial` DOUBLE NOT NULL DEFAULT 0,
    `quantidade_minima_produto_filial` DOUBLE NOT NULL DEFAULT 0,
    `quantidade_seguranca_produto_filial` DOUBLE NOT NULL DEFAULT 0,
    `data_vencimento_produto_filial` DATE NOT NULL,

    PRIMARY KEY (`id_produto_filial`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `instituicao` ADD CONSTRAINT `instituicao_tipo_instituicao_fkey` FOREIGN KEY (`tipo_instituicao`) REFERENCES `tipo_instituicao`(`id_tipo_instituicao`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_fk_logradouro_fkey` FOREIGN KEY (`fk_logradouro`) REFERENCES `logradouro`(`id_logradouro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_fk_bairro_fkey` FOREIGN KEY (`fk_bairro`) REFERENCES `bairro`(`id_bairro`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_fk_cidade_fkey` FOREIGN KEY (`fk_cidade`) REFERENCES `cidade`(`id_cidade`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `endereco` ADD CONSTRAINT `endereco_fk_estado_fkey` FOREIGN KEY (`fk_estado`) REFERENCES `estado`(`id_estado`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `polo` ADD CONSTRAINT `polo_fk_instituicao_fkey` FOREIGN KEY (`fk_instituicao`) REFERENCES `instituicao`(`id_instituicao`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `polo` ADD CONSTRAINT `polo_fk_endereco_fkey` FOREIGN KEY (`fk_endereco`) REFERENCES `endereco`(`id_endereco`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estabelecimento` ADD CONSTRAINT `estabelecimento_fk_fisica_fkey` FOREIGN KEY (`fk_fisica`) REFERENCES `fisica`(`id_fisica`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estabelecimento` ADD CONSTRAINT `estabelecimento_fk_juridica_fkey` FOREIGN KEY (`fk_juridica`) REFERENCES `juridica`(`id_juridica`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `estabelecimento` ADD CONSTRAINT `estabelecimento_fk_tipo_estabelecimento_fkey` FOREIGN KEY (`fk_tipo_estabelecimento`) REFERENCES `tipo_juridico`(`id_tipo_juridico`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filial` ADD CONSTRAINT `filial_fk_estabelecimento_fkey` FOREIGN KEY (`fk_estabelecimento`) REFERENCES `estabelecimento`(`id_estabelecimento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filial` ADD CONSTRAINT `filial_fk_polo_fkey` FOREIGN KEY (`fk_polo`) REFERENCES `polo`(`id_polo`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `filial` ADD CONSTRAINT `filial_fk_endereco_fkey` FOREIGN KEY (`fk_endereco`) REFERENCES `endereco`(`id_endereco`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborador` ADD CONSTRAINT `colaborador_fk_fisica_fkey` FOREIGN KEY (`fk_fisica`) REFERENCES `fisica`(`id_fisica`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `colaborador` ADD CONSTRAINT `colaborador_fk_funcao_fkey` FOREIGN KEY (`fk_funcao`) REFERENCES `funcao`(`id_funcao`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proprietario_estabelecimento` ADD CONSTRAINT `proprietario_estabelecimento_fk_colaborador_fkey` FOREIGN KEY (`fk_colaborador`) REFERENCES `colaborador`(`id_colaborador`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `proprietario_estabelecimento` ADD CONSTRAINT `proprietario_estabelecimento_fk_estabelecimento_fkey` FOREIGN KEY (`fk_estabelecimento`) REFERENCES `estabelecimento`(`id_estabelecimento`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario_filial` ADD CONSTRAINT `funcionario_filial_fk_colaborador_fkey` FOREIGN KEY (`fk_colaborador`) REFERENCES `colaborador`(`id_colaborador`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funcionario_filial` ADD CONSTRAINT `funcionario_filial_fk_filial_fkey` FOREIGN KEY (`fk_filial`) REFERENCES `filial`(`id_filial`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_filial_fkey` FOREIGN KEY (`fk_filial`) REFERENCES `filial`(`id_filial`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_produto_fkey` FOREIGN KEY (`fk_produto`) REFERENCES `produto`(`id_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_categoria_produto_fkey` FOREIGN KEY (`fk_categoria_produto`) REFERENCES `categoria_produto`(`id_categoria_produto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `produto_filial` ADD CONSTRAINT `produto_filial_fk_unidade_medida_fkey` FOREIGN KEY (`fk_unidade_medida`) REFERENCES `unidade_medida`(`id_unidade_medida`) ON DELETE RESTRICT ON UPDATE CASCADE;
