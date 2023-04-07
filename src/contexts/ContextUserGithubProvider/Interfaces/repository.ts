export interface IRepository {
    /** Nome do Repositório */
    name: string,
    /** Workspace do Repositório */
    workspace: string,
    /** Descrição do Repositório */
    description?: string,
    /** Linguagens predominantes */
    predominantLanguage: TPredominantsLanguages,
    /** Quantidade de Branchs */
    branchs: number,
    /** Repositório está favoritado? */
    starred?: boolean
}
export type TPredominantsLanguages = 'Javascript' | 'Typescript' |'React' | 'HTML' | 'CSS' | 'PHP';