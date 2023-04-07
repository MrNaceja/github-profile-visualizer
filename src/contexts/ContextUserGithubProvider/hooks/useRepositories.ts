import { useContext } from "react";
import { ContextUserGithub } from "..";

export default function useRepositories() {
    return useContext(ContextUserGithub).repositories
}