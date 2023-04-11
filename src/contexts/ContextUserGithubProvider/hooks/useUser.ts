import { useContext }        from "react";
import { ContextUserGithub } from "..";

/**
 * @hook Resgata o perfil do usuário do contexto.
 * @returns O Usuário do Perfil
 */
export default function useUser() {
    return useContext(ContextUserGithub).user
}