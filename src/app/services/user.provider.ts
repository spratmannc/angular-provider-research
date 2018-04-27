import { IUser, IExperimentMap } from "../business/user";
import { Injectable, InjectionToken, ValueProvider } from "@angular/core";

/** Token for next time */
export const USER: InjectionToken<IUser> = new InjectionToken<IUser>("user");

export const CurrentUserProvider : ValueProvider = {
    provide: USER,

    // here we are using a static value
    // but in a prod scenario, this would be provided via the Model
    useValue: <IUser> {
        name: "Roger",
        experiments: {
            "bg": false
        }
    }
};
