export type User = {
    handle: string,
    name: string,
    email:string,
    password: string,
}

export type CredentialsRegister = Pick<User, 'handle' |'email' |'name'>&{
    password:string
    repeatPassword: string
}