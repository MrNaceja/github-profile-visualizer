import { useContext }        from "react";
import { ContextUserGithub } from "..";

/**
 * @hook Resgata o estado dos dados dos repositórios do usuário do perfil pelo contexto.
 */
export default function useRepositories() {
    const { repositoriesState } = useContext(ContextUserGithub)
    return repositoriesState
}