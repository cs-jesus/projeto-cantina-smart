export function lengthValidate(value: string, minLength: number, maxLength: number) {
    const length = value.trim().length;

    if (length < minLength || length > maxLength) {
        throw new Error(`O tamanho do campo deve estar entre ${minLength} e ${maxLength} caracteres.`);
    }
}