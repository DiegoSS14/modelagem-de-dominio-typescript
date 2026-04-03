export default class Validator {

    static combine(...errors: (string | null)[]): string[] | null {
        const res = errors.filter(error => error !== null) as string[]
        return res.length > 0 ? res : null
    }

    static notNull(text: string, error: string): string | null {
        return text === null ? error : null
    }

    static notUndefined(text: string, error: string) {
        return text === undefined ? error : null
    }

    static notEmpty(text: string, error: string) {
        return text.trim() === '' ? error : null
    }

    static sizeSmallerThen(value: string | any[], maxSize: number, error: string) {
        return value.length <= maxSize ? error : null
    }

    static isValidEmail(email: string): boolean {
        const regex: RegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return regex.test(email)
    }
}