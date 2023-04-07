import { useContext } from "react";
import { ContextUserGithub } from "..";

export default function useUser() {
    return useContext(ContextUserGithub).user
}