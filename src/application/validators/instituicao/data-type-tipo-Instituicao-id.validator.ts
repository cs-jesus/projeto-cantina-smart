import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

ValidatorConstraint({ name: 'dataType', async: false })
@Injectable()
export class DataTypeTipoInstituicaoIdValidator implements ValidatorConstraintInterface {
    validate(value: any, args: ValidationArguments) {
        return typeof value === 'number';
    }

    defaultMessage(args: ValidationArguments) {
        return `O valor de ${args.property} deve ser um número, mas é ${typeof args.value}`;
    }
}