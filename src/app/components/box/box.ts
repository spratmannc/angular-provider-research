import { Component, Inject } from "@angular/core";
import { THEME } from "../../services/theme.provider";
import { ITheme } from "../../business/theme";

@Component({
    selector: "box",
    templateUrl: "./box.html",
    styleUrls: [
        "./box.less"
    ]
})
export class MyBox {

    foregroundColor: string;
    backgroundColor: string = "#009933";

    constructor(@Inject(THEME) private theme: ITheme) {
        this.backgroundColor = theme.backgroundColor;
        this.foregroundColor = theme.foregroundColor;
    }
}