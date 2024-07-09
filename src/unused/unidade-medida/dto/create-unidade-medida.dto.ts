import { IsAlpha, IsString, Length } from 'class-validator';
import { UnidadeMedida } from '../entities/unidade-medida.entity';

const nomeMinLenght = 3, nomeMaxLenght = 16;
const siglaMinLenght = 2, siglaMaxLenght = 4;

export class CreateUnidadeMedidaDto extends UnidadeMedida {

  @IsString({ message: "O tipo de dado deve ser uma string" })
  @Length(nomeMinLenght, nomeMaxLenght, { message: "O campo deve conter entre ${nomeMinLenght} e ${nomeMaxLenght} caracteres." })
  @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
  //Implementar validação de registro unico - Deverá ser solucionado até o final da sprint 3
  nome: string;

  @IsString({ message: "O tipo de dado deve ser uma string" })
  @Length(siglaMinLenght, siglaMaxLenght, { message: "O campo deve conter entre ${siglaMinLenght} e ${siglaMaxLenght} caracteres." })
  @IsAlpha('pt-BR', { message: "O campo deve conter somente letras" })
  //Implementar validação de registro unico - Deverá ser solucionado até o final da sprint 3
  sigla: string;
}
