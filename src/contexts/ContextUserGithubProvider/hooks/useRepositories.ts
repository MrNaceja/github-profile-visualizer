import { useContext }        from "react";
import { ContextUserGithub } from "..";

/**
 * @hook Resgata os Repositórios do perfil do contexto.
 * @returns [ Repositórios, Repositórios Favoritados ]
 */
export default function useRepositories() {
    const { repositories, starreds} = useContext(ContextUserGithub)
    return [ repositories, starreds ]
}