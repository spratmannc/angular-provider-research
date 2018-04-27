import { InjectionToken, FactoryProvider } from "@angular/core";
import { ITheme } from "../business/theme";
import { BlueTheme } from "../business/bluetheme";
import { RedTheme } from "../business/redtheme";
import { IUser } from "../business/user";
import { USER } from "./user.provider";

export const THEME: InjectionToken<ITheme> = new InjectionToken<ITheme>("theme");

/**
 * Selects a theme based on experiment participation
 * @param user Users service
 */
export function chooseTheme(user: IUser): ITheme {

    // tslint:disable-next-line:no-string-literal
    if(user.experiments["bg"] === true) {
        return new BlueTheme();
    } else {
        return new RedTheme();
    }

}

/**
 * Defines a provider that chooses the appropriate theme based on
 * Information about the User
 */
export const ThemeProvider : FactoryProvider = {
    provide: THEME,
    useFactory: chooseTheme,
    deps: [ USER ]
};