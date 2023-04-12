/**
 * @tutorial Mudar aqui para ver outros perfis.
 * Certifique-se de informar corretamente o nome de usuário do github para ver seus dados refletidos na interface (não há tratammento de erro).
 */
export const USER_PROFILE_TO_INTERFACE = 'MrNaceja';

export interface IUser {
    /** Nome de Usuário */
    name: string,
    /** Avatar do Usuário */
    avatar: string,
    /** Biografia do Usuário */
    bio: string,
    /** Cidade onde o Usuário habita */
    location: string,
    /** Companhia onde o Usuário trabalha atualmente  */
    company: string,
    /** URL do perfil do Github do Usuário */
    githubUrl: string
}