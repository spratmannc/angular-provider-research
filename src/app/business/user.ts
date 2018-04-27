import { IForm } from "./form";

export interface IExperimentMap {
    [experiment: string]: boolean;
}

export interface IUser {
    name: string;
    experiments: IExperimentMap;
    form: string;
}