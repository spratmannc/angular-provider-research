import { Component } from "@angular/core";
import { IForm } from "../../business/form";

@Component({
    selector: "forma",
    template: `<input type="text" placeholder="this is form a" />`
})
export class FormA implements IForm {
    name: string = "Form A";
}