import { useContext }        from "react";
import { ContextUserGithub } from "..";

/**
 * @hook Resgata os Repositórios do usuário do perfil pelo contexto.
 */
export default function useRepositories() {
    const { repositories } = useContext(ContextUserGithub)
    return repositories
}