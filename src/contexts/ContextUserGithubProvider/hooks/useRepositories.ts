import { useContext } from "react";
import { ContextUserGithub } from "..";

export default function useRepositories() {
    const { repositories, starreds} = useContext(ContextUserGithub)
    return [ repositories, starreds ]
}