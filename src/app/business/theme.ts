
export interface ITheme {
    backgroundColor: string;
    foregroundColor: string;
}

export abstract class Theme implements ITheme {
    backgroundColor: string;
    foregroundColor: string;
}