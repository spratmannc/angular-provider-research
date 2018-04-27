import { IForm } from "../../business/form";
import { Component } from "@angular/core";

@Component({
    selector: "formb",
    template: `
        <label>Type Something here: </label>
        <input type="text" placeholder="get your type on..." />
    `
})
export class FormB implements IForm {
    name: string = "The Other Form";
}