import { IRepository } from "./repository";

export interface IRepositoriesState {
    repositories             : IRepository[],
    repositoriesStarreds     : IRepository[],
    totalRepositories        : number,
    totalRepositoriesStarred : number 
}

export enum EActionsTypeRepositoriesState {
    ACTION_LOAD_REPOSITORIES   = 'LOAD_REPOSITORIES',
    ACTION_FILTER_REPOSITORIES = 'FILTER_REPOSITORIES',
    ACTION_SEARCH_REPOSITORIES = 'SEARCH_REPOSITORIES'
}

export interface IPropsActionRepositoriesState {
    type: EActionsTypeRepositoriesState,
    payload?: any
}