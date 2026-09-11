export interface RegisterUserDTO {
    name: string
    email: string
    password: string
    role?: string // possível futuramente retirar colocando regra, por exemplo: somente admin pode add admin (nova rota)
}