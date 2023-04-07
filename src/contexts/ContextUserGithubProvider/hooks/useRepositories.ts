import { useContext } from "react";
import { ContextUserGithub } from "..";

export default function useRepositories(bStarred : boolean = false) {
    const { repositories, starreds} = useContext(ContextUserGithub)
    return bStarred ? [ repositories, starreds ] : [repositories]
}